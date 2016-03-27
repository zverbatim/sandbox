var data = [
    {"id": 1, "name": "snowmen", "price": 123},
    {"id": 2, "name": "shovel", "price": 30},
    {"id": 3, "name": "carrot", "price": 5},
    {"id": 4, "name": "comb", "price": 12}
];

var ProductBox = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },

    filterProduct: function (filterTerm) {
        if (filterTerm) {
            // will search always against the entire set
            var filterData = _.filter(this.props.data, function (productItem) {
                return _.contains(productItem.name + productItem.price, filterTerm)
            });
            this.setState({data: filterData});
        } else {
            // list all product if no search term
            this.setState({data: this.props.data});
        }
    },

    render: function () {
        return (
            <div className="productBox">
                <h1>
                    Product Box
                </h1>
                <ProductForm filterProduct={this.filterProduct}/>
                <ProductList data={this.state.data}/>
            </div>
        )
    }
});

var ProductForm = React.createClass({
    filter: function (e) {
        this.props.filterProduct(e.target.value.trim());
    },
    render: function () {
        return (
            <form className="productForm" onChange={this.filter}>
                <input type="text" placeholder="product filter..."/>
            </form>
        )
    }
});

var ProductList = React.createClass({
    render: function () {
        var productNodes = this.props.data.map(function (product) {
            return (
                <Product product={product}/>
            )
        });
        return (
            <div className="productList">
                {productNodes}
            </div>
        )
    }
});

var Product = React.createClass({
    render: function () {
        return (
            <div className="product">
                {this.props.product.name} - {this.props.product.price}
            </div>
        )
    }
});

ReactDOM.render(
    <ProductBox data={data}/>,
    document.getElementById('content')
);