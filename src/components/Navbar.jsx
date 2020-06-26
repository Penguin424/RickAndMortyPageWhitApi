import React from 'react';
import { Link } from 'react-router-dom';

import rickandmorty from '../assets/img/Rick_and_Morty.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                   
                </Link>
                <img src={rickandmorty} alt="Logo-page" width="150px"/>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav mr-5 ml-auto text-center">
                        <Link className="nav-item nav-link">Episodios</Link>
                        <Link className="nav-item nav-link">Personajes</Link>
                        <Link className="nav-item nav-link">Locaciones</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;