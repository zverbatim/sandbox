import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <p>Working</p>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));