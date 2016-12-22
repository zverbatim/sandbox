import React, {PropTypes} from "react";
import { Provider } from 'react-redux'
import {Route, Router, browserHistory} from 'react-router';
import App from './App'

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
            </Router>
        </Provider>
    )
};

Root.propTypes={
    store: PropTypes.object.isRequired
};

export default Root;
