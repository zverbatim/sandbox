var App = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data,
            categories: _.chain(data)
                .pluck('category')
                .unique()
                .sortBy()
                .value()
        }
    },

    render: function () {
        return (
            <div className="productApp">
                <h1>Product app</h1>
                <CategoryTags categories={this.props.categories}/>
            </div>
        )
    }
});

var CategoryTags = React.createClass({

    render: function () {
        var categories = this.props.categories.map(function (name) {
            return (
                <Category categoryName={name}/>
            )
        });
        return (
            <div className="categoryTags">
                Categories
                {categories}
            </div>
        )
    }
});

var Category = React.createClass({
    render: function () {
        return (
            <div className="category">
                Category
            </div>
        )
    }
});


var data = [
    {"category": "office", product: "pen", "available": "true"},
    {"category": "office", product: "pencil", "available": "true"},
    {"category": "office", product: "paper", "available": "false"},
    {"category": "car part", product: "engine", "available": "false"},
    {"category": "car part", product: "brakes", "available": "false"},
    {"category": "car part", product: "wheel", "available": "true"},
    {"category": "kitchen", product: "pan", "available": "true"},
    {"category": "kitchen", product: "towel", "available": "true"},
    {"category": "kitchen", product: "soap", "available": "true"}
];

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('content')
);
