# Introduction #
This renders a `<div></div>` element which can can be filled with contents loaded remotely by ajax. The request used to populate the `<div/>` is highly configurable and can even submit form(s) and element(s) values without requiring additional user interaction.

This is one of the most commonly used ajax components as it allows the developer to load/reload/control discreet portions of the interface without using frames.

# Sample Code #
The following is a simple example of loading a page into a div.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:div id="remoteDiv" src="loadDiv.action"/>
      </body>
   </html>
```

The following is a an example loading a remote page into a div and reloading it whenever a select box value changes and executing some custom script when the page loading finishes successfully. The example also automatically displays a 'loading' indicator whenver the page is loading.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
         <script type="text/javascript" >

            $.subscribe('remoteDivLoaded', function(event,element) {
               alert('Successfully loaded div');
            });

         </script>
      </head>
      <body>  
         <div id="loadingIndicator" class="indicator" style="display:none"/>
         <sj:select id="divSelect" list="divOptions" onChangeTopics="divOptionChanged"/>
         <sj:div id="remoteDiv" src="loadDiv.action" reloadTopics="divOptionChanged" indicatorId="loadingIndicator" onSuccessTopics="remoteDivLoaded"/>
      </body>
   </html>
```

# Significant Attributes #
  * **src** (_String_) - The src url from which to load the contents of the div
  * **formIds** (_String_) - A comma-delimited list of ids of forms for which the input elements will be submitted along with the load request
  * **elementIds** (_String_) - A comma-delimited list of ids of input elements which will be submitted (name/value) along with the load request
  * **indicatorId** (_String_) - The id of an element to display while the request is being processed
  * **loadingText** (_String_) - A text string to display in the target (if a target is provided) while the request is being processed
  * **errorElementId** (_String_) - The id of an element to display if the request returns an error code
  * **errorText** (_String_) - A text string to be displayed in the target (if a target is provided) if the request returns an error code
  * **draggable** (_Boolean_) - If the div should be draggable or not (true/false)
  * **draggableOptions** (_String_) - Additional jQuery draggable options (javascript object string) to pass to the draggable() function. Only used with draggable=true
  * **droppable** (_Boolean_) - If the div should be a valid droppable container or not (true/false)
  * **droppableOptions** (_String_) - Additional jQuery droppableoptions (javascript object string) to pass to the droppable() function. Only used with droppable=true
  * **resizable** (_Boolean_) - If the div should be resizable or not (true/false)
  * **resizableOptions** (_String_) - Additional jQuery resizable options (javascript object string) to pass to the resizable container. Only used with resizable=true
  * **sortable** (_Boolean_) - If the div should be a valid sortable container or not (true/false). If so, child elements of the div can be drag/drop sorted within it.
  * **sortableOptions** (_String_) - Additional jQuery sortableoptions (javascript object string) to pass to the sortablecontainer. Only used with sortable=true
  * **onSortableUpdateTopics** (_String_) -  A comma delimited list of topics to be published when a user stops sorting and a contained item in a sortable div has changed position
  * **onSortableStartTopics** (_String_) -  A comma delimited list of topics to be published when a user starts sorting in a sortable div
  * **onSortableSortTopics** (_String_) -  A comma delimited list of topics to be published during sorting in a sortable div
  * **onSortableStopTopics** (_String_) -  A comma delimited list of topics to be published when a user stops sorting in a sortable div
  * **onSortableReceiveTopics** (_String_) -  A comma delimited list of topics to be published when a connected sortable list has received an item from another list
  * **onSortableRemoveTopics** (_String_) -  A comma delimited list of topics to be published when a sortable item has been dragged out from the list and into another
  * **onCompleteTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request completes (on success or error)
  * **onErrorTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request returns an error code
  * **onSuccessTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request copletes successfully
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the element to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the element to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the element to be removed from the DOM

