
import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'
const App = ({params}) => (
    <div>
        <Header />
        <AddTodo />
        <VisibleTodos />
    </div>
);

export default App;
