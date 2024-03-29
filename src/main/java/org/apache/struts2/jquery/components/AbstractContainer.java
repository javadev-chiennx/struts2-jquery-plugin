package org.apache.struts2.jquery.components;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.views.annotations.StrutsTagAttribute;

import com.opensymphony.xwork2.util.ValueStack;

public abstract class AbstractContainer extends AbstractBase implements Container {

	protected String reloadTopics;			//topics that will cause container to reload
	
	protected String onAlwaysTopics;		//topics that are published before load, after load and on error
    protected String onBeforeTopics;		//topics that are published before a load
    protected String onCompleteTopics;		//topics that are published before after load
    protected String onErrorTopics;			//topics that are published on a load error
    protected String onSuccessTopics;		//topics that are published on a load error
    
	protected String src;					//The url from which to load the source
    protected String loadingText;			//Text to be displayed during load (will be shown if any provided)
    protected String errorText;				//text to be displayed on load error
    protected String indicatorId;			//Id of element that will be displayed during execution of this element's action and hidden afterwards

    protected String formIds;			//Ids of forms that should be serialized and submitted when this container is loaded
    protected String elementIds;		//Ids of form elements that should be serialized and submitted when this div is loaded

	protected String pollMillis;		//The interval in milliseconds for the chart to poll for data updates. Only valid for a chart with 'src' set. No polling if null or 0
	
	public AbstractContainer(ValueStack stack, HttpServletRequest request, HttpServletResponse response) {
		
		super(stack, request, response);
	}

    public void evaluateExtraParams() {
    	
        super.evaluateExtraParams();
            	
        if (reloadTopics != null)
            addParameter("reloadTopics", findString(reloadTopics));
        if (onBeforeTopics != null)
            addParameter("onBeforeTopics", findString(onBeforeTopics));
        if (onCompleteTopics != null)
            addParameter("onCompleteTopics", findString(onCompleteTopics));
        if (onErrorTopics != null)
            addParameter("onErrorTopics", findString(onErrorTopics));
        if (onSuccessTopics != null)
            addParameter("onSuccessTopics", findString(onSuccessTopics));
        if (src != null)
        	addParameter("src", ensureAttributeSafelyNotEscaped(URLBuilder.buildRootURL(findString(src), request)));
        if (loadingText != null)
            addParameter("loadingText", findString(loadingText));
        if (errorText != null)
            addParameter("errorText", findString(errorText));
        if (indicatorId != null)
            addParameter("indicatorId", findString(indicatorId));
        if (formIds != null)
            addParameter("formIds", findString(formIds));
        if (elementIds != null)
            addParameter("elementIds", findString(elementIds));
        if (pollMillis != null){
        	addParameter("pollMillis", findValue(pollMillis, Integer.class));
        }
    }

    protected void setStack(ValueStack stack){
    	this.stack = stack;
    }

    @StrutsTagAttribute(name="errorText", description="The text to be displayed on load error. If 'errorElement' is provided, " +
			"this will display the error in the elemtn (if existing), if not, it will display the error as the contents of this container", type="String", defaultValue="false")
	public void setErrorText(String errorText) {
		this.errorText = errorText;
	}	

    @StrutsTagAttribute(name="loadingText", description="The text to be displayed during load (will be shown if any provided)", type="String", defaultValue="")
	public void setLoadingText(String loadingText) {
		this.loadingText = loadingText;
	}

    @StrutsTagAttribute(name="onCompleteTopics", description = "Topics that are published before after load is completed", type="String", defaultValue="")
	public void setOnCompleteTopics(String onCompleteTopics) {
		this.onCompleteTopics = onCompleteTopics;
	}

    @StrutsTagAttribute(name="onAlwaysTopics", description = "A comma delimited list of topics that are always published (before load, after load, on error and on success)", type="String", defaultValue="")
	public void setOnAlwaysTopics(String onAlwaysTopics) {
		this.onAlwaysTopics = onAlwaysTopics;
	}

    @StrutsTagAttribute(name="onBeforeTopics", description = "Topics that are published before a load", type="String", defaultValue="")
	public void setOnBeforeTopics(String onBeforeTopics) {
		this.onBeforeTopics = onBeforeTopics;
	}

    @StrutsTagAttribute(name="onErrorTopics", description = "Topics that are published on a load error", type="String", defaultValue="")
	public void setOnErrorTopics(String onErrorTopics) {
		this.onErrorTopics = onErrorTopics;
	}

    @StrutsTagAttribute(name="onSuccessTopics", description = "Topics that are published after a succesful load", type="String", defaultValue="")
	public void setOnSuccessTopics(String onSuccessTopics) {
		this.onSuccessTopics = onSuccessTopics;
	}

	@StrutsTagAttribute(name="reloadTopics", description="A comma delimited list of topics that will cause this element to reload", type="String", defaultValue="")
	public void setReloadTopics(String reloadTopics) {
		this.reloadTopics = reloadTopics;
	}

	@StrutsTagAttribute(name="src", description="The url from which to load the container contents", type="String", defaultValue="")
	public void setSrc(String src) {
		this.src = src;
	}

	@StrutsTagAttribute(name="indicatorId", description="Id of element that will be displayed during execution of this element's action and hidden afterwards", type="String", defaultValue="")
	public void setIndicatorId(String indicatorId) {
		this.indicatorId = indicatorId;
	}

    @StrutsTagAttribute(name="formIds", description="Comma delimited list of form ids for which to serialize all fields during contianer load (if multiple forms have overlapping element names, it is indeterminate which will be used)", type="String", defaultValue="")
	public void setFormIds(String formIds) {
		this.formIds = formIds;
	}

	@StrutsTagAttribute(name="elementIds", description="A comma delimited list of form elements that should be individually serialized and sent with the container's load request. " +
			"Input element must have a 'name' attribute and will be serialized as <name>=<value>", type="String", defaultValue="", required=false)
	public void setElementIds(String elementIds){
		this.elementIds = elementIds;
	}
    
    @StrutsTagAttribute(description="The interval in milliseconds for the chart to poll for data updates. Only valid for a chart with 'src' set. No polling if null or 0",  type="Integer", defaultValue="false", required=false)
    public void setPollMillis(String pollMillis) {
		this.pollMillis = pollMillis;
	}
}