# All Attributes #
| **Name** | **Required** | **Default** | **Evaluated** | **Type** | **Description** |
|:---------|:-------------|:------------|:--------------|:---------|:----------------|
|accesskey |false         |             |false          |String    |Set the html accesskey attribute on rendered html element|
|cssClass  |false         |             |false          |String    |The css class to use for element|
|cssErrorClass|false         |             |false          |String    |The css error class to use for element|
|cssErrorStyle|false|        |false        |String         |The css error style definitions for element to use|
|cssStyle  |false         |             |false          |String    |The css style definitions for element to use|
|disabled  |false         |             |false          |String    |Set the html disabled attribute on rendered html element|
|elementIds|false         |             |false          |String    |A comma delimited list of form elements that should be individually serialized and sent with the container's load request. Input element must have a 'name' attribute and will be serialized as =|
|errorText |false         |false        |false          |String    |The text to be displayed on load error. If 'errorElement' is provided, this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container|
|formIds   |false         |             |false          |String    |Comma delimited list of form ids for which to serialize all fields during contianer load (if multiple forms have overlapping element names, it is indeterminate which will be used)|
|hideTopics|false         |             |false          |String    |A comma delimited list of topics that will hide (display: none) this element|
|id        |false         |             |false          |String    |HTML id attribute|
|indicatorId|false         |             |false          |String    |Id of element that will be displayed during execution of this element's action and hidden afterwards|
|javascriptTooltip|false         |false        |false          |Boolean   |Use JavaScript to generate tooltips|
|key       |false         |             |false          |String    |Set the key (name, value, label) for this particular component|
|label     |false         |             |false          |String    |Label expression used for rendering an element specific label|
|labelSeparator|false         |:            |false          |String    |String that will be appended to the label|
|labelposition|false         |             |false          |String    |Define label position of form element (top/left)|
|loadingText|false         |             |false          |String    |The text to be displayed during load (will be shown if any provided)|
|name      |false         |             |false          |String    |The name to set for element|
|onAlwaysTopics|false         |             |false          |String    |A comma delimited list of topics that are always published (before load, after load, on error and on success)|
|onBeforeTopics|false         |             |false          |String    |Topics that are published before a load|
|onCompleteTopics|false         |             |false          |String    |Topics that are published before after load is completed|
|onErrorTopics|false         |             |false          |String    |Topics that are published on a load error|
|onSuccessTopics|false         |             |false          |String    |Topics that are published after a succesful load|
|onblur    |false         |             |false          |String    | Set the html onblur attribute on rendered html element|
|onchange  |false         |             |false          |String    |Set the html onchange attribute on rendered html element|
|onclick   |false         |             |false          |String    |Set the html onclick attribute on rendered html element|
|ondblclick|false         |             |false          |String    |Set the html ondblclick attribute on rendered html element|
|onfocus   |false         |             |false          |String    |Set the html onfocus attribute on rendered html element|
|onkeydown |false         |             |false          |String    |Set the html onkeydown attribute on rendered html element|
|onkeypress|false         |             |false          |String    |Set the html onkeypress attribute on rendered html element|
|onkeyup   |false         |             |false          |String    |Set the html onkeyup attribute on rendered html element|
|onmousedown|false         |             |false          |String    |Set the html onmousedown attribute on rendered html element|
|onmousemove|false         |             |false          |String    |Set the html onmousemove attribute on rendered html element|
|onmouseout|false         |             |false          |String    |Set the html onmouseout attribute on rendered html element|
|onmouseover|false         |             |false          |String    |Set the html onmouseover attribute on rendered html element|
|onmouseup |false         |             |false          |String    |Set the html onmouseup attribute on rendered html element|
|onselect  |false         |             |false          |String    |Set the html onselect attribute on rendered html element|
|openTemplate|false         |             |false          |String    |Set template to use for opening the rendered html.|
|reloadTopics|false         |             |false          |String    |A comma delimited list of topics that will cause this element to reload|
|removeTopics|false         |             |false          |String    |A comma delimited list of topics that will remove this element from the dom|
|required  |false         |false        |false          |Boolean   |If set to true, the rendered element will indicate that input is required|
|requiredposition|false         |             |false          |String    |Define required position of required form element (left|right)|
|showTopics|false         |             |false          |String    |A comma delimited list of topics that will show (display: block) this element|
|src       |false         |             |false          |String    |The url from which to load the container contents|
|sortable  |false         |             |false          |String    |If the div represents a container of sortable items|
|tabindex  |false         |             |false          |String    |Set the html tabindex attribute on rendered html element|
|template  |false         |             |false          |String    |The template (other than default) to use for rendering the element|
|templateDir|false         |             |false          |String    |The template directory.|
|theme     |false         |             |false          |String    |The theme (other than default) to use for rendering the element|
|title     |false         |             |false          |String    |Set the html title attribute on rendered html element|
|tooltip   |false         |             |false          |String    |Set the tooltip of this particular component|
|tooltipConfig|false         |             |false          |String    |Deprecated. Use individual tooltip configuration attributes instead.|
|tooltipCssClass|false         |StrutsTTClassic|false          |String    |CSS class applied to JavaScrip tooltips|
|tooltipDelay|false         |Classic      |false          |String    |Delay in milliseconds, before showing JavaScript tooltips |
|tooltipIconPath|false         |             |false          |String    |Icon path used for image that will have the tooltip|
|value     |false         |             |false          |String    |Preset the value of input element.|