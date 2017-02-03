import React from "react";
import {partial} from "../../lib/utils";

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)
    const handleClick = partial(props.handleClick, props.id)

    return (
        <li>
            <span className="delete-item">
                <a href="#"
                   onClick={handleClick}
                >
                    X
                </a>
            </span>
            <input
                type="checkbox"
                checked={props.isComplete}
                onChange={handleToggle}
            />
            {props.name}
        </li>
    )
}


TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired,
    handleToggle: React.PropTypes.func.isRequired
}