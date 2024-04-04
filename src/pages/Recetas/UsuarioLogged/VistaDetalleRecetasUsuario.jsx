import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { mostrarDetalleIngredientes, mostrarDetalleRecetasUsuario } from '../../../api/receta.api';
import NavbarUsuario from '../ElementosRecetas/Navs/navbarUsuario';

const VistaDetalleRecetasUsuario = () => {
    const location = useLocation();
    const { rec } = location.state;
    const [recetas, setRecetas] = useState([])
    const [ingr, setIngr] = useState([]);
    const [checked, setChecked] = useState([]);
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    useEffect(() => {

        async function loadRecetasDetalle() {
            const correousuario = localStorage.getItem("correoUsuario");

            const response = await mostrarDetalleRecetasUsuario(rec.id, correousuario)
            const responseIngr = await mostrarDetalleIngredientes(rec.id)
            // console.log(response.data[0].id)
            setRecetas(...recetas, response.data)
            setIngr(...ingr, responseIngr.data)
            console.log(response.data)
        }
        loadRecetasDetalle();

    }, [])

    // eslint-disable-next-line react/prop-types
    function SepararParrafoConNumeros({ preparacion }) {
        // Verificar si descripcion no es undefined
        if (preparacion) {
            // Utilizamos una expresión regular para buscar números seguidos de un punto en el párrafo
            var regex = /\d+\./g;

            // Reemplazamos cada número seguido de un punto encontrado por el número seguido de un salto de línea
            // eslint-disable-next-line react/prop-types
            var parrafoSeparado = preparacion.replace(regex, function (match) {
                return '\n' + match;
            });

            // Dividir el párrafo en líneas basadas en saltos de línea y mapear cada línea
            const lineas = parrafoSeparado.split('\n').map((linea, index) => (
                // Por cada línea, creamos un <span> con el contenido de la línea y una etiqueta <br /> al final para generar un salto de línea.
                <span key={index}>
                    {linea}
                    <br />
                </span>
            ));

            // Devolver el array de líneas
            return lineas;
        } else {
            // Si descripcion es undefined, retornar un mensaje de error o algo que indique que no hay descripción disponible
            return <span>Cargando...</span>;
        }
    }

    const ingredienteTachado = (valor) => {
        if (checked.includes(valor)) {
            setChecked(checked.filter(item => item !== valor));
        } else {
            setChecked([...checked, valor]);
        }
    };


    return (
        <section>
            <NavbarUsuario />


            <div className='container mx-auto py-4'>
                <div>
                    <div>
                        <div key={recetas.id} className='py-5 row justify-content-center'>
                            <div className='col-5 col-sm-6' style={{ textAlign: 'center' }}>
                                <img src={recetas.imgUrl === "" ? 'img/FondoDefecto.svg' : recetas.imgUrl} style={{ maxHeight: 400, maxWidth: 500 }} />
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
                                    <div className='py-4' style={{ wordWrap: "break-word" }}>
                                        {/* dividimos el párrafo en líneas utilizando el método split('\n'), que divide el texto en un arreglo de líneas en función del carácter de salto de línea \n. */}
                                        <SepararParrafoConNumeros preparacion={recetas.preparacion} />
                                    </div>

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

export default VistaDetalleRecetasUsuario;
