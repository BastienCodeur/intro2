import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">Around the world - DAFT PUNK 🤖🤖  </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pays">Pays</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inscription</a>
                    </li>
                    <li className="nav-item ml-1">
                        <a className="btn btn-success" href="#">Connexion</a>
                    </li>
                    <li className="nav-item ml-1">
                        <a className="btn btn-danger " href="#">Deconnexion</a>
                    </li>
                </ul>

            </div>
        </nav>

    );
}

export default NavBar;