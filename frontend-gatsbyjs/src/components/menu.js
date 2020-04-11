import React from "react" 
import { Link } from "gatsby"

const ListLink = props => (
    <li style={ { display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ( { children } ) => (
    <ul>
        <ListLink to="/">Home </ListLink>
        <ListLink to="/about/"> About Us< /ListLink>
        <ListLink to="/contact"> Contact Us </ListLink>
    </ul>
)