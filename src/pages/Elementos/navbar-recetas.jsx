import React, { useState } from 'react';
import { useScroll } from '../useScroll';
import { motion } from 'framer-motion';
import { navAnimation } from '../../animation';

function NavbarRecetas() {
    

    return (
        <nav className="navbar navbar-expand-lg sticky-top" id="contenido" style={{ backgroundColor: "white" }}>
            <div className="container">
                <a className="navbar-brand" id="nav-titulo" style={{ color: "black" }} >
                    <img src="img/sombrero-de-cocinero.png" id="port" width="35" height="35" />

                </a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="  collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav text">
                        <li className="nav-item ">
                            <a className="nav-link" style={{ color: "black" }} id="nav-recetas" href="/recetas">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" style={{ color: "black" }} id="nav-recetas" href="/#Home">Portafolio</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                    </ul>
                    <a className='LogReg' href='./HomeLogin' type='button'>Inicia Sesión/Registrate</a>
                </div>
            </div>
        </nav>
    );

}

export default NavbarRecetas;
