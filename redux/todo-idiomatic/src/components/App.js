
import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'
import {ALL} from '../const/index'
const App = ({params}) => (
    <div>
        <Header />
        <AddTodo />
        <VisibleTodos
            filter={params.filter || ALL}
        />
    </div>
);

export default App;
