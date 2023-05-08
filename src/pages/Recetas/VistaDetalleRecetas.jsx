import React from 'react';
import NavbarUsuario from './Navs/navbarUsuario';
import PropTypes from 'prop-types'
import { RecetasC } from '../../models/recetas.class';
import { useLocation } from 'react-router-dom';

const DetalleRecetas = () => {
    const location = useLocation();
    const { rec } = location.state;
    
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (
        <section>
            <NavbarUsuario />


            <div className='container mx-auto py-4'>
                <div>
                    <div>
                        <p className='py-4'>{rec.nombre}</p>
                    </div>
                </div>
            </div >
        </section>
    );
}


export default DetalleRecetas;
