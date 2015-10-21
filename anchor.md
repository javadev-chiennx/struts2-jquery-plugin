# Introduction #
This renders an `<a/>` element which can execute and ajax request. It can submit form(s) or individual input element(s) as part of the request and can specify container(s) into which to load the result.

# Sample Code #
The following is an example of using the anchor tag to submit a form and a loose element and load results into a div.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:div id="resultDiv"/>
         <sj:form id="inputForm">
            <s:textfield name="formfield1"/>
            <s:select name="formField2" list="list"/>
         </sj:form>
         <s:text name="loneField1" id="loneField1"/>
         <sj:a href="load.action" formIds="inputForm" elementIds="loneField1" targets="resultDiv"/>
      </body>
   </html>
```


# Significant Attributes #
  * **href** (_String_) - The url to execute using ajax when the link  is clicked
  * **targets** (_String_) - A comma-delimited list of ids of containers (usually divs) into which to load the results of the request
  * **formIds** (_String_) - A comma-delimited list of ids of forms for which the input elements will be submitted along with the request
  * **elementIds** (_String_) - A comma-delimited list of ids of input elements which will be submitted (name/value) along with the request
  * **validate** (_boolean_) - Whether or not to validate the submitted request. If true, it enables the json-validator interceptor by setting the **_struts.enableJSONValidation = true_** request parameter (the JSONValidationInterceptor still needs to be configured)
  * **indicatorId** (_String_) - The id of an element to display while the request is being processed
  * **loadingText** (_String_) - A text string to display in the target (if a target is provided) while the request is being processed
  * **errorElementId** (_String_) - The id of an element to display if the request returns an error code
  * **errorText** (_String_) - A text string to be displayed in the target (if a target is provided) if the request returns an error code

  * **onClickTopics** (_String_) - A comma delimited list of topics to be published when the lik is clicked.
  * **onCompleteTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request completes (on success or error)
  * **onErrorTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request returns an error code
  * **onSuccessTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request copletes successfully

  * **disableTopics** (_String_) -  A comma delimited list of topics which will cause the element to become disabled when published
  * **enableTopics** (_String_) -  A comma delimited list of topics which will cause the element to become enabled when published
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the element to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the element to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the element to be removed from the DOM

# All Attributes #
| **Name** | **Required** | **Default** | **Evaluated** | **Type** | **Description** |
|:---------|:-------------|:------------|:--------------|:---------|:----------------|
|accesskey |false         |             |false          |String    |Set the html accesskey attribute on rendered html element|
|cssClass  |false         |             |false          |String    |The css class to use for element|
|cssErrorClass|false         |             |false          |String    |The css error class to use for element|
|cssErrorStyle|false         |             |false          |String    |The css error style definitions for element to use|
|cssStyle  |false         |             |false          |String    |The css style definitions for element to use|
|disableTopics|false         |             |false          |String    |A comma delimited list of topics that will disable this element|
|disabled  |false         |             |false          |String    |Set the html disabled attribute on rendered html element|
|elementIds|false         |             |false          |String    |A comma delimited list of form elements that should be individually serialized and sent with the input load request. Input element must have a 'name' attribute and will be serialized as =|
|enableTopics|false         |             |false          |String    |A comma delimited list of topics that will enable this element|
|errorElementId|false         |             |false          |String    |This should provide the id of the element into which the error text will be placed when an error ocurrs loading the container. If 'errorTest' is provided, that  wil be used, otherwise the ajax error message text wil be used.|
|errorText |false         |             |false          |String    |The text to be displayed on load error. If 'errorElement' is provided, this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container|
|formIds   |false         |             |false          |String    |Comma delimited list of form ids for which to serialize all fields during submission when this element is clicked (if multiple forms have overlapping element names, it is indeterminate which will be used)|
|hideTopics|false         |             |false          |String    |A comma delimited list of topics that will hide (display: none) this element|
|href      |false         |             |false          |String    |The url to be use when this element is clicked|
|id        |false         |false        |String         |HTML id attribute|
|indicatorId|false         |             |false          |String    |If loading content into a target, Id of element that will be displayed during loading and hidden afterwards (will override settings for the target container)|
|javascriptTooltip|false         |false        |false          |Boolean   |Use JavaScript to generate tooltips|
|key       |false         |             |false          |String    |Set the key (name, value, label) for this particular component|
|label     |false         |             |false          |String    |Label expression used for rendering an element specific label|
|labelSeparator|false         |:            |false          |String    |String that will be appended to the label|
|labelposition|false         |             |false          |String    |Define label position of form element (top/left)|
|loadingText|false         |             |false          |String    |If loading content into a target, The text to be displayed during load (will be shown if any provided, will override settings for the target container)|
|name      |false         |             |false          |String    |The name to set for element|
|onClickTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element is clicked|
|onCompleteTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element ajax request is completed (will override settings for a target container if provided)|
|onErrorTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element ajax request returns an error (will override settings for a target container if provided)|
|onSuccessTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element ajax request is completed successfully  (will override settings for a target container if provided)|
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
|removeTopics|false         |             |false          |String    |A comma delimited list of topics that will remove this element from the dom|
|required  |false         |false        |false          |Boolean   |If set to true, the rendered element will indicate that input is required|
|requiredposition|false         |             |false          |String    |Define required position of required form element (left|right)|
|showTopics|false         |             |false          |String    |A comma delimited list of topics that will show (display: block) this element|
|tabindex  |false         |             |false          |String    |Set the html tabindex attribute on rendered html element|
|targets   |false         |             |false          |String    |A comma separated list of ids of container elements to load with the contents from the result of this request|
|template  |false         |             |false          |String    |The template (other than default) to use for rendering the element|
|templateDir|false         |             |false          |String    |The template directory.|
|theme     |false         |             |false          |String    |The theme (other than default) to use for rendering the element|
|title     |false         |             |false          |String    |Set the html title attribute on rendered html element|
|tooltip   |false         |             |false          |String    |Set the tooltip of this particular component|
|tooltipConfig|false         |             |false          |String    |Deprecated. Use individual tooltip configuration attributes instead.|
|tooltipCssClass|false         |StrutsTTClassic|false          |String    |CSS class applied to JavaScrip tooltips|
|tooltipDelay|false         |Classic      |false          |String    |Delay in milliseconds, before showing JavaScript tooltips |
|tooltipIconPath|false         |             |false          |String    |Icon path used for image that will have the tooltip|
|validate  |false         |false        |false          |String    |Whether to execute validation on this elements of the form(s) provided in the formId attribute (valid values are 'true', 'false', and 'only'). Selecting 'only' will noly validate the form fiellds and not execute the result of this action implied by the href url|
|value     |false         |             |false          |String    |Preset the value of input element.|