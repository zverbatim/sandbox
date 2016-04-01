var CommComponents = React.createClass({
    getInitialState: function () {
        return {
            id: 0,
            clickData: []
        }
    },

    handleClick: function (item, i) {
        var tempData = this.state.clickData.concat([{
            id: ++this.state.id,
            i: i,
            state: item.state,
            sales: item.sales
        }]);

        this.setState({
            clickData: tempData
        });
    },

    render: function () {
        return (
            <div>
                <List data={this.props.data}
                      handleClick={this.handleClick}/>
                <ClickList data={this.state.clickData}/>
            </div>
        )
    }
});

var List = React.createClass({
    handleClick: function (item, i) {
        this.props.handleClick(item, i);
    },

    render: function () {
        var list = this.props.data.map(function (item, i) {
            var boundClick = this.handleClick.bind(this, item, i);

            return (
                <Item key={i}
                      state={item.state}
                      sales={item.sales}
                      onClick={boundClick}>
                </Item>
            )
        }, this);

        return (
            <div className="commList">
                <strong> sales by state (click them)</strong>
                {list}
            </div>
        )
    }
});

var Item = React.createClass({
    render: function () {
        return (
            <div>
                <p onClick={this.props.onClick}>
                    {this.props.state} ~ {this.props.sales}
                </p>
            </div>
        )
    }
});

var ClickList = React.createClass({
    render: function () {
        var createItem = function (item) {
            return <li key={item.id}>
                {item.id} | {item.state} | {item.sales}
            </li>;
        };
        return <ul>{this.props.data.map(createItem)}</ul>;
    }
});


var data = [
    {"state": "alabama", "sales": 200},
    {"state": "iowa", "sales": 300}
];

ReactDOM.render(
    <CommComponents data={data}/>
    ,
    document.getElementById('content')
);