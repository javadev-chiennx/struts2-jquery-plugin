# Introduction #
Renders a jquery datepicker widget that can be paramterized with several options and participates in topic events/handlers.


# Sample Code #
The following is a simple example of loading a datepicker in a page and integrating other widget events and custom code to its event.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
         <script type='text/javascript'>
		$.subscribe('datepickerClosed',function(event,data) {
			//Custom code here...
		});
          </script> 
      </head>
      <body>
	Date: <sj:datepickerid="datepicker1" displayFormat="MM/dd/yyyy" 
                  imageTooltip="Select Your Birthdate" showButton="true" changeYear="tru" 
                  changeMonth="true" onChangeTopics="datepickerSelectedDate" 
                  onCompleteTopics="datepickerClosed" />
        <sj:div src="dateEvents.action" reloadTopics="datepickerSelectedDate"/>
      </body>
   </html>
```


# Significant Attributes #
  * **displayFormat** - The format for parsed and displayed dates (see http://docs.jquery.com/UI/Datepicker/formatDate).
  * **imageUrl** - The URL for the popup button image. If set, button text becomes the alt value and is not directly displayed.
  * **imageTooltip** - The text to display for the alt tip on the popup button image.
  * **options** - Additional widget options as provided by the jquery datepicker widget
  * **changeYear** - Allows changing the year by selecting from a drop-down list.
  * **changeMonth** - Allows changing the month by selecting from a drop-down list.
  * **showButton** - Set to 'true' in order to show a button next to the field to display the date picker (defaults to false).
  * **onChangeTopics** - A comma delimited list of topics to be published when a new dat eis selected
  * **onBeforeTopics** - A comma delimited list of topics to be published when the datepicker is loaded
  * **onCompleteTopics**  - A comma delimited list of topics to be published when the datepicker is closed
  * **onAlwaysTopics**  - A comma delimited list of topics to be published on all the datepicker events


# All Attributes #
|**Name**|**Required**|**Default**|**Evaluated**|**Type**|**Description**|
|:-------|:-----------|:----------|:------------|:-------|:--------------|
|accesskey|false       |           |false        |String  |Set the html accesskey attribute on rendered html element|
|blurTopics|false       |           |false        |String  |A comma delimited list of topics that will cause this element to blur|
|changeMonth|false       |true       |false        |Boolean |Allows you to change the month by selecting from a drop-down list|
|changeYear|false       |true       |false        |Boolean |Allows you to change the year by selecting from a drop-down list|
|cssClass|false       |           |false        |String  |The css class to use for element|
|cssErrorClass|false       |           |false        |String  |The css error class to use for element|
|cssErrorStyle|false       |           |false        |String  |The css error style definitions for element to use|
|cssStyle|false       |           |false        |String  |The css style definitions for element to use|
|disableTopics|            |false      |false        |String  |A comma delimited list of topics that will disable this element|
|disabled|false       |           |false        |String  |Set the html disabled attribute on rendered html element|
|displayFormat|false       |mm/dd/yy   |false        |String  |Format use to display the selected date (See java.text.SimpleDateFormat for patterns)|
|elementIds|false       |           |false        |String  |A comma delimited list of form elements that should be individually serialized and sent with the container's load request. Input element must have a 'name' attribute and will be serialized as =|
|enableTopics|false       |           |false        |String  |A comma delimited list of topics that will enable this element|
|errorText|false       |false      |false        |String  |The text to be displayed on load error. If 'errorElement' is provided, this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container|
|focusTopics|false       |           |false        |String  |A comma delimited list of topics that will cause this element to focus|
|formIds |false       |           |false        |String  |Comma delimited list of form ids for which to serialize all fields during contianer load (if multiple forms have overlapping element names, it is indeterminate which will be used)|
|hideTopics|false       |           |false        |String  |A comma delimited list of topics that will hide (display: none) this element|
|id      |false       |           |false        |String  |HTML id attribute|
|imageTooltip|false       |Pick a date|false        |String  |Tooltip for the calendar image|
|imageUrl|false       |           |false        |String  |Image used for the calendar button|
|indicatorId|false       |           |false        |String  |Id of element that will be displayed during execution of this element's action and hidden afterwards|
|javascriptTooltip|false       |false      |false        |Boolean |Use JavaScript to generate tooltips|
|key     |false       |           |false        |String  |Set the key (name, value, label) for this particular component|
|label   |false       |           |false        |String  |Label expression used for rendering an element specific label|
|labelSeparator|false       |:          |false        |String  |String that will be appended to the label|
|labelposition|false       |           |false        |String  |Define label position of form element (top/left)|
|loadingText|false       |           |false        |String  |The text to be displayed during load (will be shown if any provided)|
|name    |false       |           |false        |String  |The name to set for element|
|onAlwaysTopics|false       |           |false        |String  |A comma delimited list of topics that are always published (before load, after load, on error and on success)|
|onBeforeTopics|false       |           |false        |String  |Topics that are published before a load|
|onBlurTopics|false       |           |false        |String  |A comma delimited list of topics that published when the element value is changed|
|onChangeTopics|false       |           |false        |String  |A comma delimited list of topics that published when the element value is changed|
|onCompleteTopics|false       |           |false        |String  |Topics that are published before after load is completed|
|onErrorTopics|false       |           |false        |String  |Topics that are published on a load error|
|onFocusTopics|false       |           |false        |String  |A comma delimited list of topics that published when the element value is changed|
|onSuccessTopics|false       |           |false        |String  |Topics that are published after a succesful load|
|onblur  |false       |           |false        |String  | Set the html onblur attribute on rendered html element|
|onchange|false       |           |false        |String  |Set the html onchange attribute on rendered html element|
|onclick |false       |           |false        |String  |Set the html onclick attribute on rendered html element|
|ondblclick|false       |           |false        |String  |Set the html ondblclick attribute on rendered html element|
|onfocus |false       |           |false        |String  |Set the html onfocus attribute on rendered html element|
|onkeydown|false       |           |false        |String  |Set the html onkeydown attribute on rendered html element|
|onkeypress|false       |           |false        |String  |Set the html onkeypress attribute on rendered html element|
|onkeyup |false       |           |false        |String  |Set the html onkeyup attribute on rendered html element|
|onmousedown|false       |           |false        |String  |Set the html onmousedown attribute on rendered html element|
|onmousemove|false       |           |false        |String  |Set the html onmousemove attribute on rendered html element|
|onmouseout|false       |           |false        |String  |Set the html onmouseout attribute on rendered html element|
|onmouseover|false       |           |false        |String  |Set the html onmouseover attribute on rendered html element|
|onmouseup|false       |           |false        |String  |Set the html onmouseup attribute on rendered html element|
|onselect|false       |           |false        |String  |Set the html onselect attribute on rendered html element|
|openTemplate|false       |           |false        |String  |Set template to use for opening the rendered html.|
|options |false       |           |false        |String  |The name of a variable(or a javascript map) that contains additional widget options to be passed to the Datepicker|
|reloadTopics|false       |           |false        |String  |A comma delimited list of topics that will cause this element to reload|
|removeTopics|false       |           |false        |String  |A comma delimited list of topics that will remove this element from the dom|
|required|false       |false      |false        |Boolean |If set to true, the rendered element will indicate that input is required|
|requiredposition|false       |           |false        |String  |Define required position of required form element (left|right)|
|showButton|false       |false      |false        |Boolean |Set to 'true' in order to show a button next to the field to display the date picker.|
|showTopics|false       |           |false        |String  |A comma delimited list of topics that will show (display: block) this element|
|src     |false       |           |false        |String  |The url from which to load the container contents|
|tabindex|false       |           |false        |String  |Set the html tabindex attribute on rendered html element|
|template|false       |           |false        |String  |The template (other than default) to use for rendering the element|
|templateDir|false       |           |false        |String  |The template directory.|
|theme   |false       |           |false        |String  |The theme (other than default) to use for rendering the element|
|title   |false       |           |false        |String  |Set the html title attribute on rendered html element|
|tooltip |false       |           |false        |String  |Set the tooltip of this particular component|
|tooltipConfig|false       |           |false        |String  |Deprecated. Use individual tooltip configuration attributes instead.|
|tooltipCssClass|false       |StrutsTTClassic|false        |String  |CSS class applied to JavaScrip tooltips|
|tooltipDelay|false       |Classic    |false        |String  |Delay in milliseconds, before showing JavaScript tooltips |
|tooltipIconPath|false       |           |false        |String  |Icon path used for image that will have the tooltip|
|value   |false       |false      |String       |Preset the value of input element.|