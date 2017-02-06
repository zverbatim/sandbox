import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {TodoForm, TodoList, Footer} from "./components/todo";
import {addTodo, findById, generatedId, toggleTodo, updateTodo, deleteTodo, filterTodo} from "./lib/todoHelpers";
import {partial, pipe} from "./lib/utils";

class App extends Component {
    state = {
        todos: [
            {id: 1, name: 'aloha', isComplete: true},
            {id: 2, name: 'hello', isComplete: false},
            {id: 3, name: 'buna ziua', isComplete: false}
        ],
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
    }

    handleClick = (id) => {
        const updateTodos = deleteTodo(this.state.todos, id)
        this.setState({
            todos: updateTodos
        })
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
                    {this.state.errorMessage ? <span className="red">{this.state.errorMessage}</span> : ''}
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
