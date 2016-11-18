const tableData = {
    header: ['#', 'name'],
    data: [
        [0, 'boo'],
        [1, 'foo']
    ]
};


var App = React.createClass({
    render: function () {
        return (
            <ReactBootstrap.Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>{this.props.tableData.header[0]}</th>
                    <th>{this.props.tableData.header[1]}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.tableData.data[0]}</td>
                    <td>{this.props.tableData.data[1]}</td>
                </tr>
                </tbody>
            </ReactBootstrap.Table>
        )
    }
});

var mountNode = document.getElementById('content');
ReactDOM.render(<App tableData={tableData}/>, mountNode);