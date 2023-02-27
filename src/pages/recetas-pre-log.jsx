import React from 'react';
import NavbarRecetas from './navbar-recetas';

const RecetasPreLog = () => {

    const estilo1 = {
        color: '#F9A826'
    }


    const estilo3 = {
        textAlign: 'center'
    }

    const estilo4 = {
        height: '578px',
        width: '578px'
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";
    
    return (
        
        <section id='rec-log'>
        <NavbarRecetas/>
            <div className="container col-sm-12 py-5 mx-auto">
                <div className="row justify-content-center py-5">

                    <div className="col-sm-8 col-md-4 align-self-center">
                        <h1 className="text-focus-in titulo-inicio" style={estilo1}>Bienvenido(a)!</h1>
                        <p>
                            Recetas dulces, saladas, saludables, para todos los gustos! Accede a estas y más recetas
                            iniciando sesión, si no tienes una cuenta puedes registrarte gratis, para acceder al listado
                            completo de
                            resetas que tenemos para ti. Además tambien puedes crear tus propias recetas y guardarlas
                            junto a las que te entregamos
                            para tener una mayor variedad.
                        </p>
                        <div style={estilo3}>
                            <a href="/login" type="button" className="button-inicio">Inicia sesión</a>
                        </div>
                    </div>


                    <div className="col-sm-8 col-md-8 px-5 py-4 align-self-center">
                        <div className="col text-black">
                            <img src="../img/coffee.gif" alt="" className='img-fluid' />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default RecetasPreLog;
