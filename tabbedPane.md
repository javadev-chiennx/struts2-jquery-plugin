# Introduction #
The struts-jquery `tabbedPane` and `tab` tags render a jQuery tabbedPane with tabs that load their contents remotely via ajax.

Two tags are used in rendering a tabbed pane. The **`tabbedPane`** tag has overall tabbedpane attributes and  must contain one **`tab`** tag for each pane.

The tabbedPane tabs provide a special target handle 'id' for other struts-jquery tags to use to as their _target_ id. Any struts-jquery tag that has a `targets` attribute and in contained in a tabbedPane tab may specify **#tab** as the 'id' to refer to it's container tab.

# Sample Code #
This example loads a tabbed pane with three tabs and automatically selects the first tab upon loading.
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:tabbedPane id="projectTab" selected="1">
	    <sj:tab src="tabbedPaneOverview.action">Overview</sj:tab>
	    <sj:tab src="tabbedPaneDownloads.action">Downloads</sj:tab>
	    <sj:tab src="tabbedPaneWiki.action">Wiki</sj:tab>
	 </sj:tabbedPane>
      </body>
   </html>
```


# Significant Attributes #
### tabbedPane ###
  * **selected** (_String_) - The zero-based index of a tab to be selected upon initial pane load
  * **isCache** (_Boolean_) - hether or not to cache remote tabs content, e.g. load only once or with every click
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the pane to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the pane to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the pane to be removed from the DOM

### tab ###
  * **src** (_String_) - The url of the page from which to remotely load the tab
  * **isSelected** (_Boolean_) - Whether the tab is selected upon load (only one tab should have this attribute set to true
  * **reloadTopics** (_String_) -  A comma delimited list of topics which will cause the pane to become hidden
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the tab to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the tab to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the tab to be removed from the tabbed pane
  * **focusTopics** (_String_) -  A comma delimited list of topics which will cause the tab to become selected
  * **enableTopics** (_String_) -  A comma delimited list of topics which will cause the tab to become enabled
  * **disableTopics** (_String_) -  A comma delimited list of topics which will cause the tab to become disabled
  * **onFocusTopics** (_String_) -  A comma delimited list of topics which will be published when the tab is selected
  * **onBlurTopics** (_String_) -  A comma delimited list of topics which will be published when the tab loses selection

# All Attributes #
### tabbedPane ###
| **Name** | **Required** | **Default** | **Evaluated** | **Type** | **Description** |
|:---------|:-------------|:------------|:--------------|:---------|:----------------|
|accesskey |false         |             |false          |String    |Set the html accesskey attribute on rendered html element|
|cssClass  |false         |             |false          |String    |The css class to use for element|
|cssErrorClass|false         |             |false          |String    |The css error class to use for element|
|cssErrorStyle|false         |             |false          |String    |The css error style definitions for element to use|
|cssStyle  |false         |             |false          |String    |The css style definitions for element to use|
|disabled  |false         |             |false          |String    |Set the html disabled attribute on rendered html element|
|hideTopics|false         |             |false          |String    |A comma delimited list of topics that will hide (display: none) this element|
|id        |false         |             |false          |String    |HTML id attribute|
|isCache   |false         |             |false          |String    |A boolean indicating whether or not to cache remote tabs content, e.g. load only once or with every click.|
|javascriptTooltip|false         |false        |false          |Boolean   |Use JavaScript to generate tooltips|
|key       |false         |             |false          |String    |Set the key (name, value, label) for this particular component|
|label     |false         |             |false          |String    |Label expression used for rendering an element specific label|
|labelSeparator|false         |:            |false          |String    |String that will be appended to the label|
|labelposition|false         |             |false          |String    |Define label position of form element (top/left)|
|name      |false         |             |false          |String    |The name to set for element|
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
|options   |false         |             |false          |String    |The name of a variable(or a javascript map) that contains additional widget options to be passed to the tabbed pane|
|removeTopics|false         |             |false          |String    |A comma delimited list of topics that will remove this element from the dom|
|required  |false         |false        |false          |Boolean   |If set to true, the rendered element will indicate that input is required|
|requiredposition|false         |             |false          |String    |Define required position of required form element (left|right)|
|selected  |false         |             |false          |Integer   |The zero-based index of the tab that is selected when the pane first loads|
|showTopics|false         |             |false          |String    |A comma delimited list of topics that will show (display: block) this element|
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


### tab ###
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
|elementIds|false         |             |false          |String    |A comma delimited list of form elements that should be individually serialized and sent with the input load request. Input element must have a 'name' attribute and will be serialized as name=value|
|enableTopics|false         |             |false          |String    |A comma delimited list of topics that will enable this element|
|focusTopics|false         |             |false          |String    |A comma delimited list of topics that will cause this element to focus|
|formIds   |false         |             |false          |String    |A comma delimited list of forms that should be serialized and sent with the input load request|
|hideTopics|false         |             |false          |String    |A comma delimited list of topics that will hide (display: none) this element|
|id        |false         |             |false          |String    |HTML id attribute|
|isDisabled|false         |             |false          |String    |A boolean indicating whether this tab is disabled|
|isSelected|false         |             |false          |String    |A boolean indicating whether this tab is selected at start (only one tab shoudl have the property set to true)|
|javascriptTooltip|false         |false        |false          |Boolean   |Use JavaScript to generate tooltips|
|key       |false         |             |false          |String    |Set the key (name, value, label) for this particular component|
|label     |false         |             |false          |String    |Label expression used for rendering an element specific label|
|labelSeparator|false         |:            |false          |String    |String that will be appended to the label|
|labelposition|false         |             |false          |String    |Define label position of form element (top/left)|
|name      |false         |             |false          |String    |The name to set for element|
|onBlurTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
|onChangeTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
|onFocusTopics|false         |             |false          |String    |A comma delimited list of topics that published when the element value is changed|
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
|reloadTopics|false         |             |false          |String    |A comma delimited list of topics that will cause this element to reload its contents|
|removeTopics|false         |             |false          |String    |A comma delimited list of topics that will remove this element from the dom|
|required  |false         |false        |false          |Boolean   |If set to true, the rendered element will indicate that input is required|
|requiredposition|false         |             |false          |String    |Define required position of required form element (left|right)|
|showTopics|false         |             |false          |String    |A comma delimited list of topics that will show (display: block) this element|
|src       |**true**      |             |false          |String    |The url to be use to retrieve this element's contents|
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