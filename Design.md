# Overview #

The struts2-jquery-plugin is a plugin providing first-class support for AJAX to struts2. The plugin uses the [jQuery](http://www.jquery.com) javascript library and a very lightweight publish/subscribe framework built on jQuery to implement a set of tags and tag widgets that enable asynchronous loading of UI components and de-coupled interaction between UI components in a simple, standard way.

  * Struts2
    * tags
    * templates (currently freemarker & java-templates)

  * jQuery
    * core
    * UI
    * publish/subscribe
    * widgets


# Tag/Component Design #
Some initial thoughts...
Tags/Components can be classified by type/features which define the set of ajax attributes that the tags expose and allow for better reuse/maintenance of ajax implementation code.

The current tag features/types are:
  1. **Base** - This describes the base set of ajax attributes for _almost_ all ajax tags (the head tag is the one exception)
  1. **Container** - This describes the set of ajax attributes for tags which can contain _page_ content loaded remotely via ajax
  1. **Interactive** - This describes the base set of ajax attributes for tags which can be interacted with
  1. **Action** - This describes the set of ajax attributes for tags which can be clicked to perform an action (usually using a remote url)
  1. **Input** - This describes the set of ajax attributes for tags which accept user input and can contain json content loaded remotely via ajax

For each tag feature, there are three categories of ajax attributes exposed:
  1. **Listener Topics** - These are attributes that takes a comma delimited list of topics to subscribe to and which will trigger the given action on the component when published (eg. reloadTopics on a div tag will reload the div content whenever the topic is published)
  1. **Publish Topics** - These are attributes that take a comma-delimited list of topics that should be published when the component reaches the given state/fires the given event (eg. onClickTopics on an anchor tag will publish the listed topics when the link is clicked). These attributes always sart with the 'on' prefix.
  1. **Special** - These are attributes special to a particular

The following is a mapping of ajax atrributes to category for each feature:
  * **Base**
    * _Inherits_ :
    * _Listener Topics_ : hideTopics, showTopics, removeTopics
    * _Publish Topics_ :
    * _Special_ :

  * **Container**
    * _Inherits_ : Base
    * _Listener Topics_ : reloadTopics
    * _Publish Topics_ : onAfterTopics, onBeforeTopics, onErrorTopics, onSuccessTopics, onAlwaysTopics
    * _Special_ : src, loadingText, errorText, indicatorId

  * **Interactive**
    * _Inherits_ : Base
    * _Listener Topics_ : enableTopics, disableTopics
    * _Publish Topics_ :
    * _Special_ :

  * **Action**
    * _Inherits_ : Interactive
    * _Listener Topics_ :
    * _Publish Topics_ : onClickTopics
    * _Special_ : targets, href, formIds, validate,

  * **Input**
    * _Inherits_ : Interactive
    * _Listener Topics_ : focusTopics, reloadTopics
    * _Publish Topics_ : onChangeTopics, onBlurTopics, onFocusTopics
    * _Special_ : src

The following is a mapping of Tag/Component to features. In addition to the features (and therefore the various ajax attribute implied/provide by that feature) some tabs may have unique attributes - described as UNIQUE().

  * **head**: FEATURES(), UNIQUE(compressed, locale, baseRelativePath)
  * **div**: FEATURES(Base,Container)
  * **tabbedPane**: FEATURES(Base), UNIQUE(isCache, selected)
  * **tab**: FEATURES(Base,Input), UNIQUE(isSelected, isDisabled)
  * **a**: FEATURES(Base,Action)
  * **submit**: FEATURES(Base,Action)
  * **select**: FEATURES(Base,Input)
  * **text**: FEATURES(Base,Input)
  * **textarea**: FEATURES(Base,Input)
  * **autocomplete**: FEATURES(Base,Input)
  * **datetime**: FEATURES(Base,Input)