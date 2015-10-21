#### Version 1.4 ####
  * Upgraded to jquery 1.4.2 and final jQuery-ui.1.8.1
  * Added jQuery-ui button widget
  * Fixed ie issue with accordion menu always being disabled
  * Added modal overlay style option for loading indicator to mask contents while action is executing
  * Fixed issue with tabbed pane indicatorId option not being applied

#### Version 1.3 ####
  * Added grid tag which provides jQGrid grid plugin. Grid functionality can be enabled/disabled to minimize footprint
  * Exposed 'headerClass' attribute on accordionItem to allow styling of accordion item header
  * Fixed truncation of y-axis label on plot widget
  * Added hideDisabled attribute to base tag to allow preventing display of disabled components
  * Fixed disabling/enabling of accordion and added disabling of individual accordion items
  * Fixed select tag - added capturing of value from name attribute
  * Fixed form tag to trap default post of submit and handle properly
  * Added text tag to load simple text remotely
  * Added confirmationMessage attribute to all action tags (submit, anchor ...) to prompt for comfirmation before submitting
  * Fixed tab showTopics attribute
  * Fixed isDisabled attribute on tab components
  * Added lazyLoad attribute to containers (div, text, textfield, textarea,
  * Fixed error when using loadingText property that prevented form & element posting

#### Version 1.2.1 ####
  * Upgraded to jQuery 1.4.1, jQuery-ui 1.8
  * Fixed Dialog to work with new dialog DOM structure (upgrade had broken topic publishing for dialog buttons)
  * Updated jQuery-subscribe to work with jQuery 1.4

#### Version 1.2 ####
  * Added chart tag which provides Flot jquery charting framework to struts. Charting functionality can be enabled/disabled to minimize footprint
  * Added polling functionality out of the box to all container components (div, dialog, chart, accordionItem, select, textarea, textfield)
  * Added caching and lazy-load capabilities to accordion-item component
  * Fixed dialog loading to utilize triggers & subscription to prevent embedded page multi-bind issues
  * Fixed some accordion-item attributes

#### Version 1.1.4 ####
  * Added cssStyle attribute to accordion and accordion-item widgets
  * Fixed accordion widget to load remote content on load
  * Added lazyLoad functionality to accordion menu items
  * Added cache functionality to accordion menu items

#### Version 1.1.3 ####
  * Updated datepicker template to use delayed binding to resolve issues with IE8

#### Version 1.1.2 ####
  * Updated tabbed pane to allow mixing of remote and static tab content (per jQuery-ui tabs markup)

#### Version 1.1.1 ####
  * Fixed bug that required the use of _version_ attribute in 'head' tag

#### Version 1.1.0 ####
  * Added sortable option to div tag and added integrated with publish/subscribe to publish topics on various sortable events
  * Added accordion menu widget

#### Version 1.0.9 ####
  * Add version attribute to head tag to allow setting version to prevent browser cache of css and .js files
  * Fixed URLBuilder to get simple request URI
  * Added class attribute to dialog

#### Version 1.0.8 ####
  * Fixed issue URLBuilder not resolving proper url context
  * Updated dialog to recognize cssClass attribute and pass on to jquery dialogClass attribute
  * Consolidated loading topic handlers for containers and input elements

#### Version 1.0.7 ####
  * Fixed issue with event propagation on subscribe handlers
  * Fixed handling of disabled attribute on all tags
  * Fixed blurTopics attribute on input tags
  * Fixed validate attribute on input tags
  * Fixed bug in 'locale ' attribute of head tag freemarker template
  * Fixed bad URLBuilder import

#### Version 1.0.6 ####
  * Fixed javascript escaping of additional jquery options
  * Fixed using additional jquery options on div
  * Removed spurious id attribute rendering on text and textarea templates

#### Version 1.0.5 ####
  * Fixed Datepicker showButton attribute
  * Added missing topic handlers to Datepicker
  * Added missing disabled attribute to Datepicker js
  * Added drag/drop and resizable functionality to div

#### Version 1.0.4.1 ####
  * Fixed Select Tag bug with emptyOption, headerKey & headerValue attributes
  * Fixed TextArea and TextField bugs with elementIds and FormIds attributes

#### Version 1.0.4 ####
  * Added textarea tag - loads content remotely using ajax and has all usual subscribe/publish topics & handlers
  * Added URLBuilder to generate root-based URLs for rendering all tag URLs.
  * Fixed bug with extra `</input>` close tag in text tag freemarker template