import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/Root";
import configureStore from '../src/util/configureStore';
const store = configureStore();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Root store={store}/>,
        div
    );
});
