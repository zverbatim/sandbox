# learnd3
Tuts and sanbox

## Sources:
Great resources used:
* http://alignedleft.com/tutorials/d3
* "Create Web Charts with D3" by: Fabio Nelli

## Notes

### Binding
* `.attr()` used for HTML kvp: class, id, src, width, height
* `.style()` used to directly apply a CSS property to a HTML element
* `.classed("bar", true)` to quick remove a a class
* `.html()` replaces the selection `d3.select('p').html("<h1>New Paragraph</h1>");`
* `.insert()` places at the beginning whiele `.append()` at the end

### SVG
> D3 is most useful when used to generate and manipulate visuals as SVGs. Drawing with divs and other native HTML elements is possible, but a bit clunky and subject to the usual inconsistencies across different browsers. Using SVG is more reliable, visually consistent, and faster.
> -[Scott Murray](http://alignedleft.com/tutorials/d3/an-svg-primer)

#### Transformation
* `translate(x,y)` amount of pixels the svg will be moved
* `scale(x,y)` magnify/minify on x and y axis in times
* `rotate(a, x,y)` a - is the angle, x & y the center of the rotation

### Scales
> Input! Domain!
> Output! Range!
> Input! Domain!
> Output! Range!
> -[Scott Murray](http://alignedleft.com/tutorials/d3/scales)

```
var scale = d3.scale.linear()
                    .domain([100,500])
                    .range([10,350]);
```

### Transition
Key ones are these:
* `transition()` - starts it
* `delay()` - in ms
* `duration()` - in ms

The in chain can be passed `.attr()`