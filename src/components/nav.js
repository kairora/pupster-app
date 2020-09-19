import React from "react";
import { Link }  from "react-router-dom";

export default function() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">Pupster Nav</Link>

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/discover">Discover</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                    </ul>
            </nav>

        </>
    )
}