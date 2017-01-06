import React from 'react'
import FilterLink from'../containers/FilterLink'
import {ALL, ACTIVE, COMPLETED} from '../const/index'


const Header = () => {
    return (
        <p>
            <FilterLink
                filter={ALL}
            >
                All
            </FilterLink>
            {' '}
            <FilterLink
                filter={ACTIVE}
            >
                Active
            </FilterLink>
            {' '}
            <FilterLink
                filter={COMPLETED}
                >
                Completed
            </FilterLink>
            {' '}
        </p>
    )
};

export default Header;