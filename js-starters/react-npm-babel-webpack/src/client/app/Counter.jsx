import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: this.props.count};
        this.addClick = this.addClick.bind(this);
    }

    addClick() {
        this.setState((prevState)=> {
            count: prevState.count++
        });
    }

    render() {
        return (
            <div>
                Counter : <span>{this.state.count}</span>
                <div>
                    <button onClick={this.addClick}>Counter</button>
                </div>
            </div>
        );
    }

}