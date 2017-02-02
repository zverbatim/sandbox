import React from 'react'

const FethError = ({message, onRetry})=>(
    <div>
        <p>Could not fetch todos. {message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
)


export default FethError