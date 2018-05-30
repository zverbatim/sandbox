/**
 *  A modification of: http://bl.ocks.org/mbostock/6452972#index.html
 *
 */


function d3Slider(inputSelector, sliderSelector, defaultSliderValue, maxSliderValue) {


    maxSliderValue = maxSliderValue ? maxSliderValue : 360;
    defaultSliderValue = defaultSliderValue ? defaultSliderValue : 60;

    // interaction between handler and input field
    var inputForSlider = $(inputSelector);
    inputForSlider
        .on("focus", function () {
            // clear the value
            this.value = '';
        })
        .on("input", function () {

            // sanity check on input
            if (isNaN(this.value)) {
                this.value = 0;
            } else if (+this.value > maxSliderValue) {
                this.value = maxSliderValue;
            }

            // update handle position
            slider
                .transition()
                .duration(500)
                .call(brush.extent([+this.value, +this.value]))
                .call(brush.event);
        });

    // build the slider
    var width = parseInt(d3.select(sliderSelector).style("width")),
        height = parseInt(d3.select(inputSelector).style("height"));

    var x = d3.scale.linear()
        .domain([0, maxSliderValue])
        .range([10, width - 10])
        .clamp(true);

    var brush = d3.svg.brush()
        .x(x)
        .extent([0, 0])
        .on("brush", brushed);

    var svg = d3.select(sliderSelector).append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("class", "x d3-slider-axis")
        .attr("transform", "translate(0," + height / 2 + ")")
        .call(d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickFormat("")
            .tickSize(0, 0, 0))
        .select(".domain")
        .select(function () {
            return this.parentNode.appendChild(this.cloneNode(true));
        })
        .attr("class", "d3-slider-halo");

    var slider = svg.append("g")
        .attr("class", "d3-slider-slider")
        .call(brush);

    slider.selectAll(".extent,.resize")
        .remove();

    slider.select(".background")
        .attr("height", height);

    var handle = slider.append("circle")
        .attr("class", "d3-slider-handle")
        .attr("transform", "translate(0," + height / 2 + ")")
        .attr("r", 9);

    slider
        .call(brush.event)
        .transition() // gratuitous intro!
        .duration(500)
        .call(brush.extent([defaultSliderValue, defaultSliderValue]))
        .call(brush.event);

    function brushed() {
        var value = brush.extent()[0];

        if (d3.event.sourceEvent) { // not a programmatic event
            value = x.invert(d3.mouse(this)[0]);
            brush.extent([value, value]);
        }

        handle.attr("cx", x(value));
        if (!(inputForSlider.is(":focus"))) {
            inputForSlider.attr('value', Math.round(value));
        }
    }
}
