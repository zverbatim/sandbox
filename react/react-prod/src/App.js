import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Footer, TodoForm, TodoList} from "./components/todo";
import {addTodo, deleteTodo, filterTodo, findById, generatedId, toggleTodo, updateTodo} from "./lib/todoHelpers";
import {partial, pipe} from "./lib/utils";
import {createTodo, destroyTodo, loadTodos, saveTodo} from "./lib/todoService";

class App extends Component {
    state = {
        todos: [],
        currentTodo: '',
        errorMessage: ''
    }

    static contextTypes = {
        route: React.PropTypes.string
    }

    handleInputChange = (event) => {
        this.setState({
            currentTodo: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = generatedId()
        const todo = {
            name: this.state.currentTodo,
            isComplete: false,
            id: id
        }

        const updatedTodos = addTodo(this.state.todos, todo)
        this.setState({
            currentTodo: '',
            todos: updatedTodos,
            errorMessage: ''
        })

        createTodo(todo)
            .then(() => this.showTempMessage('Todo Added'))
    }

    showTempMessage = (message) => {
        this.setState({message})
        setTimeout(
            () => this.setState({message: ''}),
            2000
        );
    }

    handledEmptySubmit = (event) => {
        event.preventDefault()
        this.setState({
            errorMessage: 'Provide a valid todo'
        })
    }

    handleToggle = (id) => {
        const getUpdateTodo = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
        const updateTodos = getUpdateTodo(id, this.state.todos)
        this.setState({
            todos: updateTodos
        })
        saveTodo(findById(id, updateTodos))
            .then(()=>{this.showTempMessage('Toggled')})
    }

    handleClick = (id, event) => {
        event.preventDefault()
        const updateTodos = deleteTodo(this.state.todos, id)
        this.setState({
            todos: updateTodos
        })
        destroyTodo(id)
            .then(() => this.showTempMessage('Todo deleted'))

    }

    componentDidMount() {
        loadTodos()
            .then(todos => this.setState({todos}))
    }

    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handledEmptySubmit
        const displayTodos = filterTodo(this.state.todos, this.context.route)

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Todo app</h2>
                </div>

                <div className="Todo-App">

                    {this.state.errorMessage ? <span className="error">{this.state.errorMessage}</span> : ''}
                    {this.state.message ? <span className="success">{this.state.message}</span> : ''}

                    <TodoForm
                        handleInputChange={this.handleInputChange}
                        currentTodo={this.state.currentTodo}
                        handleSubmit={submitHandler}
                    />
                    <TodoList
                        todos={displayTodos}
                        handleToggle={this.handleToggle}
                        handleClick={this.handleClick}
                    />

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
