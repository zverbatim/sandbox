var data = [
    {"id": 1, "name": "snowmen", "price": 123, "available": "true"},
    {"id": 2, "name": "shovel", "price": 30, "available": "false"},
    {"id": 3, "name": "carrot", "price": 5, "available": "false"},
    {"id": 4, "name": "comb", "price": 12, "available": "true"}
];

var ProductBox = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },

    filterText: function (filterTerm) {
        if (filterTerm) {
            return _.filter(this.state.data, function (productItem) {
                var allStrings = (productItem.name + productItem.price).toLowerCase();
                return allStrings.search(filterTerm.toLowerCase()) >= 0;
            })
        } else {
            // if empty string list all data
            return this.props.data
        }
    },

    filterCheckBox: function (filterTerm) {
        if (filterTerm) {
            return _.filter(this.state.data, function (productItem) {
                return productItem.available === "true"
            });
        } else {
            //if not checked all data
            return this.props.data
        }
    },

    filterProduct: function (event) {
        var filterData = [];
        if (event.target.type == "text") {
            filterData = this.filterText(event.target.value);
        } else if (event.target.type == "checkbox") {
            filterData = this.filterCheckBox(event.target.checked);
        }

        this.setState({data: filterData});
        console.log("---");
        console.log(filterData);
    },

    render: function () {
        return (
            <div className="productBox">
                <h1> Product Box </h1>
                <ProductForm filterProduct={this.filterProduct}/>
                <ProductList data={this.state.data}/>
            </div>
        )
    }
});

var ProductForm = React.createClass({
    filter: function (e) {
        this.props.filterProduct(e)
    },
    render: function () {
        return (
            <form className="productForm" onChange={this.filter}>
                <input type="text" placeholder="product filter..."/>
                <input type="checkbox"/>available
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
                <table>
                    <thead>
                    <th>name</th>
                    <th>price</th>
                    <th>available</th>
                    </thead>
                    <tbody>
                    {productNodes}
                    </tbody>
                </table>
            </div>
        )
    }
});

var Product = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.available}</td>
            </tr>
        )
    }
});

ReactDOM.render(
    <ProductBox data={data}/>,
    document.getElementById('content')
);