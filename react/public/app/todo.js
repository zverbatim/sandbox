var ToDoApp = React.createClass({
        getInitialState: function () {
            return {
                // pass the props and set the done status as false
                data: this.props.data.map(function (data) {
                    data.done = false;
                    return data;
                })
            }
        },

        deleteToDo: function (toDo, i) {
            this.setState({
                data: _.filter(this.state.data, function (item) {
                    return item.name != toDo.name
                })
            })
        },

        doneToDo: function (toDo, i) {
            var done = !this.state.data[i].done;
            this.state.data[i].done = done;
            this.setState({
                data: this.state.data
            })
        },

        addToDo: function (toDo) {

            // check that to do has not been added before
            var checkToDoKeyIntegrity = _.some(this.state.data, function (d) {
                return d.name == toDo;
            });

            if (!checkToDoKeyIntegrity) {
                var toDoObj = {
                    "name": toDo,
                    "date": new Date()
                };

                this.setState({
                    data: this.state.data.concat([toDoObj])
                });
            } else {
                console.debug("todo: " + toDo + " already in the list");
            }
        }
        ,

        render: function () {

            return (
                <div className="todoApp">
                    <h1>To do app</h1>
                    <ToDoInput addToDo={this.addToDo}/>
                    <ToDoList data={this.state.data}
                              deleteToDo={this.deleteToDo}
                              doneToDo={this.doneToDo}
                    />
                </div>
            )
        }
    })
    ;

var ToDoInput = React.createClass({

    getInitialState: function () {
        return ({
            toDo: ""
        })
    },

    handleChange: function (e) {
        this.setState({
            toDo: e.target.value
        });
    },

    handleSubmit: function (e) {
        e.preventDefault();
        if (this.state.toDo.length > 0) {
            this.props.addToDo(this.state.toDo);
            this.setState({
                toDo: ""
            })
        } else {
            console.debug("todo is empty")
        }
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="... "
                       onChange={this.handleChange}
                       value={this.state.toDo}/>
                <input type="submit" value="add to do"/>
            </form>
        )
    }
});

var ToDoList = React.createClass({
    deleteToDo: function (toDo, i) {
        this.props.deleteToDo(toDo, i);
    },

    doneToDo: function (toDo, i) {
        this.props.doneToDo(toDo, i);
    },

    render: function () {
        var toDoList = this.props.data.map(function (toDo, i) {

                var bindDeleteClick = this.deleteToDo.bind(this, toDo, i);
                var bindDoneClick = this.doneToDo.bind(this, toDo, i);

                return (
                    <ul className="toDo" key={i}>
                        <li style={toDo.done ? {"textDecoration": "line-through"}: {"textDecoration": "none"}}>
                            {toDo.name}
                            | <a href="#" onClick={bindDeleteClick}> delete </a>
                            | <a href="#" onClick={bindDoneClick}> done </a>
                        </li>
                    </ul>
                );
            }
            , this
        );
        return (
            <div className="todoList">
                {toDoList}
            </div>
        )
    }
});

// initial data to tests the rendering
var data = [
    {"name": "learn react", "date": new Date()},
    {"name": "buy coffee", "date": new Date()}
];

// entry point
var mountNode = document.getElementById('content');
ReactDOM.render(<ToDoApp data={data}/>, mountNode);
