/**
 * Implementation using react-router {Link} component
 */
import React from "react"
import {Link} from "react-router"

const FilterLink = ({filter, children}) => {
    return (
        <Link
            to={filter === 'all' ? '' : filter}
            activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}
        >
            {children}
        </Link>
    )
}

export default FilterLink