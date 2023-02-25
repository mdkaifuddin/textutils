import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="https://mdkaifuddin.github.io/textutils//" className="navbar-brand">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="https://mdkaifuddin.github.io/textutils//" className="nav-link"> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="https://mdkaifuddin.github.io/textutils/about" className="nav-link" >{props.about}</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
Navbar.prototypes = {
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title: 'not title',
    about: 'set about text'
}
