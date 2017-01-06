/**
 * Implementation using react-router {Link} component
 */
import React from "react"
import {Link} from "react-router"
import {ALL} from '../const/index'


const FilterLink = ({filter, children}) => {
    return (
        <Link
            to={filter === ALL ? '' : filter}
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