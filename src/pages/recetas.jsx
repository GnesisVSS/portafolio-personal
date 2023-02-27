
import React, { useState } from 'react';
import { RecetasC } from '../models/recetas.class';
import CardRecetas from './Elementos/cardRecetas';
import NavbarRecetas from './navbar-recetas';

const Recetas = () => {

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



    // Recetas base de prueba
    const defaultRec1 = new RecetasC('Receta1', 'Describiendo receta 1', 'preparando', 'Categoria1', '3 min', '5 porciones', 'facil', 'img/pasta.jpg');
    const defaultRec2 = new RecetasC('Receta2', 'Describiendo receta 2', 'preparando2', 'Categoria2', '20 min', '12 porciones', 'media', 'img/waffle.jpg');
    const defaultRec3 = new RecetasC('Receta3', 'Describiendo receta 3', 'preparando3', 'Categoria3', '1 hora 30 min', '30 porciones', 'dificil', 'img/salad.jpg');
    const defaultRec4 = new RecetasC('Receta1', 'Describiendo receta 1', 'preparando', 'Categoria1', '3 min', '5 porciones', 'facil', 'img/pasta.jpg');
    const defaultRec5 = new RecetasC('Receta2', 'Describiendo receta 2', 'preparando2', 'Categoria2', '20 min', '12 porciones', 'media', 'img/waffle.jpg');
    const defaultRec6 = new RecetasC('Receta3', 'Describiendo receta 3', 'preparando3', 'Categoria3', '1 hora 30 min', '30 porciones', 'dificil', 'img/salad.jpg');

    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([defaultRec1, defaultRec2, defaultRec3,defaultRec4, defaultRec5, defaultRec6])

    const Tarjetas = () => {
        return (
            <section>
                <div className='container'>
                    {recetas.map((rec, index) => {
                        return (
                            <CardRecetas key={index} rec={rec} />
                        )
                    })}
                </div>
            </section>


        )
    }

    let recetaInfo;

    if (recetas.length > 0) {
        recetaInfo = <Tarjetas></Tarjetas>
    } else {
        recetaInfo = (
            <div>
                <h3>No hay información por mostrar</h3>
                <h4>Porfavor, intentelo mas tarde</h4>
            </div>
        )

    }
    // while (n < 3) {
    //     n++;
    //     <CardRecetas/>
    // }


    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (

        <section id='homeRecetas'>
            <NavbarRecetas />
            {/* <div className="col-sm-6">
                {recetaInfo}
            </div> */}
            <div>
                <div className="row">
                    <div className="py-5 px-5">
                        {recetaInfo}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Recetas;
