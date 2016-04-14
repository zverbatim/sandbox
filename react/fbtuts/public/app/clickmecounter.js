var ClickApp = React.createClass({

    getInitialState: function () {
        return {
            count: 0,
            timePassed: 0
        }
    },

    handleClick: function () {
        this.setState({
            count: ++this.state.count
        })
    },

    tick: function() {
        console.log("tick");
        this.setState({
            timePassed: ++this.state.timePassed
        })
    },

    componentDidMount: function(){
        console.log("didMount");

        this.interval = setInterval(this.tick, 1000)
    },

    componentWillMount: function(){
        console.log("willMount");
        clearInterval(this.interval)
    },

    render: function () {
        return (
            <div className="counterApp">
                <button onClick={this.handleClick}>Click me :)</button>
                <p>Clicked {this.state.count}</p>
                <p>Time passed {this.state.timePassed}</p>
            </div>
        )
    }
});

var mountNode = document.getElementById('content');
ReactDOM.render(
    <ClickApp/>,
    mountNode
);