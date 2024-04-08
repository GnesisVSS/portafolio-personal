import React from 'react';
import NavbarRecetas from '../ElementosRecetas/Navs/navbar-recetas';
import VistaCards from '../VistaCards';

const HomeUsuario = () => {


    const nombreUsuario = localStorage.getItem("nombreUsuario");
    {/* <h1 className="text-focus-in titulo-inicio py-4">Bienvenido! {nombreUsuario}</h1> */ }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (

        <section id='homeRecetas'>

            {/* <NavbarUsuario /> */}
            <NavbarRecetas></NavbarRecetas>
            <VistaCards />
        </section>
    );
}


export default HomeUsuario;
