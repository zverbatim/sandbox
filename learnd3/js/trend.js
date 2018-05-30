/**
 * Build a trend widget
 *
 * sources:
 * http://bl.ocks.org/mbostock/7328809
 * http://bl.ocks.org/mbostock/3883245
 *
 * @param element = where it will be placed
 * @param var data = [
 {
     "date": "2015-01-10",
     "metric": "Metric A",
     "value": 20000
 },
 {
     "date": "2015-01-11",
     "metric": "Metric A",
     "value": 20000
 },
 {
     "date": "2015-01-12",
     "metric": "Metric A",
     "value": 1000
 },
 {
     "date": "2015-01-13",
     "metric": "Metric A",
     "value": 2000
 },
 {
     "date": "2015-01-14",
     "metric": "Metric A",
     "value": 4000
 },
 {
     "date": "2015-01-15",
     "metric": "Metric A",
     "value": 15000
 }
 ];
 */
function trend(element, data) {


    // sort by date
    data.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }

        if (a.date < b.date) {
            return -1;
        }

        return 0;
    });


    var parseDate = d3.time.format("%d-%b-%y").parse;

    // extract the values and the labels
    var date = [],
        label = [],
        value = [];
    data.forEach(function (element) {
        date.push(parseDate(element.date))
    });
    data.forEach(function (element) {
        label.push(element.metric)
    });
    data.forEach(function (element) {
        value.push(element.value)
    });


    var margin = {top: 40, right: 40, bottom: 30, left: 50},
        width = 400,
        height = 200;

    var x = d3.scale.linear()
        .domain([0, data.length])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, d3.max(value)])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });

    var svg = d3.select(element)
        .append("svg")
        .attr("height", height + margin.left + margin.right)
        .attr("width", width + margin.top + margin.bottom);

    var chart = svg.append("g")
        .attr("height", height)
        .attr("width", width)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var xAxisLine = svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + margin.left + ","+ height + ")")
        .call(xAxis);

    var yAxisLine = svg.append("g")
        .attr("transform", "translate(" + margin.left + ",0)")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")

        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Y");
    //
    //
    //
    //var section = chart.selectAll(".section")
    //    .data(data)
    //    .enter()
    //    .append("g")
    //    .attr("class", "section")
    //    .attr("transform", function (d, i) {
    //        return "translate(0," + (i * sectionHeight) + ")";
    //    });
    //
    ////lines
    //section.append("rect")
    //    .attr("y", Math.round(barHeight / 2) - 0.5)
    //    .attr("height", 1)
    //    .attr("width", 120)
    //    .attr("fill", "#efefef");
    //
    //// bar
    //section.append("rect")
    //    .attr("height", barHeight)
    //    .attr("width", function (d) {
    //        return x(d.value);
    //    })
    //    .attr("fill", "rgb(66, 139, 202)");
    //
    //// label
    //section.append("text")
    //    .attr("y", barHeight + 10)
    //    .attr("dy", ".35em")
    //    .text(function (d) {
    //        return d.metric;
    //    })
    //    .classed("text-muted", true)
    //    .classed("small", true);
    //
    //// metric values
    //section.append("text")
    //    .attr("x", width)
    //    .attr("y", barHeight + 10)
    //    .attr("dy", ".35em")
    //    .style("text-anchor", "end")
    //    .text(function (d) {
    //        return d.value;
    //    })
    //    .classed("text-muted", true)
    //    .classed("small", true);
}