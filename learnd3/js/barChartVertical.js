/**
 * inspirations and sources from:
 *  http://bl.ocks.org/mbostock/f098d146315be4d1db52
 *  http://bl.ocks.org/mbostock/3887051
 *  http://bost.ocks.org/mike/bar/3/
 */


/**
 * @param element = where the chart will be placed
 * @param data = [
 {
     "metric": "Option A",
     "value": 20
 },
 {
     "metric": "Option B",
     "value": 10
 },
 {
     "metric": "Option C",
     "value": 5
 }
 ];
 */
function barChartVertical(element, json) {

    // parse is as a json if necessarily
    var data;
    if (typeof json === String) {
        data = JSON.parse(json);
    } else {
        data = json;
    }

    // separate the labels and values
    var label = [],
        value = [];
    data.forEach(function (element) {
        label.push(element.metric)
    });
    data.forEach(function (element) {
        value.push(element.value)
    });

    var svgElement = "#barChart";

    var margin = {top: 70, right: 20, bottom: 30, left: 40};

    var w = parseInt($(svgElement).width()) === 0 || isNaN(parseInt($(svgElement).width())) ? 500 - margin.left - margin.right : parseInt($(svgElement).width()) - margin.left - margin.right,
        h = parseInt($(svgElement).height()) === 0 || isNaN(parseInt($(svgElement).height())) ? 350 - margin.top - margin.bottom : parseInt($("#viz-container").height()) - margin.top - margin.bottom;

    var barSpace = 10,
        barWidth = parseInt(w / data.length);


    var x = d3.scale.ordinal()
        .rangeRoundBands([0, w], .1);

    var y = d3.scale.linear()
        .domain([0, d3.max(data, function (d) {
            return d.value
        })])
        .range([h, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svgContainer = d3.select(svgElement)
        .append("svg")
        .attr("width", w + margin.left + margin.right)
        .attr("height", h + margin.top + margin.bottom)
        .call(responsivefy)
        .append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    svgContainer.append("g")
        .attr("class", "x d3-axis")
        .attr("transform", "translate(0, " + h + ")")
        .call(xAxis);

    svgContainer.append("g")
        .attr("class", "y d3-axis")
        .call(yAxis);


    svgContainer.selectAll(".d3-bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "d3-bar")
        .attr("x", function (d, i) {
            return i * barWidth + barSpace;
        })
        .attr("width", barWidth - barSpace)
        .attr("y", function (d) {
            return y(d.value);
        })
        .attr("height", function (d) {
            return h - y(d.value);
        })
        .attr("data-container", "body")
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "top")
        .attr("title", function (d) {
            return d.metric + ": " + d.value
        });
}