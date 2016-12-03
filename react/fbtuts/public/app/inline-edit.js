let data = [
    "Hello world",
    "Hello planet",
    "Hello universe",
    "Input here text"
];

class InlineContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return(
            <div>
                <InlineEdit text={this.state.data[0]} index={0}/>
                <InlineEdit text={this.state.data[1]} index={1}/>
                <InlineEdit text={this.state.data[2]} index={2}/>
                <InlineEdit text={this.state.data[3]} editing={true} index={3}/>
            </div>
        );
    }
}

class InlineEdit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editing: props.editing,
            text: props.text
        };


        this.editElement = this.editElement.bind(this);
        this.keyAction = this.keyAction.bind(this);
        this.render = this.render.bind(this);
    }

    editElement(index) {
        this.setState({editing: true}, function() {
             //Focus and select all text
            $(this.refs.textField.getDOMNode()).select();
        });
    };

    keyAction(e) {
        console.log(e.keyCode)
        if(e.keyCode === 13) {
            // Enter to save
            this.setState({text: e.target.value, editing: false});
        } else if(e.keyCode === 27) {
            // ESC to cancel
            this.setState({editing: false});
        }
    };

    renderElement(){
        let renderContent = "";
        if(this.state.editing) {
            renderContent = (
                <div>
                    <input
                        type="text"
                        onKeyDown={this.keyAction}
                        defaultValue={this.state.text}
                        ref="textField" />
                </div>
            );
        } else {
            renderContent = (
                <div onDoubleClick={this.editElement}>
                    {this.state.text}
                </div>
            );
        }
        return renderContent;
    };

    render() {
        return this.renderElement();
    }
}

// entry point
var mountNode = document.getElementById('content');
ReactDOM.render(<InlineContainer data={data}/>, mountNode);
