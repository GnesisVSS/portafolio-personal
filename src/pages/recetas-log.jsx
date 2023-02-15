import React from 'react';

const RecetasLog = () => {

const estilo1 = {
    color: '#F9A826'
}

const estilo2 = {
    fontFamily: ['"Lora"','serif']
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

    var letras = document.getElementById('nav-titulo');
    letras.style.color = "black";

    var letras2 = document.getElementById('nav-recetas');
    letras2.style.color = "black";

    return (
        <section>
            <div>
                <div className="container col-sm-8 py-4 mx-auto">
                    <div className="row align-items-center py-2">
                        <div className="col text-black">
                            <h1 className="text-focus-in titulo-inicio" style={estilo1}>Bienvenido(a)!</h1>
                            <p style={estilo2}>
                                Recetas dulces, saladas, saludables, para todos los gustos! Accede a estas y más recetas
                                iniciando sesión, si no tienes una cuenta puedes registrarte gratis, para acceder al listado
                                completo de
                                resetas que tenemos para ti. Además tambien puedes crear tus propias recetas y guardarlas
                                junto a las que te entregamos
                                para tener una mayor variedad.
                            </p>
                            <div style={estilo3}>
                                <a href="/login" type="button" className="button-inicio">Hola! usuario</a>
                            </div>

                        </div>
                        <div className="col py-4">
                            <img src="../img/dibujo-cocina.svg" style={estilo4} alt=""/>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default RecetasLog;
