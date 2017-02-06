import React from 'react'
import {Link} from '../router'

export const Footer = () =>(
    <div className="Footer">
        <Link to="/all">all</Link>
        <Link to="/active">active</Link>
        <Link to="/complete">complete</Link>
    </div>

)