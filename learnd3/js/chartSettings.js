// Luxemburg GDP per capita 2010-2013
// http://data.worldbank.org/indicator/NY.GDP.PCAP.CD/countries?order=wbapi_data_value_2013%20wbapi_data_value%20wbapi_data_value-last&sort=desc&display=default


function lineChart(data, selector) {

    var margin = {
            top: 50,
            right: 20,
            bottom: 30,
            left: 50
        },
        w = 400 - margin.left - margin.right,
        h = 400 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%Y").parse;

    data.forEach(function(d){
        d.year = parseDate(d.year.toString());
    });

    var xScale = d3.time.scale()
        .domain([d3.min(data, function (d) {
            return d.year
        }), d3.max(data, function (d) {
            return d.year
        })])
        .range([0, w]);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(data, function (d) {
            return d.gdp
        })])
        .range([h, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(4);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(7);

    var svg = d3.select(selector).append("svg")
        .attr("width", w + margin.left + margin.right)
        .attr("height", h + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // the "godfather"

    svg.append("g")
        .attr("class", "x d3-axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y d3-axis")
        .call(yAxis);

    var line = d3.svg.line()
        .x(function (d) {
            return xScale(d.year)
        })
        .y(function (d) {
            return yScale(d.gdp)
        });

    svg.append("path")
        .datum(data)
        .attr("class", "d3-line")
        .attr("d", line);

    var labels = svg.append("g")
        .attr("class", "d3-labels")

    labels.append("text")
        .attr("x", w / 2)
        .attr("y", h + margin.bottom / 1.25)
        .text("Year")
        .attr("class", "d3-label");

    labels.append("text")
        //.attr("transform", "rotate(-90)")
        .attr("y", h / 2.5)
        .attr("x", -margin.left)
        .text("GDP")
        .attr("class", "d3-label");

    svg.selectAll(".mark")
        .data(data)
        .enter().append("circle")
        .attr("class", "d3-mark")
        .attr("r", 3.5)
        .attr("cx", function (d) {
            return xScale(d.year);
        })
        .attr("cy", function (d) {
            return yScale(d.gdp);
        });
}

