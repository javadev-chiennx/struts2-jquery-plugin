# Introduction #

The Struts2 jQuery Plugin has several extension points designed to allow users to extend the built-in logic with custom widgets, custom publish/subscribe topics & handlers, and customizations to existing widget/component behaviour.

The framework provides four explicit extension points:

  1. Implementing custom subscribe/publish topics and handlers - Using the publish/subscribe framework users can create new topics, subscribe custom topic handlers to topics,and publish topics arbitrarily in custom javascript code
  1. Implementing and binding custom widgets - Using the provided binding functions, users can register custom widgets and bind instances of them with the framework
  1. Implementing custom pre-binding function for existing components - A simple hook into the binding process to allow users to customize the binding functionality
  1. Implementing custom post-binding function for existing components -  A simple hook into the binding process to allow users to customize the binding functionality

# Details #

## Custom Subscribe/Publish Logic ##
Using the publish/subscribe framework users can create new topics, subscribe custom topic handlers to topics,and publish topics arbitrarily in custom javascript code. This allows users to provide custom logic using topics which will interact with the components event handlers or triggers (ex. onClickTopics _handler_, or enableTopics _trigger_). The subscribe/publish framework can also be used independently as a powerful de-coupled event framework.

The following example illustrates providing a custom topic handler for a component topic. This handler will exectue some custom business logic when the link is clicked.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
         <script type="text/javascript" >

            $.subscribe('linkClicked', function(event,element) {
               
                //insert custom logic here...
            });

         </script>
      </head>
      <body>  
         <sj:a id="logicLink" onClickTopics="linkClicked"/>
      </body>
   </html>
```

The following example illustrates using custom code to publish a topic that is bound to an component's event trigger once the page is loaded. In this case we will display a dialog when the page is loaded with a couple topic handlers to handle the button clicks on the dialog.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
         <script type="text/javascript" >
 
            $(document).ready(function () {

               $.publish('showDialog');
            };

            $.subscribe('yesClicked', function(event,element) {
               
                //insert custom logic here...
            });

            $.subscribe('noClicked', function(event,element) {
               
                //insert custom logic here...
            });

         </script>
      </head>
      <body>  
         <sj:dialog src="dialog.action" buttons="'Yes','No'" buttonTopics="yesClicked,noClicked" showTopics="showDialog" draggable="true" modal="true" resizable="true" title="'JQuery Dialog'"/>
      </body>
   </html>
```

For additional information on using the integrates publish/subscribe framework, see the jquery.subscribe.js source document included with the plugin or visit the jquery subscribe/publish plugin site at http://plugins.jquery.com/project/jQuerySubscribe.


## Implementing and Binding Custom Widgets ##
The framework provides an extension point to integrate custom widgets.
To use a custom widget with the framework, the following must be done:
  1. The element must have an **_widget_** attribute whose value is the widget name (ex: widget="dialog")
  1. The widget binding javascript  function must be registered with the struts jquery framework by calling Struts2jQuery.widget(_name_, _binder_) where **_name_** is the unique widget name and **_binder_** is a widget binding function (containing the implementation code for the custom widget) of the form: ` function($elem, options){} ` where **_$elem_** is the jquery object containing the widget element ($elem`[0]` is the DOM element) and **_options_** is a name/value hash of the element attributes. Typically, this would be done by including a javascript file with this code (or `<script></script>` fragment _after_ the 

&lt;sj:head/&gt;

 tag).
  1. For each instance of the widget (rendered in html) you must call Struts2jQuery.bind(_id_) _after_ the element in the page. _id_ is the unique id of the element (which must be provided). Note: If the element is rendered using freemarker templates (a common scenario), then this can be accomplished simply by adding the line
```
<#include "/${parameters.templateDir}/jquery/jquery-bind.ftl" />
```
> to the end of the freemarker .ftl template.


## Pre and Post binding Hooks ##
As noted above, to render components, a component binding function of the form `function($elem, options)` is called for each element. Prior to each binding call, the framework calls a preBind(_$elem_) function (if provided) and after each binding call the framework calls a postBind(_$elem_) function (if provided). In order to customize the binding process, the user can provide implementations of these methods as:
```
Struts2jQuery.preBind = function($elem){
//...
};

Struts2jQuery.postBind = function($elem){
//...
};
```