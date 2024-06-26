import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { mostrarDetalleIngredientes, mostrarDetalleRecetas } from '../../../api/receta.api';
import NavbarUsuario from '../ElementosRecetas/Navs/navbarUsuario';


const VistaDetalleGuardados = () => {
    const location = useLocation();
    const { rec } = location.state;
    const [recetas, setRecetas] = useState([])
    const [ingr, setIngr] = useState([]);
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    useEffect(() => {

        async function loadRecetasDetalle() {
            const correousuario = localStorage.getItem("correoUsuario");

            const response = await mostrarDetalleRecetas(rec.id)
            const responseIngr = await mostrarDetalleIngredientes(rec.id)
            // console.log(response.data[0].id)
            setRecetas(...recetas, response.data)
            setIngr(...ingr, responseIngr.data)
            console.log(response.data)
        }
        loadRecetasDetalle();

    }, [])

    function separarParrafoConNumeros(parrafo) {
        // Utilizamos una expresión regular para buscar números seguidos de un punto en el párrafo
        var regex = /\d+\./g;

        // Reemplazamos cada número seguido de un punto encontrado por el número seguido de un salto de línea
        var parrafoSeparado = parrafo.replace(regex, function (match) {
            return '\n' + match;
        });

        return parrafoSeparado.trim();
    }


    return (
        <section>
            <NavbarUsuario />


            <div className='container mx-auto py-4'>
                <div>
                    <div>
                            <div key={recetas.id} className='py-5 row justify-content-center'>
                                <div className='col-5 col-sm-6' style={{ textAlign: 'center' }}>
                                    <img src={recetas.imgUrl==="" ? 'img/FondoDefecto.svg' : recetas.imgUrl} style={{ maxHeight: 400, maxWidth: 500 }}/>
                                </div>
                                <div className='col-5 col-sm-6'>
                                    <h1> {recetas.nombre}</h1>
                                    <hr style={{ borderTop: "1px solid black" }} />
                                    <h4> <AccessTimeIcon /> {recetas.tiempoPreparacion} minutos <GroupIcon /> {recetas.porciones} porciones</h4>
                                    <h5 className='py-5'> Categoria <Chip label={recetas.categoria} /> </h5>

                                </div>


                            </div>

                        {/* <p className='py-4'>{recetas[0].nombre_receta}</p> */}
                    </div>
                    <div>
                            <div key={recetas.id} className='py-5 row justify-content-center'>
                                <div className='col-5 col-sm-6' style={{ textAlign: 'left' }}>
                                    <div style={{ border: '1px solid black' }} className='p-5'>
                                        <h1 style={{ paddingBottom: '1.5rem' }}>Ingredientes</h1>
                                        {ingr.map(objeto => (
                                            <div key={objeto.id}>
                                                <p> <strong>{objeto.nombre}</strong>  {objeto.cantidad === 0 ? '' : objeto.cantidad} {objeto.unidad === 'na' ? '' : objeto.unidad} </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-5 col-sm-6'>
                                    <div className='p-5' style={{ border: '1px solid black' }}>
                                        <h1>Preparación</h1>
                                        {recetas.map(objeto => {
                                            var parrafo = objeto.preparacion;
                                            var parrafosep = separarParrafoConNumeros(parrafo)
                                            console.log(parrafosep);
                                            return (
                                                <div key={objeto.id} className='py-4' style={{wordWrap: "break-word"}}>
                                                    {/* dividimos el párrafo en líneas utilizando el método split('\n'), que divide el texto en un arreglo de líneas en función del carácter de salto de línea \n. */}
                                                    <p>{parrafosep.split('\n').map((linea, index) => (
                                                        //Por cada línea, creamos un <span> con el contenido de la línea y una etiqueta <br /> al final para generar un salto de línea.
                                                        <span key={index}>
                                                            {linea}
                                                            <br />
                                                        </span>
                                                    ))}</p>
                                                </div>
                                            );

                                        })}
                                        {/* <p className='py-4'>{recetas[0].nombre_receta}</p> */}
                                    </div>
                                </div>


                            </div>
                        {/* <p className='py-4'>{recetas[0].nombre_receta}</p> */}
                    </div>



                </div>
            </div >
        </section>
    );
}

export default VistaDetalleGuardados;
