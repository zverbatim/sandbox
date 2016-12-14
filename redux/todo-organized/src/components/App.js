
import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'

const App = () => (
    <div>
        <Header />
        <AddTodo />
        <VisibleTodos />
    </div>
);

export default App;
