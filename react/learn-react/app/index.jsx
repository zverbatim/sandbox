import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <h1>Hello world!</h1>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));