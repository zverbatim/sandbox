import React from 'react'

const Link = ({
    current,
    onClick,
    count,
    children
}) => {

    if (current) {
        return <span>{children} [{count}]</span>
    }
    else {
        return (
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    onClick()
                }}
            >
                {children} [{count}]
            </a>
        )
    }
};

export default Link;