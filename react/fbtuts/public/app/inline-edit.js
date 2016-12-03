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
            data: props.data,
            indexOfEditing: props.indexOfEditing
        };
        this.editElement = this.editElement.bind(this);
        this.saveElement = this.saveElement.bind(this);
    }

    editElement(index) {
        this.setState({
            indexOfEditing: index
        });
    };

    saveElement(modifiedValue, index) {
        console.log(modifiedValue, "", index)
        this.setState((prev) => ({
            data: prev.data.map((v, i)=>{
                return i === index ? modifiedValue : v;
            })
        }))
    };

    render() {
        const indexOfEditing = this.state.indexOfEditing;
        const editElement = this.editElement;
        const saveElement = this.saveElement;
        const edits = this.state.data.map(function (it, i) {
            return <InlineEdit text={it} index={i} key={i} editing={indexOfEditing === i}
                               editElement={editElement}
                               saveElement={saveElement}/>
        });

        return (
            <div> {edits} </div>
        );
    }
}

class InlineEdit extends React.Component {
    constructor(props) {
        super(props);

        this.keyAction = this.keyAction.bind(this);
        this.render = this.render.bind(this);
        this.onDoubleClickEdit = this.onDoubleClickEdit.bind(this);

    }

    onDoubleClickEdit() {
        let i = this.props.index;
        console.log(i)
        this.props.editElement(i)
    }

    keyAction(e) {
        console.log(e.target.value)
        if (e.keyCode === 13) {
            // Enter to save
            this.props.editElement(-1);
            this.props.saveElement(e.target.value, this.props.index)
        } else if (e.keyCode === 27) {
            // ESC to cancel
            this.props.editElement(-1);
        }
    };

    renderElement() {
        let renderContent = "";
        if (this.props.editing) {
            renderContent = (
                <div>
                    <input
                        type="text"
                        onKeyDown={this.keyAction}
                        defaultValue={this.props.text}
                        ref="textField"/>
                </div>
            );
        } else {
            renderContent = (
                <div onDoubleClick={this.onDoubleClickEdit}>
                    {this.props.text}
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
ReactDOM.render(<InlineContainer data={data} indexOfEditing={0}/>, mountNode);
