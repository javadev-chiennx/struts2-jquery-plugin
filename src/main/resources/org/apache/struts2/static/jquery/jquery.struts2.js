/*
 * jquery.struts2.js
 *
 * Integration of jquery with struts 2 for first class support of Ajax in 
 * struts 2 using the jQuery javascript library
 *
 * Requires use of jQuery. Tested with jQuery 1.3 and above
 *
 * Copyright (c) 2008 Eric Chijioke (obinna a-t g mail dot c o m)
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 *  Release Notes:
 *  
 */

(function($){
	
	/**
	 * STRUTS2 JQUERY COMPONENT/WIDGET BINDING
	 */
	_struts2_jquery = {
			
		//pre-binding function of the type function(element){}. called before binding the element
		// returning false will prevent the binding of this element
		preBind: null,
		
		//post-binding function of the type function(element){}. called before binding the element
		postBind: null,
			
		bind: function(el) {
			
			if(el) {
				var $el = $(el);
				el = $el[0];
				var attributes = el.attributes;
				var options = {};
				
				//attributes names are sometimes returned all lower/upper case so we need to force to a case for uniformity
				for(var i = 0; i < attributes.length; i++) {
					options[attributes[i].name.toLowerCase()] = attributes[i].value;
				}
				
				var tag = el.tagName.toLowerCase();
				
				//extension point to allow custom pre-binding processing
				if(typeof(_struts2_jquery.preBind) != "function" || _struts2_jquery.preBind($el)) {
					
					var widget = $el.attr("widget") || tag;
									
					this[widget]($el, options);
				
					//extension point to allow custom post-binding processing
					if(_struts2_jquery.postBind && (typeof(_struts2_jquery.postBind) == "function")) {
						return _struts2_jquery.postBind(el);
					}
				}
				
			}
		},
		
		// register a custom widget, providing the widget name and a bind handler function of the form: 
		//	   function($elem, options) - where '$elem' will be the jquery object of the widget element and 'options' will be a name/value hash of the element attributes
		// The widget element must have a 'widget' attribute attribute with the widget's name as its value.
		widget: function(name, binder) {
			
			if(name && binder) {
			
				this[name] = binder;
			}
		},
		
		presence: function($elem, options) {

			if(options.disabled == 'true') {

				$elem.attr("disabled",true);
				$elem.addClass("disabled");
				
				if(options.hidedisabled == "true") {
				
					$elem.hide();
				}
			}
		},
		
		base:  function($elem, options){
		
			if(options.hidetopics) {			  
				var topics = options.hidetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_hide',options);
				}
			}

			if(options.showtopics) {			  
				var topics = options.showtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_show',options);
				}
			}

			if(options.removetopics) {			  
				var topics = options.removetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_remove',options);
				}
			}

			this.presence($elem, options);
		},
		
		interactive:  function($elem, options){

			if(options.enabletopics) {			  
				var topics = options.enabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_enable',options);
				}
			}

			if(options.disabletopics) {			  
				var topics = options.disabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_disable',options);
				}
			}
		},
		
		container:  function($elem, options, loadHandlerName){

			if(options.reloadtopics) {			  
				var topics = options.reloadtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					var topic = topics[i];
					if(!$elem.isSubscribed(topic)) {	//need to check because input: also sets reloadTopics
						$elem.subscribe(topics[i], loadHandlerName, options);
					}
				}
			};
			
			
			//load container using ajax
			//using events to solve issue of element existing outside of scope of embedded page and continuing polling when embedded element unloaded / 
			//, and not losing reference to element ('queuing' multiple polls)
			$elem.bind('_struts2_jquery_trigger_fetch', function(event, fetchOptions, loadHandlerName) {
		    	var containerTopic = '_struts2_jquery_topic_load_' + fetchOptions.id;
	    		$elem.subscribe(containerTopic, loadHandlerName);
	    		$elem.publish(containerTopic, fetchOptions);	
	    		
	    		if(fetchOptions.pollmillis && fetchOptions.pollmillis > 0) {
	    			var self = $elem;
	    			setTimeout(function(){
	    					self.trigger('_struts2_jquery_trigger_fetch', [fetchOptions,loadHandlerName]);},
	    					fetchOptions.pollmillis
	    			);
	    		}
	    		
	    		return false;
			});
			
		},
	
		input:  function($elem, options, loadHandlerName){
			
			if(!options) { return; }
			
			if(options.reloadtopics) {			  
				var topics = options.reloadtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					var topic = topics[i];
					if(!$elem.isSubscribed(topic)) {	//need to check because container: also sets reloadTopics
						$elem.subscribe(topics[i], loadHandlerName, options);
					}
				}
			}
			
			if(options.focustopics) {			  
				var topics = options.focustopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_focus',options);
				}
			}	
			
			if(options.blurtopics) {			  
				var topics = options.blurtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_blur',options);
				}
			}	
			
			//bind change event to onChange topics
			if(options.onchangetopics) {  
				var topics = options.onchangetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.publishOnEvent('change',topics[i]);
				}
			}	
			
			//bind focus event to onFocus topics
			if(options.onfocustopics) {  
				var topics = options.onfocustopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.publishOnEvent('focus',topics[i]);
				}
			}	
			
			//bind blur event to onBlur topics
			if(options.onblurtopics) {  
				var topics = options.onblurtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.publishOnEvent('blur',topics[i]);
				}
			}
		},
				
		
		action: function($elem, options, containerLoadHandlerName, linkLoadHandlerName){
			
	    	if($elem.attr('href')) { $elem.attr('href','#'); }
	    				
	    	//bind event to onClick topics
			if(options.onclicktopics) {  
				var topics = options.onclicktopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
									
					var topic = topics[i];
					$elem.createTopic(topic);
					$elem.bind('click', function(event){
						
						$target = $(this);
						
						if(!$target.disabled || $target.disabled != true) {

							
							var publishOptions = options || {};
							$.extend(publishOptions,event.data);
							publishOptions.disabled = false;
							
							$target.publish(topic, publishOptions, event);
						}
					});
				}
			}
			
	    	var actionTopic = '_struts2_jquery_action_topic_' + options.id;
	    	
	    	var href = options.href;
	    	
	    	if(href == null || href == "") {
	    		href = "#";
	    		options.href = href;
	    	}

    		//subscribe all targets to this action's custom execute topic
	    	if(options.targets) {  
	    		
	    		//target subscription needs to be done after document load in case element exists in the dom AFTER the current action object 
	    		$(function() {
					var targets = options.targets.split(',');
					for ( var i = 0; i < targets.length; i++) {
						var target = targets[i];
						if('#tab' == target) {
							$elem.closest('.ui-tabs-panel').subscribe(actionTopic, containerLoadHandlerName, options);
			    		} else {
			    			$('#' + target).subscribe(actionTopic, containerLoadHandlerName, options);
			    		}
					}
	    		});
	    		
			} else {   // if no targets, then the action can still execute ajax request and will handle itself (no loading result into container
					
				//bind event topic listeners
		    	if(options.oncompletetopics || options.onsuccesstopics || options.onerrortopics) {

		    		$elem.subscribe(actionTopic, linkLoadHandlerName, options);
		    	}
			}

	    	options.src = href;

			$elem.publishOnEvent('click', actionTopic);			//bind custom action topic to click event
			
		},
			
		select: function($elem, options){

			var loadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			this.interactive($elem, options);
			this.container($elem, options, loadHandlerName);  //Note: reloadTopics already implemented by input
			this.input($elem, options, loadHandlerName);
			
			if(options.src) {
				
				$elem.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);
			}
		},
		
		div: function($elem, options){

			var loadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			this.container($elem, options, loadHandlerName);

			if(options.draggable == 'true') {
				
		        var draggableOptionsStr = options.draggableoptions;
		        var draggableOptions = window[draggableOptionsStr];
		        if (!draggableOptions) {
		        	draggableOptions = eval ("( " + draggableOptionsStr + " )" );
		        }
				$elem.draggable(draggableOptions);
			}
			
			if(options.droppable == 'true') {

		        var droppableOptionsStr = options.droppableoptions;
		        var droppableOptions = window[droppableOptionsStr];
		        if (!droppableOptions && droppableOptionsStr && droppableOptionsStr.length > 0) {
		        	droppableOptions = eval ("( " + droppableOptionsStr + " )" );
		        } else {
		        	sortableOptions = {};
		        }
				$elem.droppable(droppableOptions);
			}
			
			if(options.resizable == 'true') {

		        var resizableOptionsStr = options.resizableoptions;
		        var resizableOptions = window[resizableOptionsStr];
		        if (!resizableOptions && resizableOptionsStr && resizableOptionsStr.length > 0) {
		        	resizableOptions = eval ("( " + resizableOptionsStr + " )" );
		        } else {
		        	sortableOptions = {};
		        }
				$elem.resizable(resizableOptions);
			}
			
			if(options.sortable == 'true') {

		        var sortableOptionsStr = options.sortableoptions;
		        var sortableOptions = window[sortableOptionsStr];
		        if (!sortableOptions && sortableOptionsStr && sortableOptionsStr.length > 0) {
		        	sortableOptions = eval ("(" + sortableOptionsStr + ")" );
		        } else {
		        	sortableOptions = {};
		        }
		        
		        var $div = $elem;
					
				if(options.onsortableupdatetopics) {  
					var topics = options.onsortableupdatetopics.split(',');										
			        sortableOptions.update = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
					
				if(options.onsortablestarttopics) {  
					var topics = options.onsortablestarttopics.split(',');										
			        sortableOptions.start = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
					
				if(options.onsortablesorttopics) {  
					var topics = options.onsortablesorttopics.split(',');										
			        sortableOptions.sort = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
					
				if(options.onsortablestoptopics) {  
					var topics = options.onsortablestoptopics.split(',');										
			        sortableOptions.stop = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
					
				if(options.onsortablereceivetopics) {  
					var topics = options.onsortablereceivetopics.split(',');										
			        sortableOptions.receive = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
					
				if(options.onsortableremovetopics) {  
					var topics = options.onsortableremovetopics.split(',');										
			        sortableOptions.remove = function(event,ui) {			        	
			        	for ( var i = 0; i < topics.length; i++) {
				        	$div.publish(topics[i], ui, event);
						}			        	
			        };
				}
				
				$elem.sortable(sortableOptions);
				
			}
			
	    	//load div using ajax
			if(options.src) {				

				$elem.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);
//				
//				//publishing not triggering to prevent event propagation issues
//		    	var divTopic = '_struts2_jquery_topic_load_' + options.id;
//	    		$elem.subscribe(divTopic, loadHandlerName);
//	    		$elem.publish(divTopic,options);				
			}
		},
		
		form: function($elem, options){

			var submitHandlerName = '_struts2_jquery_form_submit';
			var containerLoadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
	    				
			//bind submit event to onSubmit topics
			if(options.onsubmittopics) {  
				var topics = options.onsubmittopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.publishOnEvent('submit',topics[i]);
				}
			}	
			
			var formTopic = '_struts2_jquery_form_topic_' + options.id;
	    	
	    	var action = options.action;
	    	if(action == null || action == "") {
	    		options.action = "#";
	    	}

    		options.src = options.action;
			options.formids = options.id;			
			var targetId = options.targetid;
			
			if(options.submittopics) {			  
				var topics = options.submittopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					
					if(targetId) {						
						if('#tab' == targetId) {
							$elem.closest('.ui-tabs-panel').subscribe(topics[i], containerLoadHandlerName, options);
			    		} else {
			    			$('#' + targetId).subscribe(topics[i], containerLoadHandlerName, options);
			    		}
					} else {

						$elem.subscribe(topics[i], submitHandlerName, options);
					}	
				}
			}
			
    		//subscribe all targets to this forms's custom execute topic
	    	if(targetId) {  
	    		
	    		//target subscription needs to be done after document load in case element exists in the dom AFTER the current action object 
	    		$(function() {
					if('#tab' == targetId) {
						$elem.closest('.ui-tabs-panel').subscribe(formTopic, containerLoadHandlerName, options);
		    		} else {
		    			$('#' + targetId).subscribe(formTopic, containerLoadHandlerName, options);
		    		}
	    		});
	    		
			} else {   // if no targets, then the form can still post normally
					
				//bind event topic listeners
		    	//if(options.oncompletetopics || options.onsuccesstopics || options.onerrortopics){
				$elem.subscribe(formTopic, submitHandlerName, options);
		    	//}
			}
	    	
	    	//bind custom form topic to submit event
	    	$elem.submit(function(event){
	    		event.preventDefault();
	    		$elem.publish(formTopic, event.data, event);    
	    	});
			
		},
		
		a: function($elem, options){
			
			var linkLoadHandlerName = '_struts2_jquery_action_request';
			var containerLoadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			this.interactive($elem, options);
			this.action($elem, options, containerLoadHandlerName, linkLoadHandlerName);
			
		},
		
		button: function($elem, options){
			
			var linkLoadHandlerName = '_struts2_jquery_action_request';
			var containerLoadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			//	this.container($elem, options, containerLoadHandlerName);
			this.interactive($elem, options);
			this.action($elem, options, containerLoadHandlerName, linkLoadHandlerName);

			//$elem.attr('type','button');  (not permitted by ie - covered by renderer)
			$elem.removeAttr('name');
		},
		
		dialog: function($elem, options){
			
			if(options.hidetopics) {			  
				var topics = options.hidetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_dialog_close',options);
				}
			}

			if(options.showtopics) {			  
				var topics = options.showtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_dialog_open',options);
				}
			}

			if(options.removetopics) {			  
				var topics = options.removetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_dialog_destroy',options);
				}
			}
			
			if(options.enabletopics) {			  
				var topics = options.enabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_dialog_enable',options);
				}
			}

			if(options.disabletopics) {			  
				var topics = options.disabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_dialog_disable',options);
				}
			}
			
			var parameters = {};
			parameters.autoOpen = false;
			parameters.modal = eval(options.modal ? options.modal : false);
			parameters.resizable = eval(options.resizable ? options.resizable : true);
			parameters.sortable = eval(options.sortable ? options.sortable : true);
			parameters.draggable = eval(options.draggable ? options.draggable : true);
			if(options.height) { parameters.height = eval(options.height); }
			if(options.width) { parameters.width = eval(options.width); }
			if(options.position) { parameters.position = eval(options.position); }
			if(options['class']) { parameters.dialogClass = options['class']; }
			
			if(options.title) { $elem.attr("title", options.title); }
			if(options.data) {  $elem.data = options.data; }	
			
			if(options.buttons) {
				
				parameters.buttons = {};
				
				var buttontopics;
				if(options.buttontopics) {
					buttontopics = options.buttontopics.split(',');
				} else {
					buttontopics = [];
				}
				
				var $dialog = $elem;  //used for closure
				$dialog.data('buttonTopics',{});  //used for closure
								
				var buttons = options.buttons.split(',');
				for ( var i = 0; i < buttons.length; i++) {
					var button = buttons[i];
					var topic = buttontopics[i];
					if(buttontopics.length >= i+1) {
						$dialog.data('buttonTopics')[button] = topic;  
						parameters.buttons[button] = function(event) { 
							$elem.publish($dialog.data('buttonTopics')[$(event.target).text()], $dialog, event);
						};
					} else {
						parameters.buttons[button] = function(event) {};
					}
				}
			}

			$elem.css("display", "none");
			
			if(options.src) {

				var loadHandlerName = '_struts2_jquery_container_load';
				
				this.container($elem, options, loadHandlerName);
				
				$elem.bind('dialogopen', function(event, ui) {

					$elem.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);				
//					$elem.unbind('struts2_jquery_topic_load');
//					$elem.bind('struts2_jquery_topic_load', null, _subscribe_handlers[loadHandlerName]);
//					$elem.trigger('struts2_jquery_topic_load', options);
					
				});
			}			

	        var userOptionsStr = options.options;
	        var userOptions = window[userOptionsStr];
	        if (!userOptions) {
	        	userOptions = eval ("( " + userOptionsStr + " )" );
	        }
	        $.extend(parameters, userOptions);
	        
			//note: id is set on dialog contents
			$elem.dialog(parameters);
		},
		
		tabbedpane: function($elem, options){
			
	    	//instantiate the tabbed pane
			if(!options) { options = {}};
			options.cache = options.iscache || false;
			
	        var userOptionsStr = options.options;
	        var userOptions = window[userOptionsStr];
	        if (!userOptions) {
	        	userOptions = eval ("( " + userOptionsStr + " )" );
	        }
	        $.extend(options, userOptions);
	        
	        //fix for clash btwn ie & tabbedPane where ie automatically adds ALL possible element properties as attributes
	        options.disabled = [];
	        
	        //move any static tab content outside the list
	        $("ul > *:not(li)",$elem).appendTo($elem);
	        
	    	var $tabs = $elem.tabs(options);
	    	
	    	$("a",$tabs).each( function(tabIndex, el){
	    			
	    		$tab = $(el);
	    		
	    		if($tab.attr("isdisabled") == 'true'){
					$tabs.tabs('disable', tabIndex);
	    		}
	    		
	    		if($tab.attr("isselected")){
					$tabs.tabs('select', tabIndex);
	    		}
	    		
	    		var hideTopics = $tab.attr("hidetopics");
				if(hideTopics) {			  
					var topics = hideTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_hideTab',tabIndex);
					}
				}

	    		var showTopics = $tab.attr("showtopics");
				if(showTopics) {			  
					var topics = showTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_showTab',tabIndex);
					}
				}

	    		var removeTopics = $tab.attr("removetopics");
				if(removeTopics) {			  
					var topics = removeTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_removeTab',tabIndex);
					}
				}

	    		var reloadTopics = $tab.attr("reloadtopics");
				if(reloadTopics) {			  
					var topics = reloadTopic.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_reloadTab',tabIndex);
					}
				}

	    		var focusTopics = $tab.attr("focustopics");
				if(focusTopics) {			  
					var topics = focusTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_selectTab',tabIndex);
					}
				}	

				//TODO: This isn't done properly (no 'blurring') - probably remove
	    		var blurTopics = $tab.attr("blurtopics");
				if(options.blurtopics) {			  
					var topics = blurTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_blur',tabIndex);
					}
				}	

	    		var enableTopics = $tab.attr("enabletopics");
				if(enableTopics) {			  
					var topics = enableTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_enableTab',tabIndex);
					}
				}

	    		var disableTopics = $tab.attr("disabletopics");
				if(disableTopics) {			  
					var topics = disableTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.subscribe(topics[i],'_struts2_jquery_disableTab',tabIndex);
					}
				}

				//TODO: This isn't done properly (no 'change' event) - probably remove
	    		var onChangeTopics = $tab.attr("onchangetopics");
				if(onChangeTopics) {  
					var topics = onChangeTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.publishOnEvent('change',topics[i]);
					}
				}	

	    		var onFocusTopics = $tab.attr("onfocustopics");
				if(onFocusTopics) {  
					var topics = onFocusTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.publishOnEvent('tabsshow',topics[i]);
					}
				}	

				//TODO: This isn't done properly (no 'blur' event)
	    		var onBlurTopics = $tab.attr("onblurtopics");
				if(onBlurTopics) {  
					var topics = onBlurTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$tab.publishOnEvent('blur',topics[i]);
					}
				}
	    	});
		},
		
		accordion: function($elem, options){
			
			//instantiate the tabbed pane
			if(!options) { options = {}};
			options.cache = options.iscache || false;
			
			var userOptionsStr = options.options;
			var userOptions = window[userOptionsStr];
			if (!userOptions) {
				userOptions = eval ("( " + userOptionsStr + " )" );
			}
			$.extend(options, userOptions);
			
			options.header = '._struts2_jquery_class_accordionitem_header';

			options.autoHeight = options.autoheight;
			options.fillSpace = options.fillspace;
			options.clearStyle = options.clearstyle;
						
			var $accordion = $elem.accordion(options);
			
			if(options.disabled) {			  
				$accordion.accordion( 'disable' );
			}
			
			if(options.removetopics) {			  
				var topics = options.removetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_accordion_remove',options);
				}
			}
			
			if(options.enabletopics) {			  
				var topics = options.enabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_accordion_enable',options);
				}
			}
			
			if(options.disabletopics) {			  
				var topics = options.disabletopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					$elem.subscribe(topics[i],'_struts2_jquery_accordion_disable',options);
				}
			}
			
			$("._struts2_jquery_class_accordionitem_body",$accordion).each( function(itemIndex, el){
					
				var $item = $(el);
				
				$item.index = itemIndex;
				    		
				if($item.attr("isactive")){
					$accordion.accordion('option', 'active', itemIndex);
				}
				
				if($item.attr("disabled") == "true"){
					var $header = $item.prev();
					if($item.attr("hidedisabled") == "true") {
						$item.hide();
						$header.hide();
					} else {
						//ubind and rebind click events to bind our's first
						var clickEvents = $header.data("events").click;	
						$header.unbind("click");	        
						$header.addClass("ui-state-disabled").bind("click.__struts2jquery", function(e) {
					        e.preventDefault();
					        e.stopImmediatePropagation();
					    });				
						for(var i in clickEvents) {	
							$header.bind("click", clickEvents[i]);
						}			
					}
				}
				
				var hideTopics = $item.attr("hidetopics");
				if(hideTopics) {			  
					var topics = hideTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$item.subscribe(topics[i],'_struts2_jquery_accordion_hideItem',itemIndex);
					}
				}
			
				var showTopics = $item.attr("showtopics");
				if(showTopics) {			  
					var topics = showTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$item.subscribe(topics[i],'_struts2_jquery_accordion_showItem',itemIndex);
					}
				}
				
				if($item.attr("src")) {
			
					var itemAttributes = $item[0].attributes;
					var itemOptions = {};
					
					//attributes names are sometimes returned all lower/upper case so we need to force to a case for uniformity
					for(var i = 0; i < itemAttributes.length; i++) {
						itemOptions[itemAttributes[i].name.toLowerCase()] = itemAttributes[i].value;
					}

					
					//publishing not triggering to prevent event propagation issues
//					var loadHandlerName = '_struts2_jquery_container_load';
//					var loadTopic = '_struts2_jquery_topic_load_' + $item.attr("id");
//					$item.subscribe(loadTopic, loadHandlerName);

					this.container($item, options, loadHandlerName);
					var loadHandlerName = '_struts2_jquery_container_load';
					$item.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);
					
					$accordion.bind('accordionchange', function(event, ui) {												                                
						if((ui.newHeader.next()[0] == $item[0]) && (!itemOptions.cache || !$item.data('loaded'))) {
							$item.publish(loadTopic,itemOptions);			
						}
					});
					
			    	//load item using ajax if currently selected item or lazyLoad is not true
					if($item.hasClass(".ui-accordion-content-active") || !itemOptions.lazyload) {
						//$item.load(itemOptions.src);
						$item.publish(loadTopic,itemOptions);
					}
				}							
			});
		},		
		
		textfield: function($elem, options){
			
			var loadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			this.interactive($elem, options);
			this.container($elem, options, loadHandlerName);
			this.input($elem, options, loadHandlerName);

	    	//load select using ajax
			if(options.src) {

				$elem.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);
//
//				//publishing not triggering to prevent event propagation issues
//		    	var textfieldTopic = '_struts2_jquery_topic_load_' + options.id;
//	    		$elem.subscribe(textfieldTopic, loadHandlerName);
//	    		$elem.publish(textfieldTopic,options);
			}				
		},
		
		textarea: function($elem, options){
			
			var loadHandlerName = '_struts2_jquery_container_load';
			
			this.base($elem, options);
			this.interactive($elem, options);
			this.container($elem, options, loadHandlerName);
			this.input($elem, options, loadHandlerName);

	    	//load select using ajax
			if(options.src) {

				$elem.trigger('_struts2_jquery_trigger_fetch', [options,loadHandlerName]);
//
//				//publishing not triggering to prevent event propagation issues
//		    	var textareaTopic = '_struts2_jquery_topic_load_' + options.id;
//	    		$elem.subscribe(textareaTopic, loadHandlerName);
//	    		$elem.publish(textareaTopic,options);
			}				
		},
		
		datepicker: function($elem, options) {
			
			var dpOptions = {};
			dpOptions.altField = "#" + $elem.attr("id") + "_hidden";
			dpOptions.altFormat = "yy-mm-dd'T'00:00:00";  			//set the alternate hidden submitted date format				
			dpOptions.buttonImageOnly = true;						//show the button as an image
			dpOptions.showOn = "focus";
			
			if(options) {
				
				if(options.hidetopics) {			  
					var topics = options.hidetopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i],'_struts2_jquery_datepicker_hide',options);
					}
				}

				if(options.showtopics) {			  
					var topics = options.showtopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i],'_struts2_jquery_datepicker_show',options);
					}
				}

				if(options.removetopics) {			  
					var topics = options.removetopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i],'_struts2_jquery_datepicker_destroy',options);
					}
				}
				
				if(options.enabletopics) {			  
					var topics = options.enabletopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i],'_struts2_jquery_datepicker_enable',options);
					}
				}

				if(options.disabletopics) {			  
					var topics = options.disabletopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						$elem.subscribe(topics[i],'_struts2_jquery_datepicker_disable',options);
					}
				}
				
				var onAlwaysTopics = options.onalwaystopics;
				
				if(options.onbeforetopics) {  
					var onBeforeTopics = options.onbeforetopics.split(',');
					dpOptions.beforeShow = function(input){
						var $input = $(input);
						for ( var i = 0; i < onBeforeTopics.length; i++) {
							$input.publish(onBeforeTopics[i], $input);
						}

						if(onAlwaysTopics) {  
							var topics = onAlwaysTopics.split(',');
							for ( var i = 0; i < onBeforeTopics.length; i++) {
								$input.publish(onBeforeTopics[i], $input);
							}
						}
					};
				}
				
				if(options.onchangetopics) {  
					var onChangeTopics = options.onchangetopics.split(',');
					dpOptions.onSelect = function(input){
						var $input = $(input);
						for ( var i = 0; i < onChangeTopics.length; i++) {
							$input.publish(onChangeTopics[i], $input);
						}

						if(onAlwaysTopics) {  
							var topics = onAlwaysTopics.split(',');
							for ( var i = 0; i < onChangeTopics.length; i++) {
								$input.publish(onChangeTopics[i], $input);
							}
						}
					};
				}
				
				if(options.oncompletetopics) {  
					var onCompleteTopics = options.oncompletetopics.split(',');
					dpOptions.onClose = function(input){
						var $input = $(input);
						for ( var i = 0; i < onCompleteTopics.length; i++) {
							$input.publish(onCompleteTopics[i], $input);
						}

						if(onAlwaysTopics) {  
							var topics = onAlwaysTopics.split(',');
							for ( var i = 0; i < onCompleteTopics.length; i++) {
								$input.publish(onCompleteTopics[i], $input);
							}
						}
					};
				}
				
				dpOptions.buttonImage = options.imageurl;
				
				if(options.showbutton) {
					dpOptions.showOn = "both";							//Have the datepicker appear automatically when the field receives focus and when the button is clicked		
				} 
				
				dpOptions.buttonText = options.imagetooltip;
				dpOptions.changeMonth = options.changemonth;
				dpOptions.changeYear = options.changeyear;
				dpOptions.dateFormat = options.displayformat;
		        
				if(options.options) {
			        var userOptionsStr = options.options;
			        var userOptions = window[userOptionsStr];
			        if (!userOptions) {
			        	userOptions = eval ("( " + userOptionsStr + " )" );
			        }
			        $.extend(dpOptions, userOptions);
				}
			}
			
			$elem.datepicker(dpOptions);
			
		    if(options.year && options.month && options.day) {
		    	$elem.val($.datepicker.formatDate(options.displayformat, new Date(options.year, options.month, options.day)));
		    }
		    
			if(options.disabled == 'true') {

				$elem.attr("disabled", true);
				$elem.addClass("disabled");
			}
		}
	};		
		
	Struts2jQuery = _struts2_jquery;
	
	
	/**
	 * STRUTS2 JQUERY BUILT-IN ELEMENT HANDLERS 
	 */
		
	
	/** Base logic */
	//Register handler to hide an element
	$.subscribeHandler('_struts2_jquery_hide', function(event, data) {
		
		$(this).hide();
	});
	//Register handler to show an element
	$.subscribeHandler('_struts2_jquery_show', function(event, data) {
		
		$(this).show();
	});
	//Register handler to remove an element
	$.subscribeHandler('_struts2_jquery_remove', function(event, data) {
		
		$(this).remove();
	});
	

	/** Interactive logic */
	//Register handler to hide an element
	$.subscribeHandler('_struts2_jquery_enable', function(event, data) {
		
		$(this).attr("disabled",false);
		$(this).removeClass("disabled");
	});
	//Register handler to show an element
	$.subscribeHandler('_struts2_jquery_disable', function(event, data) {

		$(this).attr("disabled",true);
		$(this).addClass("disabled");
	});
	

	/** Input logic */	
	//Register handler to focus an input
	$.subscribeHandler('_struts2_jquery_focus',  function(event, data) {
		$(this).focus();
	});
	//Register handler to focus an input
	$.subscribeHandler('_struts2_jquery_blur',  function(event, data) {
		$(this).blur();
	});
	
	
	/** Container logic */
	//Register handler to load a container
	$.subscribeHandler('_struts2_jquery_container_load', function(event, data) {

		var container = $(event.target);
		
		//need to also make use of original attributes registered with the container (such as onCompleteTopics)
		var attributes = container[0].attributes;
		var options = {};
		for(var i = 0; i < attributes.length; i++) {
			options[attributes[i].name.toLowerCase()] = attributes[i].value;
		}
		
		$.extend(options,event.data);
		if(data && !data.id) { //we don;t want to merge 'options; when passed an element as the data (such as when published from an onsuccesstopic)
			$.extend(options,data);
		}
		
		var isDisabled = false;
		isDisabled = options.disabled == null ? isDisabled : options.disabled;
		isDisabled = container.attr('disabled') == null ? isDisabled : container.attr('disabled');
		if(event.originalEvent) {	//means that container load is being triggered by other action (link button/link click) need to see if that button/link is disabled
			isDisabled = $(event.originalEvent.currentTarget).attr("disabled") == null ? isDisabled : $(event.originalEvent.currentTarget).attr("disabled");
		}

		if(isDisabled != true && isDisabled != 'true') {

			var tagName = container[0].tagName.toLowerCase();
			
			//Show indicator element (if any)
			var indicatorId = options.indicatorid;
			if(indicatorId) { $('#' + indicatorId).show(); }
	
			//Set pre-loading text (if any)
			if(options.loadingtext) { container.html(options.loadingtext); }
			
			var onAlwaysTopics = options.onalwaystopics;
			
			//publish all 'before' and 'always' topics
			if(onAlwaysTopics) {  
				var topics = onAlwaysTopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container);
				}
			}
			
			if(options.onbeforetopics) {  
				var topics = options.onbeforetopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.publish(topics[i], container);
				}
			}
								
			var onSuccessTopics = options.onsuccesstopics;
			
			options.success = function (data, textStatus) {

				container.data('loaded',true);
				
				if(indicatorId) { $('#' + indicatorId).hide(); }
				
				if(tagName == 'input' || tagName == 'textarea') {
					
					container.val(data);
					
				} else if (tagName == 'select') {
				
					container[0].length = 0;
                
					if(typeof(data) == "object" || $.isArray(data)) {
						
						var i = -1;
						
						if(options.headerkey && options.headervalue) {
							var option = document.createElement("option");
							option.value = options.headerkey;
							option.text = options.headervalue;
							
							if(options.value == options.headervalue) {
								option.selected = true;
							}
							
							container[0].options[++i] = option;
						}
						
						if(options.emptyoption) {
							container[0].options[++i] = document.createElement("option");
						}
						
						for (var key in data) {
							
							var option = document.createElement("option");
							option.value = key;
							option.text = data[key];
	
							if(options.value == option.value) {
								option.selected = true;
							}
							
							container[0].options[++i] = option;
						}		
					}		  
					
				} else {
				
					container.html(data);
				}
						
				if(onSuccessTopics) {			  
					var topics = onSuccessTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
				if(onAlwaysTopics) {
					var topics = onAlwaysTopics.split(',');  
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
			}
				
			var onCompleteTopics = options.oncompletetopics;
			options.complete = function (xhr, textStatus, errorThrown) {
	
				if(indicatorId) { $('#' + indicatorId).hide(); }
				
				if(xhr.status == 404) {
					
					container.html(xhr.responseText);
				}
				
				if(onCompleteTopics) {			  
					var topics = onCompleteTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
				if(onAlwaysTopics) {  
					var topics = onAlwaysTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
			}
			
			var onErrorTopics = options.onerrortopics;
			options.error = function (XMLHttpRequest, textStatus, errorThrown) {

				if(options.errortext) { container.html(options.errortext); }
				
				if(onErrorTopics) {			
					var topics = onErrorTopics.split(',');  
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
				if(onAlwaysTopics) {  
					var topics = onAlwaysTopics.split(',');
					for ( var i = 0; i < topics.length; i++) {
						container.publish(topics[i], container);
					}
				}
			}
			
			//serialize forms & elements
			var serializeData;
			
			var formIds = options.formids;
			if(formIds) {
						
				var forms = formIds.split(',');  
				for ( var i = 0; i < forms.length; i++) {
					serializeData = (serializeData ? (serializeData + "&") : "") + $("#" + forms[i]).serialize();
				}
			}    		

			var elementIds = options.elementids;
			if(elementIds) {
						
				var elements = elementIds.split(',');
				for ( var i = 0; i < elements.length; i++) {
					var element = $('#' + elements[i])[0];
					if(element && element.name){
						serializeData = (serializeData ? (serializeData + "&") : "") + element.name + "=" + element.value;
						//serializeData[element.name] = element.value;
					}
				}
			}    
			if(serializeData && options.validate) {
				serializeData['struts.enableJSONValidation'] = true;
			}
			
			$.extend(options,{data: serializeData});	
			
			//if reloadtopics exist, need to reset reload topics with new options
			if(options.reloadtopics) {			  
				var topics = options.reloadtopics.split(',');
				for ( var i = 0; i < topics.length; i++) {
					container.unsubscribe(topics[i]);
					container.subscribe(topics[i], '_struts2_jquery_container_load', options);
				}
			}

			//load container using ajax
			if(options.src) {
				
				options.type = "POST";
				options.url = options.src;
	
				if(tagName == 'input' || tagName == 'textarea' || tagName == 'select') {
					options.dataType = "json";
				}
			
				if(!options.data) { options.data = {}; }	//fix 'issue' wherein IIS will reject post without data
				$.ajax(options);
			
			}
		}
	});

	
	/** Action logic */
	//Register handler to execute action with no target
	$.subscribeHandler('_struts2_jquery_action_request', function(event, data) {

		var action = $(event.target);
			
		var options = event.data;
		$.extend(options,data);

		var isDisabled = false;
		isDisabled = options.disabled == null ? isDisabled : options.disabled;
		isDisabled = action.attr('disabled') == null ? isDisabled : action.attr('disabled');
		if(event.originalEvent) {	//means that action is being triggered by other action (link button/link click) need to see if that button/link is disabled
			isDisabled = $(event.originalEvent.currentTarget).attr("disabled") == null ? isDisabled : $(event.originalEvent.currentTarget).attr("disabled");
		}
							
		if(isDisabled != true && isDisabled != 'true') {
			
			//Show indicator element (if any)
			if(options) {
					
				if(options.indicatorid) { $('#' + options.indicatorid).show(); }
					    				
				var indicatorId = options.indicatorid;
				var onSuccessTopics = options.onsuccesstopics;
				
				options.success = function (data, textStatus) {
					
					action.data('loaded',true);
									
					if(indicatorId) { $('#' + indicatorId).hide(); }
	
					if(options.errorelementid) { $("#" + options.errorelementid).hide(); }
					
					if(onSuccessTopics) {			  
						var topics = onSuccessTopics.split(',');
						for ( var i = 0; i < topics.length; i++) {
							action.publish(topics[i], action);
						}
					}
				}
					
				var onCompleteTopics = options.oncompletetopics;
				options.complete = function (xhr, textStatus, errorThrown) {
		
					if(indicatorId) { $('#' + indicatorId).hide(); }
									
					if(onCompleteTopics) {			  
						var topics = onCompleteTopics.split(',');
						for ( var i = 0; i < topics.length; i++) {
							action.publish(topics[i], action);
						}
					}
				}
				
				var onErrorTopics = options.onerrortopics;
				options.error = function (XMLHttpRequest, textStatus, errorThrown) {
					
					if(options.errorelementid) {
					
						var errorElement = $("#" + options.errorelementid);
						
						if(errorElement) {
							
							var errors = options.errortext ? new Array(options.errortext) : new Array(xhr.statusText);
						
							if(errors[0]) {
								
								for(error in errors) {
								
									if(typeof errors[error] == "string") {
									
										errorElement.append($("<div/>").append(errors[error]));
									}
								}	
							}
							errorElement.show();
						}
					}
					
					if(onErrorTopics) {			
						var topics = onErrorTopics.split(',');  
						for ( var i = 0; i < topics.length; i++) {
							action.publish(topics[i], action);
						}
					}
				}
				
			    //serialize forms
				var formIds = options.formids;
				var serializeData;
				if(formIds) {
											
					var forms = formIds.split(',');  
					for ( var i = 0; i < forms.length; i++) {
						serializeData = (serializeData ? "&" : "") + $("#" + forms[i]).serialize();
					}
				}    
					
				var elementIds = options.elementids;
				if(elementIds) {
							
					var elements = elementIds.split(',');
					for ( var i = 0; i < elements.length; i++) {
						var element = $('#' + elements[i])[0];
						if(element && element.name){
							serializeData = (serializeData ? (serializeData + "&") : "") + element.name + "=" + element.value;
							//serializeData[element.name] = element.value;
						}
					}
				}     	    
				if(serializeData && options.validate) {
					serializeData['struts.enableJSONValidation'] = true;
				}
				
				$.extend(options,{data: serializeData});	
	
				
				//execute request using ajax
				if(options.src) {
					
					options.type = "POST";
					options.url = options.src;
					if(!options.data) { options.data = {}; }	//fix 'issue' wherein IIS will reject post without data
				
					$.ajax(options);
				
				}
			}
		}
	});
			
	/** Datepicker logic*/
	//Register handler to open a datepicker
	$.subscribeHandler('_struts2_jquery_datepicker_show', function(event, data) {
		
		$(this).datepicker('show');
	});
	//Register handler to close a datepicker
	$.subscribeHandler('_struts2_jquery_datpicker_hide', function(event, data) {
		
		$(this).datepicker('hide');
	});
	//Register handler to remove/destroy a datepicker
	$.subscribeHandler('_struts2_jquery_datepicker_destroy', function(event, data) {
		
		$(this).datepicker('destroy');
	});
	//Register handler to enable a datepicker
	$.subscribeHandler('_struts2_jquery_datepicker_enable', function(event, data) {
		
		$(this).datepicker('enable');
	});
	//Register handler to disable a datepicker
	$.subscribeHandler('_struts2_jquery_datepicker_disable', function(event, data) {
		
		$(this).datepicker('disable');
	});
	
	
	/** Dialog logic*/
	//Register handler to open a dialog
	$.subscribeHandler('_struts2_jquery_dialog_open', function(event, data) {
		//TODO: handle disabled (don;t open dialod if disabled == true)s
		$(this).dialog('open');
	});
	
	//Register handler to close a dialog
	$.subscribeHandler('_struts2_jquery_dialog_close', function(event, data) {
		
		$(this).dialog('close');
	});
	//Register handler to remove/destroy a dialog
	$.subscribeHandler('_struts2_jquery_dialog_destroy', function(event, data) {
		
		$(this).dialog('destroy');
	});
	//Register handler to enable a dialog
	$.subscribeHandler('_struts2_jquery_dialog_enable', function(event, data) {
		
		$(this).dialog('enable');
	});
	//Register handler to disable a dialog
	$.subscribeHandler('_struts2_jquery_dialog_disable', function(event, data) {
		
		$(this).dialog('disable');
	});
		
	
	/** Tabbed Pane logic */
	//Register handler to reload a tab
	$.subscribeHandler('_struts2_jquery_reloadTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('load', event.data);
	});
	//Register handler to select a tab
	$.subscribeHandler('_struts2_jquery_selectTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('select', event.data);
	});
	//Register handler to disable a tab
	$.subscribeHandler('_struts2_jquery_disableTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('disable', event.data);
	});
	//Register handler to enable a tab
	$.subscribeHandler('_struts2_jquery_enableTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('enable', event.data);
	});
	//Register handler to remove a tab
	$.subscribeHandler('_struts2_jquery_removeTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('remove', event.data);
	});
	//Register handler to show a tab
	$.subscribeHandler('_struts2_jquery_showTab',  function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('show', event.data);
	});
	//Register handler to hide a tab
	$.subscribeHandler('_struts2_jquery_hideTab', function(event, data) {
		$(this).closest("._struts2_jquery_class_tabbedpane").tabs('remove', event.data);
	});
	
	
	/** Accordion logic */
	//Register handler to remove an accordion
	$.subscribeHandler('_struts2_jquery_accordion_remove', function(event, data) {		
		$(this).accordion( 'destroy' );
	});
	
	//Register handler to enable an accordion
	$.subscribeHandler('_struts2_jquery_accordion_enable', function(event, data) {		
		$(this).accordion( 'enable' );
	});
	
	//Register handler to disable an accordion
	$.subscribeHandler('_struts2_jquery_accordion_disable', function(event, data) {		
		$(this).accordion( 'disable' );
	});
	
	//Register handler to hide an accordion menu item
	$.subscribeHandler('_struts2_jquery_accordion_hideItem', function(event, data) {		
		
		var accordion = $(".accordion");
		var items = $.map($(this).parent().find("dt"), function(a) { return $(a).hasClass("ui-state-active"); });
		var activeIndex = $.inArray(true, items);

		var $this = $(this);
		
		if(activeIndex == $this.index) {
			$(this).prev().click();
		}
	});

	//Register handler to show an accordion menu item
	$.subscribeHandler('_struts2_jquery_accordion_showItem', function(event, data) {		

		var accordion = $(".accordion");
		var items = $.map($(this).parent().find("dt"), function(a) { return $(a).hasClass("ui-state-active"); });
		var activeIndex = $.inArray(true, items);

		var $this = $(this);

		var $this = $(this);
		
		if(activeIndex != $this.index) {
			$(this).prev().click();
		}
	});
		
	
	
	/** Form logic */	
	//Register handler to submit a form element
	$.subscribeHandler('_struts2_jquery_form_submit', function(event, data) {
		
		var form = $(event.target);
		form.submit();
	});
	
})(jQuery);