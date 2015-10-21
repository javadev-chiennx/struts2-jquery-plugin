# Struts2 jQuery Plugin #

<h4>The struts2-jquery-plugin is a plugin providing first-class support for AJAX to <a href='http://struts.apache.org/2.x/'>struts2</a>.</h4>
The plugin uses the [jQuery](http://www.jquery.com) javascript library and a very lightweight [publish/subscribe framework](http://plugins.jquery.com/project/jQuerySubscribe) built on jQuery to implement a set of tags and tag widgets that enable asynchronous loading of UI components and de-coupled interaction between UI components in a simple, standard way.

- Check out the project <font color='69ab2c'><b><a href='http://struts2-jquery.appspot.com/'>Showcase</a></b></font>

- <font color='orange'><b>Check out the new <a href='chart.md'>Chart</a> component</b></font>

- Latest version uses (jquery 1.4.2 and final jQuery-ui.1.8.1)

### <u>Contents</u> ###
  * [Basic Usage](#Basic_Usage.md)
  * [Tags](#Tags.md)
  * [Publish/Subscribe Framework](#Publish/Subscribe_Framework.md)
  * [Extending the Framework](#Extendingthe_Framework.md)
<br />

## Basic Usage ##

To use the struts2-jquery tags

  1. Include the http://code.google.com/p/struts2-jquery-plugin/downloads/list in your application classpath
  1. Include the struts jquery tag library on your jsp page (<font color='#6c6c6c'><%@ taglib prefix="sj" uri="/struts2-jquery-tags" %></font>)
  1. Include the 

&lt;sj:head&gt;

 tag in the head of your jsp page
  1. Use the ajax enabled struts2 tags 

&lt;sj:xxxx&gt;

 tags.

```
   <%@ taglib prefix="s" uri="/struts-tags" %>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:div id="header" src="header.action"/>
         <sj:div id="content" src="content.action"/>
         <sj:div id="footer" src="footer.action"/>
      </body>
   </html>
```
<br />


## Tags ##
The following tags/widgets are implemented (click on each for more details and usage):
#### Basic Usage ####
  * **[Head](head.md)** - The base tag required to include this plugin's functionality in a page
#### Components ####
  * **[Anchor](anchor.md)** - Renders an anchor that can:
    * Execute an ajax request
    * Load remote content via ajax into any container (typically a div)
    * Submit &  validate a form or individual input elements
  * **[Div](div.md)** - Renders a `<div/>` that loads its content remotely via ajax and provides numerous ui-effects and interactions including:
    * Resizable
    * Draggable/Droppable
    * Sortable
    * Topic triggers & handlers for all kinds of states and loading events
  * **[Form](form.md)** - Renders a `<form/>` that can:
    * Submit contents via an ajax post
    * Perform input validation (using json-validation interceptor)
    * Load the result of post into any container (typically a div)
  * **[Select](select.md)** - Renders a `<select/>` box that can load its content remotely via ajax
  * **[Submit](submit.md)** - Renders an submit `<button/>` that can:
    * Execute an ajax request
    * Load remote content via ajax into any container (typically a div)
    * Submit &  validate a form or individual input elements
  * **[Text](text.md)** - <font color='orange'><b>NEW</b></font> Renders a plain text string that loads its value remotely via ajax and can be dynamically updated
  * **[TextField](textfield.md)** - Renders a text `<input/>` box that can load its value remotely via ajax
  * **[TextArea](textarea.md)** - Renders a `<textarea/>` input that can load its contents remotely via ajax
#### Widgets ####
  * **[Accordion](accordion.md)** - Uses the jQuery-UI accordion widget to render an accordion menu component that can:
    * Load menu item contents remotely via ajax or directly via static html
    * Provide all the jquery accordion features (http://docs.jquery.com/UI/Accordion#options)
  * **[Date Picker](datepicker.md)** - Uses the jQuery-UI datepicker widget to render a datepicker component with a date entry text field that can:
    * Load its value remotely via ajax
    * Allow standard java-format style formatting
    * Provide all the jquery datepicker features (http://docs.jquery.com/UI/Datepicker#options)
  * **[Button](button.md)**  - <font color='orange'><b>NEW</b></font> Uses the new jQuery-UI button widget to render a very attractive button component:
    * Themed using jQuery theme
    * Multiple display options including button icons
    * Provide all the jquery button features (http://jqueryui.com/demos/button/#options)
  * **[Dialog](dialog.md)** - Uses the jQuery-UI dialog widget to render a modal/modeless dialog that can:
    * Load it's content remotely via ajax or simple from a provided string/key
    * Provide all the jquery dialog features (http://docs.jquery.com/UI/Dialog/dialog#options)
  * **[Tabbed Pane](tabbedPane.md)** - Uses jQuery-UI tabbed pane widget to render a tabbed pane that can:
    * Load it's tab contents remotely via ajax
    * Select/Focus/Blur/Disable/Enable/Remove tabs dynamically (using topics or javascript)
    * Provide all the jquery tab features (http://docs.jquery.com/UI/Tabs#options)
  * **[Chart](chart.md)** - <font color='orange'><b>NEW</b></font> Uses the [flot](http://code.google.com/p/flot/) jquery charting component to provide beautiful, highly dynamic charting capability as a very simple-to-use struts tag:
    * Very attractive charts
    * Chart data can be provided as an attribute from a model or remotely via ajax
    * Charts can be dynamically updated using the built in polling attribute (available for all struts2-jquery containers)
    * The flot framework currently supports line-charts, points, bar-charts, and pie charts (via a flot plug-in which is embedded), it also supports multiple series, multiple axes, stacking and many other  essential charting features.
    * Fully configurable charting properties including colors, legends, axes, labels, etc. provided via  direct tag attributes
    * Integrated with framework's publish/subscribe framework for dynamic usage
    * Access to underlying flot plot options for 'deeper' usage
  * **[Grid](grid.md)**  - <font color='orange'><b>NEW</b></font> Uses the [jQGrid](http://www.trirand.com/blog/) jquery gridcomponent to provide highly customizable grid component in a simple-to-use struts tag:


## Features ##
The tags have a lot of attributes which provide dynamic functionality and provide relevant event/event-handling hooks using the publish/subscribe framework to interact with each other or with custom client code. The easiest way to summarize the functionality
provided by the tags is to list the features that the various 'types' of tags provide:

#### Loading Remote Content (anchor, dialog, div, submit) ####
  * Load remote content via ajax into one or multiple targets
  * Submit form(s) with request
  * Submit input element(s) (even independent of form) with request
  * Show loading element during load
  * Show loading text during load
  * Show error element on load error
  * Publish topic(s) (execute topic handlers) on loading complete
  * Publish topic(s) (execute topic handlers) on loading success
  * Publish topic(s) (execute topic handlers) on loading error
  * Expose reload topics (topics that will cause container to automatically reload content to via ajax)
  * Expose enable/disable topics (topics which will allow/prevent remote content loading)

#### 'Input' Components (select,textfield,textarea,datepicker) ####
  * Load contents remotely using ajax (json string)
  * Expose reload topics (topics that will cause input to automatically reload content to via ajax)
  * Publish topic(s) (execute topic handlers) on input value change
  * Publish topic(s) (execute topic handlers) on input focus
  * Publish topic(s) (execute topic handlers) on input blur
  * Expose focus topic(s) (topics that will cause component to focus)
  * Expose blur topic(s) (topics that will cause input to lose focus)

#### 'Interactive' Components (div,select,submit,textfield,tab,dialog,datepicker) ####
  * Expose enable topics (topics that will cause component to be enabled)
  * Expose disable topics (topics that will cause component to be disabled - this will also prevent ajax requests while disabled)

#### General Features (all components) ####
  * Expose hide topics (topics that will cause component to be hidden)
  * Expose show topics (topics that will cause component to be displayed)
  * Expose removed topics (topics that will cause component to be removed from DOM)
<br />


## Publish/Subscribe Framework ##

The plugin uses a very lightweight but powerful [publish/subscribe framework](http://plugins.jquery.com/project/jQuerySubscribe) which allows for fully decoupled interaction between component events.

The framework comes with out-of-the box hooks for common component events (clickTopics) and event handlers (such as onClickTopics) which allow the components on the page to interact very flexibly yet simply with each other. For example, to make one div load when another is finished loading or show a dialog if there's a loading error is as easy as follows:
```
   <%@ taglib prefix="s" uri="/struts-tags" %>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:div id="firstDiv" onSuccessTopics="loadSuccess" onErrorTopics="loadError" src="first.action"/>
         <sj:div id="dependentDiv" showTopics="loadSuccess" src="second.action" cssStyle="display:none"/>
         <sj:dialog id="errorDialog" showTopics="loadError" src="error.action"/>
      </body>
   </html>
```

Another example, to update the contents of a second select box when the value in a first one changes is as easy as follows:
```
   <%@ taglib prefix="s" uri="/struts-tags" %>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         First Select: <sj:select id="firstSelect" name="firstSelect" onChangeTopics="firstSelectChanged" src="firstSelect.action"/>
         Second Select: <sj:select id="secondSelect" reloadTopics="firstSelectChanged" src="secondSelect.action" elementIds="firstSelect"/>
      </body>
   </html>
```

The publish/subscribe framework is fully exposed, so users can also implement custom handlers for any topics and can publish and subscribe to any topics using custom code as follows:

```
   <%@ taglib prefix="s" uri="/struts-tags" %>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
         <script type="text/javascript" >

            $.subscribe('loadSuccess', function(event,element) {
               alert('Successfully loaded first div');
               
               $.publish('loadSuccessConfirm');
            });

         </script>
      </head>
      <body>  
         <sj:div id="firstDiv" onSuccessTopics="loadSuccess" src="first.action"/>
         <sj:dialog id="successDialog" showTopics="loadSuccessConfirm" src="error.action"/>
      </body>
   </html>
```

The above example will:
  1. Display an alert when the div successfully completes loading by subscribing to the 'loadSuccess' topic which the div publishes (set to the div's _onSuccessTopics_ event publisher)
  1. Display the dialog by publishing the 'loadSuccessConfirm' topic (which the dialog's _showTopics_ event listener is subscribed to)

For additional information on using the integrates publish/subscribe framework, see the jquery.subscribe.js source document included with the plugin or visit the jquery subscribe/publish plugin site at http://plugins.jquery.com/project/jQuerySubscribe.
<br />


## Extending the Framework ##

The framework provides four explicit extension points:
  1. Implementing custom subscribe/publish topics and handlers
  1. Implementing and binding custom widgets
  1. Implementing custom pre-binding function for existing components
  1. Implementing custom post-binding function for existing components

See [Customizations / Extensions](extensions.md) for more...

