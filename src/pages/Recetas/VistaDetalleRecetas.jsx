import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import { Checkbox, Chip, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mostrarDetalleIngredientes, mostrarDetalleRecetas } from '../../api/receta.api';
import NavbarUsuario from './ElementosRecetas/Navs/navbarUsuario';

const DetalleRecetas = () => {
    const location = useLocation();
    const { rec } = location.state;
    const [recetas, setRecetas] = useState([])
    const [ingr, setIngr] = useState([]);
    const [checked, setChecked] = useState([]);
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    useEffect(() => {

        async function loadRecetasDetalle() {
            const response = await mostrarDetalleRecetas(rec.id)
            const responseIngr = await mostrarDetalleIngredientes(rec.id)
            // console.log(response.data[0].id)
            setRecetas(...recetas, response.data[0])
            setIngr(...ingr, responseIngr.data)
            // console.log(response.data[0])
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


            <div className='container mx-auto py-4' style={{ margin: '0px 32px 0px 32px' }}>
                <div>
                    <div>
                        <div key={recetas.id} className='py-5 row justify-content-center'>
                            <div className='col-lg-6 col-sm-12 py-4' style={{ textAlign: 'center' }}>
                                <img className='img-fluid' src={recetas.imgUrl ? recetas.imgUrl : "/img/FondoDefecto.svg"} style={{ maxHeight: 400,  borderRadius: "25px" }} />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <h1> {recetas.nombre}</h1>
                                <h6> <em>{recetas.descripcion}</em> </h6>
                                <hr style={{ borderTop: "1px solid black" }} />
                                <h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{marginRight:'1.5rem'}}>
                                            <AccessTimeIcon/> {recetas.tiempoPreparacion} minutos <GroupIcon/> {recetas.porciones} porciones
                                        </div>
                                        <div>
                                            <Chip label={recetas.categoria} /> <Chip style={{ background: recetas.dificultad == "Baja" ? "#8bc34a" : recetas.dificultad == "Media" ? "#ffb74d" : recetas.dificultad == "Alta" ? "#ff7043" : "" }} label={"Dificultad " + recetas.dificultad} />
                                        </div>
                                    </div>


                                </h4>
                                <div className="py-2">


                                </div>
                                {recetas.recursos ?
                                    <div>
                                        <a type='button' className="button-recursos" href={recetas.recursos} target="_blank" rel='noreferrer'>
                                            {/* <span >Loading...</span> */}
                                            <div className="visually-hidden" id='loading' role="status" >
                                                <div className="spinner-border spinner-border-sm" role="status" />
                                            </div>

                                            <span className="" id='iniciar'>Mira un video de la receta aqui!</span>
                                        </a>
                                        <div>
                                        <span style={{fontSize:'12px',color:'grey'}}>
                                        Los videos mostrados pertenecen a sus respectivos autores.
                                        </span>
                                        </div>
                                        
                                    </div>

                                    :
                                    ""
                                }


                            </div>


                        </div>
                    </div>
                    <div className='px-5'>
                        <div key={recetas.id} className=' row justify-content-center'>
                            <div className='col-lg-6 col-sm-12' style={{ textAlign: 'left' }}>
                                <div className='py-5'>
                                    <h1 style={{ paddingBottom: '1.5rem' }}>Ingredientes</h1>
                                    <FormGroup>
                                        {ingr.map(objeto => (
                                            <div key={objeto.id}>
                                                <FormControlLabel control={<Checkbox checked={checked.includes(objeto.nombre)} // Establecemos el estado del checkbox según si objeto.nombre está en el array checkedItems
                                                    onChange={() => ingredienteTachado(objeto.nombre)} />} label={<span> <strong>{objeto.nombre}</strong>  {objeto.cantidad === 0 ? '' : objeto.cantidad} {objeto.unidad === 'na' ? '' : objeto.unidad}</span>}
                                                    className={checked.includes(objeto.nombre) ? 'tachado' : ''} />

                                            </div>
                                        ))}

                                    </FormGroup>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <div className='py-5'>
                                    <h1>Preparación</h1>

                                    <div key={recetas.id} className='py-4' style={{ wordWrap: "break-word" }}>
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


export default DetalleRecetas;
