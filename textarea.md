# Introduction #
This renders an `<textarea/>` element which can load its text remotely by ajax. The request used to load the text is highly configurable and can even submit form(s) and element(s) values without requiring additional user interaction.

The textarea has a _src_ attribute which specifies a url which will return a plain or json string when a requested is submitted to it. The request submit form and individual element's data with the request using the _elementIds_ and _formIds_ parameters.

# Sample Code #
This sample illustrates a textarea that loads and reloads its contents via ajax based on the changing value of a select input.

Note: For this example to work, you would need an action mapped to the textareaSubjectDetails.action which would return a plaintext string or a json string result. The request will also contain the _subject_ request parameter with the value selected from the select box.
```
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
<html>
   <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
   </head>
   <body>
      <div>
          <label>Select Subject:</label>
          <sj:select id="subjectSelect" emptyOption="true" name="subject" onChangeTopics="subjectChanged" src="textareaSubjectSelect.action"/>
      </div>
      <div>
         <label>Details:</label>
         <sj:textarea src="textareaSubjectDetails.action" reloadTopics="subjectChanged" elementIds="subjectSelect"></sj:textarea>
      </div>
   </body>
</html> 
```

# Significant Attributes #
  * **src** (_String_) - The src url from which to load the contents of the div
  * **name** (_String_) - The name of the element. This will be the name in the name/value request parameter if this input is submitted in a request
  * **onChangeTopics** - A comma delimited list of topics to be published when the value of the textarea changes
  * **formIds** (_String_) - A comma-delimited list of ids of forms for which the input elements will be submitted along with the load request
  * **elementIds** (_String_) - A comma-delimited list of ids of input elements which will be submitted (name/value) along with the load request
  * **indicatorId** (_String_) - The id of an element to display while the request is being processed
  * **loadingText** (_String_) - A text string to display in the target (if a target is provided) while the request is being processed
  * **errorElementId** (_String_) - The id of an element to display if the request returns an error code
  * **errorText** (_String_) - A text string to be displayed in the target (if a target is provided) if the request returns an error code
  * **onFocusTopics**  - A comma delimited list of topics to be published when the textarea gets the focus
  * **onBlurTopics**  - A comma delimited list of topics to be published when the textarea loses the focus
  * **onCompleteTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request completes (on success or error)
  * **onErrorTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request returns an error code
  * **onSuccessTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request copletes successfully
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the element to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the element to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the element to be removed from the DOM
  * **onBeforeTopics** - A comma delimited list of topics to be published when the textarea is loaded
  * **onCompleteTopics**  - A comma delimited list of topics to be published when the textarea is closed
  * **onAlwaysTopics**  - A comma delimited list of topics to be published on all the textarea events

# All Attributes #
| **Name** | **Required** | **Default** | **Evaluated** | **Type** | **Description** |
|:---------|:-------------|:------------|:--------------|:---------|:----------------|
|accesskey |false         |             |false          |String    |Set the html accesskey attribute on rendered html element|
|blurTopics|false         |             |false          |String    |A comma delimited list of topics that will cause this element to blur|
|cssClass  |false         |             |false          |String    |The css class to use for element|
|cssErrorClass|false         |             |false          |String    |The css error class to use for element|
|cssErrorStyle|false         |             |false          |String    |The css error style definitions for element to use|
|cssStyle  |false         |             |false          |String    |The css style definitions for element to use|
|disableTopics|false         |             |false          |String    |A comma delimited list of topics that will disable this element|
|disabled  |false         |             |false          |String    |Set the html disabled attribute on rendered html element|
|elementIds|false         |             |false          |String    |A comma delimited list of form elements that should be individually serialized and sent with the container's load request. Input element must have a 'name' attribute and will be serialized as =|
|enableTopics|false         |             |false          |String    |A comma delimited list of topics that will enable this element|
|errorText |false         |false        |false          |String    |The text to be displayed on load error. If 'errorElement' is provided, this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container|
|focusTopics|false         |             |false          |String    |A comma delimited list of topics that will cause this element to focus|
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
|onBlurTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
|onChangeTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
|onCompleteTopics|false         |             |false          |String    |Topics that are published before after load is completed|
|onErrorTopics|false         |             |false          |String    |Topics that are published on a load error|
|onFocusTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
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