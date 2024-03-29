package org.apache.struts2.jquery.views.jsp.ui;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.components.Component;
import org.apache.struts2.jquery.components.Submit;

import com.opensymphony.xwork2.util.ValueStack;

public class SubmitTag extends AbstractActionTag {
	
	private static final long serialVersionUID = -2130063104541861261L;
				
	public SubmitTag() {
		super();
	}

	@Override
	public Component getBean(ValueStack stack, HttpServletRequest req, HttpServletResponse res) {
		Component bean = new Submit(stack, req, res);
		return bean;
	}

	@Override
    protected void populateParams() {
        
		super.populateParams();

       Submit submit = (Submit) component;
       submit.setKey(key);
       submit.setValue(value);

    }
}
