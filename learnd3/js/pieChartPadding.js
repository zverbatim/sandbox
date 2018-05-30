// modification of
// http://bl.ocks.org/mbostock/f098d146315be4d1db52
// http://bl.ocks.org/mbostock/3887051

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
function pieChartPadding(element, json) {

    // parse is as a json if necessarily
    var data;
    if(typeof json === String){
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

    var width = 120,
        height = 120,
        marginBottom = 70,
        radius = Math.min(height, width) / 2;

    var arc = d3.svg.arc()
        .innerRadius(radius - 7)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .padAngle(.02);

    var color = d3.scale.category20c();

    var svg = d3.select(element).append("svg")
        .attr("width", width)
        .attr("height", height + marginBottom);

    var pieChart = svg.append("g")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    pieChart.selectAll("path")
        .data(pie(value))
        .enter().append("path")
        .style("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc);


    // legend
    var legend = svg.selectAll(".legend")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(" + Math.round(-width / 2) + "," + (height + 15 + i * 20) + ")";
        });

    legend.append("rect")
        .attr("x", width / 2)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {
            return color(i);
        });

    legend.append("text")
        .attr("x", width / 2 + 15)
        .attr("y", 5)
        .attr("dy", ".35em")
        .text(function (d) {
            return d.metric;
        })
        .classed("text-muted", true)
        .classed("small", true);

    legend.append("text")
        .attr("x", width + 60)
        .attr("y", 5)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function (d) {
            return d.value;
        })
        .classed("text-muted", true)
        .classed("small", true);
}