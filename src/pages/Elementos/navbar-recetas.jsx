import React, { useState } from 'react';
import { useScroll } from '../useScroll';
import { motion } from 'framer-motion';
import { navAnimation } from '../../animation';

function NavbarRecetas() {


    return (
        <section>
            <div className='py-4'>
                <nav className="navbar navbar-expand-lg sticky-top" id="navbarRecetas" style={{ padding: '20px' }}>
                    <div className="container">
                        <a className="navbar-brand" id="nav-titulo"  >
                            <img src="img/sombrero-de-cocinero.png" id="port" width="35" height="35" />

                        </a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse  " id="navbarNav">
                            <ul className="navbar-nav text">
                                <li className="nav-item ">
                                    <strong><a className="nav-link" style={{ color: " #3a3228" }} id="nav-recetas" href="/HomeLogin">Home</a></strong>
                                </li>

                            </ul>
                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="nav-item px-5">
                                    <a className="nav-link" style={{ color: "#60513f" }} id="nav-recetas" href="/#Home">Volver al portafolio</a>
                                </li>
                                <a className='LogReg' href='./login' type='button'>Inicia Sesión/Registrate</a>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        </section>

    );

}

export default NavbarRecetas;
