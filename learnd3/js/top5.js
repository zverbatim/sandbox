/**
 * Build a top 5 widget
 *
 * sources:
 * http://bl.ocks.org/mbostock/7328809
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * @param element = where it will be placed
 * @param data = [
 {
     "metric": "Metric A",
     "value": 20000
 },
 {
     "metric": "Metric B",
     "value": 10000
 },
 {
     "metric": "Metric C",
     "value": 500
 },
 {
     "metric": "Metric D",
     "value": 20
 },
 {
     "metric": "Metric E",
     "value": 0
 }
 ];
 */
function top5(element, data) {


    // sort by value
    data.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }

        if (a.value < b.value) {
            return 1;
        }

        return 0;
    });

    // extract the values and the labels
    var label = [],
        value = [];
    data.forEach(function (element) {
        label.push(element.metric)
    });
    data.forEach(function (element) {
        value.push(element.value)
    });


    var margin = {top: 10, right: 0, bottom: 70, left: 30},
        width = 120,
        height = 160,
        barHeight = 4,
        sectionHeight = height / data.length;

    var x = d3.scale.linear()
        .domain([0, d3.max(value)])
        .range([0, width]);

    var svg = d3.select(element)
        .append("svg")
        .attr("height", height + margin.left + margin.right)
        .attr("width", width + margin.top + margin.bottom);


    var chart = svg.append("g")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var section = chart.selectAll(".section")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "section")
        .attr("transform", function (d, i) {
            return "translate(0," + (i * sectionHeight) + ")";
        });

    //lines
    section.append("rect")
        .attr("y", Math.round(barHeight / 2) - 0.5 )
        .attr("height", 1)
        .attr("width", 120)
        .attr("fill", "#777777");

    // bar
    section.append("rect")
        .attr("height", barHeight)
        .attr("width", function (d) {
            return x(d.value);
        })
        .attr("fill", "rgb(66, 139, 202)");

    // label
    section.append("text")
        .attr("y", barHeight + 10)
        .attr("dy", ".35em")
        .text(function (d) {
            return d.metric;
        })
        .classed("text-muted", true)
        .classed("small", true);

    // metric values
    section.append("text")
        .attr("x", width)
        .attr("y", barHeight + 10)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function (d) {
            return d.value;
        })
        .classed("text-muted", true)
        .classed("small", true);
}