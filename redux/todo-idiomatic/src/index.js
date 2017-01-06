import React from "react";
import {render} from "react-dom";
import Root from "./components/Root";
import configureStore from "./util/configureStore";
import {fetchTodos} from "./api/index";

fetchTodos('all').then((todos) => console.log(todos))

const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('root')
);