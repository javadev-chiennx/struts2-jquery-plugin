# Introduction #
This renders a jQuery dialog widget that can display as a modal or modeless dialog and can be populated with text or remote content including remote pages loaded via ajax. The dialog can be resizable, movable, and all the other options provided by the dialog jQuery-ui widget.

# Sample Code #
The following is a simple example of loading a dialog that contains a remotely loaded page
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:submit onClickTopics="showDialog" cssStyle="float:left">Show Dialog</sj:submit>
	 <sj:dialog id="_dialog" showTopics="showDialog" src="dialogContent.action" modal="false" resizable="false" 
            position="center" height="400" width="600" >
         </sj:dialog>
      </body>
   </html>
```


# Significant Attributes #
  * **src** (_String_) - The src url from which to load the contents of the dialog
  * **buttons** (_String_) - A comma delimited list of dialog button names (in order of appearance, in same order as buttonTopics)
  * **buttonTopics** (_String_) - A comma delimited list of topics to be published when buttons are clicked (in same order as button names)
  * **title** (_String_) - The dialog title (optional)
  * **modal** (_String_) - Should the dialog be shown as a modal dialog or not (true/false)
  * **draggable** (_String_) - If the dialog should be draggable or not (true/false)
  * **resizable** (_String_) - /If the dialog should be resizable or not (true/false)
  * **height** (_String_) - The height of the dialog (can be a numerical valued function)
  * **width** (_String_) - The width of the dialog (can be a numerical valued function)
  * **position** (_String_) - The starting position of the dialog. Possible values: 'center', 'left', 'right', 'top', 'bottom', or an array containing a coordinate pair (in pixel offset from top left of viewport) or the possible string values (e.g. ['right','top'] for top right corner)
  * **data** (_String_) - Additional data (in the form of "key1=value1,key2=value2,..." to be provided to the dialog for use in button click topic handlers
  * **options** (_String_) - Additional widget options (see jQuery-ui dialog widget options)
  * **formIds** (_String_) - A comma-delimited list of ids of forms for which the input elements will be submitted along with the load request
  * **elementIds** (_String_) - A comma-delimited list of ids of input elements which will be submitted (name/value) along with the load request
  * **indicatorId** (_String_) - The id of an element to display while the request is being processed
  * **loadingText** (_String_) - A text string to display in the target (if a target is provided) while the request is being processed
  * **errorElementId** (_String_) - The id of an element to display if the request returns an error code
  * **errorText** (_String_) - A text string to be displayed in the target (if a target is provided) if the request returns an error code
  * **onCompleteTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request completes (on success or error)
  * **onErrorTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request returns an error code
  * **onSuccessTopics** (_String_) -  A comma delimited list of topics to be published when the ajax request copletes successfully
  * **hideTopics** (_String_) -  A comma delimited list of topics which will cause the element to become hidden
  * **showTopics** (_String_) -  A comma delimited list of topics which will cause the element to become visible
  * **removeTopics** (_String_) -  A comma delimited list of topics which will cause the element to be removed from the DOM

# All Attributes #
TODO: