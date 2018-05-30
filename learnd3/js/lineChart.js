/**
 * tutorial from:
 * https://www.safaribooksonline.com/blog/2014/02/17/building-responsible-visualizations-d3-js/
 */


/**
 * Draw a responsive line chart
 *
 * @param element = where the chart will be placed
 * @param dataSet = [
 {
     "date": "2015-10-11",
     "close": 20
 }, ..
 ];
 * @param dateTimeFormat d3 standart for parsing string to date
 *
 */
function lineChart(element, dataSet, dateTimeFormat) {

    // parse is as a json if necessarily
    var data;
    if (typeof dataSet === String) {
        data = JSON.parse(dataSet);
    } else {
        data = dataSet;
    }

    // parse dates so d3 can support
    data.forEach(function (d) {
        d.date = d3.time.format(dateTimeFormat).parse(d.date);
        d.close = +d.close;
    });

    var margin = {top: 30, right: 40, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // xScale can be niced with .nice(d3.time.year)
    var xScale = d3.time.scale()
        .domain(d3.extent(data, function (d) {
            console.log(d.date);
            return d.date;
        }))
        .range([0, width])
        .nice();

    var yScale = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
            return d.close
        }))
        .range([height, 0])
        .nice();

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var line = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.close);
        });

    var graph = d3.select(element)
        .attr("width", width + margin.left + margin.top)
        .attr("height", height + margin.bottom + margin.top)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    graph.append("g")
        .attr("class", "x d3-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    graph.append("g")
        .attr("class", "y d3-axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

    // display the line but filtering the data relative
    // to the svg size.
    var dataPerPixel = data.length / width;
    var dataResampled = data.filter(
        function (d, i) {
            return i % Math.ceil(dataPerPixel) == 0;
        }
    );

    graph.append("path")
        .datum(dataResampled)
        .attr("class", "d3-line")
        .attr("d", line);

    // mark the last and first record that will be
    // initially hidden than displayed if screen small
    var firstRecord = data[data.length - 1],
        lastRecord = data[0];

    var first = graph.append("g")
        .attr("class", "d3-first-record")
        .style("display", "none");

    first.append("text")
        .attr("x", -8)
        .attr("y", 4)
        .attr("text-anchor", "end")
        .text("$" + firstRecord.close);
    first.append("circle")
        .attr("r", 4);


    var last = graph.append("g")
        .attr("class", "d3-last-record")
        .style("display", "none");

    last.append("text")
        .attr("x", 8)
        .attr("y", 4)
        .text("$" + lastRecord.close);
    last.append("circle")
        .attr("r", 4);


    function resize() {
        var width = parseInt(d3.select(element).style("width")) - margin.left - margin.right,
            height = parseInt(d3.select(element).style("height")) - margin.top - margin.bottom;

        /* Update the range of the scale with new width/height */
        xScale.range([0, width]).nice();
        yScale.range([height, 0]).nice();

        /* change the tick - one for every 50 pixel*/
        xAxis.ticks(Math.max(width / 50, 2));
        yAxis.ticks(Math.max(height / 50, 2));


        /* Update the axis with the new scale */
        graph.select('.x.d3-axis')
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        graph.select('.y.d3-axis')
            .call(yAxis);

        /* Force D3 to recalculate and update the line */
        graph.selectAll('.d3-line')
            .attr("d", line);


        // xAxis responsive
        if (width < 300) {
            graph.select('.x.d3-axis').style("display", "none");
        } else {
            graph.select('.x.d3-axis').style("display", "initial");
        }

        // yAxis responsive
        if (height < 150) {
            graph.select('.y.d3-axis').style("display", "none");
        } else {
            graph.select('.y.d3-axis').style("display", "initial");
        }

        // show/hide first & last record
        if (width < 300 && height < 200) {
            graph.select(".d3-first-record")
                .attr("transform", "translate(" + xScale(firstRecord.date) + "," + yScale(firstRecord.close) + ")")
                .style("display", "initial");

            graph.select(".d3-last-record")
                .attr("transform", "translate(" + xScale(lastRecord.date) + "," + yScale(lastRecord.close) + ")")
                .style("display", "initial");

        } else {
            graph.select('.d3-last-record')
                .style("display", "none");
            graph.select('.d3-first-record')
                .style("display", "none");
        }
    }

    // the page can have multiple charts so
    // by having 'resize.bar', 'resize.foo' multiple elements can be resized
    d3.select(window).on('resize.' + element, resize);

    resize();
}

