import React from 'react';
import NavbarUsuario from '../Navs/navbarUsuario';
import VistaCards from '../VistaCards';

const HomeUsuario = () => {


    const nombreUsuario = localStorage.getItem("nombreUsuario");
    {/* <h1 className="text-focus-in titulo-inicio py-4">Bienvenido! {nombreUsuario}</h1> */ }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (

        <section id='homeRecetas'>

            <NavbarUsuario />

            <VistaCards />
        </section>
    );
}


export default HomeUsuario;
