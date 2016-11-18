class Items extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);

        // these 2 need the bind so the `setState` is defined when is ran inside the function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // if they are not defined here, then error on rendering
        this.state = {items: [], inputTask: ''}
    }

    handleChange(e) {
        this.setState({inputTask: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = {id: new Date(), text: this.state.inputTask};
        this.setState((prevState)=>({
            items: prevState.items.concat(newItem),
            inputTask: ''
        }))
    }

    render() {
        return (<div>
            <h1>TODO</h1>
            <p>version {this.props.version}</p>
            <Items items={this.state.items}/>
            <form onSubmit={this.handleSubmit}>
                <input name="task" placeholder="..." onChange={this.handleChange} value={this.state.inputTask}/>
                <button type="submit">add task #{this.state.items.length + 1}</button>
            </form>
        </div>)
    }
}

const mountNode = document.getElementById('content');
ReactDOM.render(<App version={1.0}/>, mountNode);