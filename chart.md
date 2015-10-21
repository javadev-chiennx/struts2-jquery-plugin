See information about **flot** at http://code.google.com/p/flot/

# Introduction #
This renders a chart very easily as a struts tag using the jquery flot framework. The charting capability must be enabled by setting the **enableCharting** property on the head tag. Enabling charting imports some additional javascript resources, so this disabled by default to minimize the footprint.

Flot plotting provides very attractive charting using the jquery framework and all flot chart capabilities (and more) are provided from the simplicity of a struts tags.

Chart data can be provided as a simple map-collection, map, or list attribute (usually as field in the action) or via ajax as a JSON string (usually using the struts-2 built-in JSONResult which will serialize model objects to the response as a json string)

The flot framework currently supports line-charts, points, bar-charts, and pie charts (via a flot plug-in which is embedded), it also supports multiple series, multiple axes, stacking and many other  essential charting features.

# Sample Code #
The following is a simple example of providing a chart from a model data field with a few charting features. this chart contains two
```
   <%@taglib prefix="s" uri="/struts-tags"%>
   <%@ taglib prefix="sj" uri="/struts2-jquery-tags" %>
   <html>
      <head>
         <sj:head compressed="false" enableCharting="true"/>
         <title><s:text name="application.title"/></title>
      </head>
      <body>  
         <sj:chart showLines="true,true" showPoints="true,false" xAxis1Label="x1 Axis" yAxis1Label="y1 Axis" showLegend="true" labels="Series 1, Series 2" data="chartMapList" cssStyle="height: 300px; width: 95%"/>
      </body>
   </html>
```

Checkout a demonstration on the struts2-jquery [showcase site](http://struts2-jquery.appspot.com/home.action).

# Significant Attributes #
  * **data** (_String_) - The name of an object on the value-stack which contains the chart data. The object must  be either: 1) A collection of maps in which each map is a collection and the maps entries are the x,y value pairs in each series.  2) A map which is a single series in which the map entries are the x,y value pairs of the single series. 3) A collection which provides the one-dimensional data for a pie type chart or (if not a pie-chart) provides duplicate x,y value pairs for a single series chart.
  * **src** (_String_) - The src url from which to load the data for the chart. The response must return a JSON string corresponding to the form specified for data by the flot API [http://people.iola.dk/olau/flot/API.txt](http://people.iola.dk/olau/flot/API.txt), with the additional allowance that each series data can be an associative array in which each key:value pair represents an x:y pair in the series (eg. {"233.33":"3343.44", "245.33:764.33", "342.1":"452.32"}). This is added to allow the standard serialization of maps using the struts2 JSONResult to work automatically.

**TODO**...
  * pie;				//If it should be shown as a pie chart
  * stacked;			//If the data values should be stacked
  * showLegend;		//If the legend should be displayed
  * legendPosition;	//Placement of the legend: must be "ne" or "nw" or "se" or "sw"
  * labels;			//A list of labels for the series. Must be same length as # of series in data
  * showLines;			//A list or comma-delimited string, of booleans, for each series, whether to show lines or not
  * showBars;			//A list or comma-delimited string, of booleans, for each series, whether to show bars or not
  * showPoints;		//A list or comma-delimited string, of booleans, for each series, whether to show points or not
  * line;				//If all series should show lines by default;
  * bar;				//If all series should show bars by default;
  * point;				//If all series should show points by default;
  * colors;			//A list or comma-delimited string of colors to use for the chart series; colors can be specified like: #d18b2c, #dba255, #919733
  * grid;				//If the grid should be displayed or not;
  * gridColor;			//The color of the grid lines (if shown)
  * gridBackground;	//The background chart color or gradient (if shown). Colors can be specified like: #d18b2c, Gradients can be specified as: { colors: ["#000", "#999"] } or  { colors: [{ opacity: 0.8 }, { brightness: 0.6, opacity: 0.8 } ] }
  * onPlotClickTopic;	//A topic that is published whenever the user clicks on the plot;
  * onPlotHoverTopic;	//A topic that is published whenever the user moves over the plot;
  * borderWidth;		//the width of the border around the plot. 0 = no border
  * tickColor;			//The color of the tick marks;
  * seriesClickTopics;	//A list or comma delimited string of topics, one per series, that will be published when the user clicks on a data item in that series;
  * seriesHoverTopics;	//A list or comma delimited string of topics, one per series, that will be published when the user hovers over a data item in that series;
  * legendColor;		//A color for the background of the legend
  * legendOpacity;		//The opacity of the background of the legend
  * xAxis1Min;			//The min value of the x-axis 1;
  * xAxis1Max;			//The max value of the x-axis 1;
  * xAxis2Min;			//The min value of the x-axis 2;
  * xAxis2Max;			//The max value of the x-axis 2;
  * yAxis1Min;			//The min value of the y-axis 1;
  * yAxis1Max;			//The max value of the y-axis 1;
  * yAxis2Min;			//The min value of the y-axis 2;
  * yAxis2Max;			//The max value of the y-axis 2;
  * xAxis1Time;		//A boolean indicating whether the x-axis 1 uses time-series data
  * xAxis2Time;		//A boolean indicating whether the x-axis 2 uses time-series data
  * yAxis1Time;		//A boolean indicating whether the y-axis 1 uses time-series data
  * yAxis2Time;		//A boolean indicating whether the y-axis 2 uses time-series data
  * xAxis1Label;		//A boolean indicating whether a label should be shown next to the x-axis 1
  * xAxis2Label;		//A boolean indicating whether a label should be shown next to the x-axis 2
  * yAxis1Label;		//A boolean indicating whether a label should be shown next to the y-axis 1
  * yAxis2Label;		//A boolean indicating whether a label should be shown next to the y-axis 2
  * options;			//A catch-all for the user to specify custom flot options above the ones specific provided for as attributes. options provided here will override those set as attributes.

