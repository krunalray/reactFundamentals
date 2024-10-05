import React from 'react'
import { Link } from "@reach/router";
import BackButton from '../components/back';
export default function Header() {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <Link className="navbar-brand" to="/">Digital Dixit Official</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>

            </div>
            <div className="float-right">
                <BackButton />
            </div>
        </nav>

    )
}
