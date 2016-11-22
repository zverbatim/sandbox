
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Working</h1>
                <ReactBootstrap.Button  bsStyle="primary">Primary</ReactBootstrap.Button>
            </div>
        )
    }
}

ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
