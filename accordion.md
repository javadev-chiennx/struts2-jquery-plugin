# Introduction #
This renders a jQuery accordion widget that can... and all the other options provided by the accordion jQuery-ui widget.

# Sample Code #
The following is a simple example of displaying an accordion menu with two menu items, one with static content and the other with remotely loaded content
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:accordion options="{collapsible:true}">
		<sj:accordionItem title="Static Menu Item">
		   These are the static contents of menu item #1. Click <sj:a href="details.action" targets="detailsFrame">here</sj:a> for more details
		</sj:accordionItem> 
		<sj:accordionItem title="Remote Menu Item" src="remote.action"/>
         </sj:accordion >
      </body>
   </html>
```


# Significant Attributes #
### accordion ###
  * **active** (_Boolean_) - Selector for the active element. Set to false to display none at start. Needs collapsible=true.
  * **autoHeight** (_Boolean_) - If set, the highest content part is used as height reference for all other parts. Provides more consistent animations
  * **clearStyle** (_Boolean_) -  If set to true, clears height and overflow styles after finishing animations. This enables accordions to work with dynamic content. Won't work together with autoHeight
  * **collapsible** (_Boolean_) -  Whether all the sections can be closed at once. Allows collapsing the active section by the triggering event (click is the default)
  * **fillSpace** (_Boolean_) -  If set to true, the accordion completely fills the height of the parent element. Overrides autoheight.
  * **headerClass** (_String_) -  The class to assign to the header element div
  * **options** (_String_) -  Additional widget options per the jquery-ui accordion docs
  * **enableTopics** (_String_) -  A comma delimited list of topics which will cause the accordion menu to be disabled
  * **disableTopics** (_String_) -  A comma delimited list of topics which will cause the accordion menu to be enabled
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the accordion menu to be destroyed

### accordionItem ###
  * **src** (_String_) - The url of the page from which to remotely load the item contents
  * **isActive** (_Boolean_) - Set to true to make this the initial active menu item (only one item should have this)
  * **cache** (_Boolean_) - If set to true and the contents are remotely loaded ('src' provided), contents will only be loaded once. Otherwise contents will be reloaded each time the item is expanded (default=false)
  * **lazyLoad** (_Boolean_) - //If set to true and the contents are remotely loaded ('src' provided), contents will not be loaded at first until the item is expanded (default=false).
  * **onSuccessTopics** (_String_) -  A comma delimited list of topics to be published when the item completes a remote load successfully
  * **onCompleteTopics** (_String_) -  A comma delimited list of topics to be published when the item completes a remote load (on success or error)
  * **onErrorTopics** (_String_) -  A comma delimited list of topics to be published when the item returns an error code when trying to remote load
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the accordion item to collapse
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the accordion item to expand

# All Attributes #
TODO: