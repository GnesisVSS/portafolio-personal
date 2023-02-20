import React from 'react';

const Recetas = () => {

    const estilo1 = {
        color: '#F9A826'
    }

    const estilo2 = {
        fontFamily: ['"Lora"', 'serif']
    }

    const estilo3 = {
        textAlign: 'center'
    }

    const estilo4 = {
        height: '578px',
        width: '578px'
    }

    var fondo = document.getElementById('ind');
    fondo.style.backgroundColor = "white";

    return (
        <section id='recetas'>
            <div style={{ backgroundColor: 'white' }}>
            <div className='col align-self-center'>
            <div className="container col-sm-12 py-2 mx-auto">
                    <div className="row justify-content-center align-items-center py-5">

                        <div className="col-sm-8 col-md-5">
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


                        <div className="col-sm-8 col-md-6 px-5 py-4">
                            <div className="col text-black">
                                <img src="../img/coffee.gif" alt="" className='img-fluid' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
                

            </div>

        </section>
    );
}

export default Recetas;
