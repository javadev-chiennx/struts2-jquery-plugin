# Introduction #

This tag enables the use of the **struts2-jquery-plugin**. It includes the require javascript and css files and provides general document-wide plugin configurations.

# Sample Code #
```
   <%@taglib prefix="s" uri="/struts-tags"%>
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


# Significant Attributes #
  * **compressed** (_boolean_) - Determine whether to use compressed versions of included files (default = 'true')
  * **locale** (_String_) - Set a locale string for any localizable widgets/components
  * **uiTheme** - (_String_) - The name of a provided jquery-ui theme or the path to a custom jquery them of your own (if just name provided, must match included theme, else if path provided will look for theme at path relative to webapp root).
  * **baseRelativePath** - Context relative path of jquery distribution folder (if not using the default provided by plugin)


# Theming #
To use a built-in theme, simply set the **uiTheme** attribute to the theme name. All the following standard jquery ui themes are available: base, black-tie, blitzer, cupertino, dark-hive, dot-luv, eggplant, excite-bike, flick, hot-sneaks, humanity, le-frog, mint-choc, overcast, pepper-grinder, redmond, smoothness, south-street, start, south, sunny, swanky-purse, trontastic, ui-darkness, ui-lightness, vader.

You can also use your own custom themes. To use a custom theme, place the theme .css file (and accompanying images folder) within you webapp root and set the **uiTheme** attribute to the path to the custom theme .css file. The path provided must be relative to the webapp root and must include the .css file name.


# All Attributes #
|**Name** | **Required** | **Default** | **Evaluated** | **Type** | **Description** |
|:--------|:-------------|:------------|:--------------|:---------|:----------------|
|accesskey|false         |             |false          |String    |Set the html accesskey attribute on rendered html element|
|baseRelativePath|false         |/struts/jquery|false          |String    |Context relative path of jquery distribution folder|
|compressed|false         |true         |false          |Boolean   |Use compressed version of jquery  javascript files|
|cssClass |false         |             |false          |String    |The css class to use for element|
|cssErrorClass|false         |             |false          |String    |The css error class to use for element|
|cssErrorStyle|false         |             |false          |String    |The css error style definitions for element to use|
|cssStyle |false         |             |false          |String    |The css style definitions for element to use|
|disabled |false         |             |false          |String    |Set the html disabled attribute on rendered html element|
|id       |false         |             |false          |String    |HTML id attribute|
|javascriptTooltip|false         |false        |false          |Boolean   |Use JavaScript to generate tooltips|
|key      |false         |             |false          |String    |Set the key (name, value, label) for this particular component|
|label    |              |false        |false          |String    |Label expression used for rendering an element specific label|
|labelSeparator|false         |:            |false          |String    |String that will be appended to the label|
|labelposition|false         |             |false          |String    |Define label position of form element (top/left)|
|locale   |false         |             |false          |String    |Default locale to be used by jQuery, locale name must be specified as in RFC3066|
|name     |false         |             |false          |String    |The name to set for element|
|onblur   |false         |             |false          |String    | Set the html onblur attribute on rendered html element|
|onchange |false         |             |false          |String    |Set the html onchange attribute on rendered html element|
|onclick  |false         |             |false          |String    |Set the html onclick attribute on rendered html element|
|ondblclick|false         |             |false          |String    |Set the html ondblclick attribute on rendered html element|
|onfocus  |false         |             |false          |String    |Set the html onfocus attribute on rendered html element|
|onkeydown|false         |             |false          |String    |Set the html onkeydown attribute on rendered html element|
|onkeypress|false         |             |false          |String    |Set the html onkeypress attribute on rendered html element|
|onkeyup  |false         |             |false          |String    |Set the html onkeyup attribute on rendered html element|
|onmousedown|false         |             |false          |String    |Set the html onmousedown attribute on rendered html element|
|onmousemove|false         |             |false          |String    |Set the html onmousemove attribute on rendered html element|
|onmouseout|false         |             |false          |String    |Set the html onmouseout attribute on rendered html element|
|onmouseover|false         |             |false          |String    |Set the html onmouseover attribute on rendered html element|
|onmouseup|false         |             |false          |String    |Set the html onmouseup attribute on rendered html element|
|onselect |false         |             |false          |String    |Set the html onselect attribute on rendered html element|
|required |false         |false        |false          |Boolean   |If set to true, the rendered element will indicate that input is required|
|requiredposition|false         |             |false          |String    |Define required position of required form element (left|right)|
|tabindex |false         |             |false          |String    |Set the html tabindex attribute on rendered html element|
|template |false         |             |false          |String    |The template (other than default) to use for rendering the element|
|templateDir|false         |             |false          |String    |The template directory.|
|theme    |false         |             |false          |String    |The theme (other than default) to use for rendering the element|
|title    |false         |             |false          |String    |Set the html title attribute on rendered html element|
|tooltip  |false         |             |false          |String    |Set the tooltip of this particular component|
|tooltipConfig|false         |             |false          |String    |Deprecated. Use individual tooltip configuration attributes instead.|
|tooltipCssClass|false         |StrutsTTClassic|false          |String    |CSS class applied to JavaScrip tooltips|
|tooltipDelay|false         |Classic      |false          |String    |Delay in milliseconds, before showing JavaScript tooltips |
|tooltipIconPath|false         |             |false          |String    |Icon path used for image that will have the tooltip|
|value    |false         |             |false          |String    |Preset the value of input element.|