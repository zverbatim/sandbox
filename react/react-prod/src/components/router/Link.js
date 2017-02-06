import React, {Component} from "react";

export class Link extends Component {


    handleClick = (event) => {
        event.preventDefault()
        this.context.linkHandler(this.props.to)
    }

    static contextTypes = {
        route: React.PropTypes.string,
        linkHandler: React.PropTypes.func
    }

    render() {
        const active = this.context.route === this.props.to ? 'active' : ''
        return (
            <a
                href="#"
                onClick={this.handleClick}
                className={active}>
                {this.props.children}
            </a>
        )
    }
}