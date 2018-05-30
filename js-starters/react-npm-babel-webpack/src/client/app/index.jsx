import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <p> Hello React!</p>
                <Counter count={10}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));