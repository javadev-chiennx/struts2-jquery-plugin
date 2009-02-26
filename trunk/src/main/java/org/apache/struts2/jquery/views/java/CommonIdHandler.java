/*
 * $Id: CommonIdHandler.java,v 1.1 2009/02/09 07:18:16 echijioke Exp $
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.apache.struts2.jquery.views.java;

import org.apache.struts2.views.java.Attributes;
import org.apache.struts2.views.java.simple.AbstractTagHandler;

import java.io.IOException;
import java.util.Random;

/**
 * Adds attributes from common-attributes.ftl
 */
public class CommonIdHandler extends AbstractTagHandler {

    /* (non-Javadoc)
     * @see org.apache.struts2.views.java.simple.AbstractTagHandler#start(java.lang.String, org.apache.struts2.views.java.Attributes)
     */
    @Override
    public void start(String name, Attributes a) throws IOException {
       
    	Object idObj = context.getParameters().get("id");
    	String id;
    	if(idObj == null || idObj.toString().isEmpty()) {
    		id = "__jquery__" + name + Math.abs(new Random().nextInt());
    	} else {
    		id = idObj.toString();
    	}
    	
    	a.add("id", id);
    	context.getTag().setId(id);
    	
        super.start(name, a);
    }

}