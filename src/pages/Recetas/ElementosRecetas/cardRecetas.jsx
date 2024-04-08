import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecetasC } from '../../../models/recetas.class';


const CardRecetas = ({ rec }) => {

    const [save, setSave] = useState(false);
    const [recetas, setRecetas] = useState([])
    const [estaGuardado, setEstaguardado] = useState();

    const correousuario = localStorage.getItem("correoUsuario");

    useEffect(() => {
        // Obtener los elementos del localStorage
        // const guardadoString = localStorage.getItem('guardado');
        // if (guardadoString) {
        //     // Convertir los elementos del localStorage de nuevo a un arreglo
        //     const recetasGuardadas = JSON.parse(guardadoString);
        //     // Actualizar el estado de las recetas guardadas con los elementos del localStorage
        //     setRecetas(recetasGuardadas);
        //     // Verificar si alguna de las recetas guardadas coincide con la receta actual
        //     setEstaguardado(recetasGuardadas.some(elemento => rec.id === elemento.id));
        // }

    }, []);



    const handleChange = (id) => {
        let guardado;
        if (localStorage.getItem("guardado") && localStorage.getItem("guardado").indexOf(id) !== -1) {
            setSave(false);
            guardado = false;
        }else{
            setSave(!save);
            guardado = !save;
        }
        
        cambioValorLocal(guardado);
    };

    const cambioValorLocal = (guardado) => {
        const guardadoString = localStorage.getItem('guardado');
        let nombresGuardados = [];
        if (guardado === true) {

            if (guardadoString) {
                nombresGuardados = JSON.parse(guardadoString);
            } else {
                localStorage.setItem('guardado', nombresGuardados)
            }

            // Verificar si ya hay algo guardado en el localStorage

            // Agregar el nuevo nombre al arreglo
            nombresGuardados.push(rec.id);
            // Guardar el arreglo actualizado en el localStorage
            localStorage.setItem('guardado', JSON.stringify(nombresGuardados));
            // cargarGuardados(rec.id, correousuario);
            // localStorage.setItem('guardado', rec.nombre)

        } else {
            let recetasGuardadas = JSON.parse(guardadoString);
            console.log("se desguardo:c")
            const idAEliminar = rec.nombre;

            // Encontrar el índice del elemento a eliminar en el arreglo
            recetasGuardadas = recetasGuardadas.filter(elemento => elemento !== rec.id);
            localStorage.setItem('guardado', JSON.stringify(recetasGuardadas));
        }
    }



    // useEffect(() => {
    //     // Obtener los elementos del localStorage
    //     const guardadoString = localStorage.getItem('guardado');
    //     if (guardadoString) {
    //         // Convertir los elementos del localStorage de nuevo a un arreglo
    //         const recetasGuardadas = JSON.parse(guardadoString);
    //         // Actualizar el estado de las recetas guardadas con los elementos del localStorage
    //         setRecetas(recetasGuardadas);
    //         // Verificar si alguna de las recetas guardadas coincide con la receta actual
    //         setEstaguardado(recetasGuardadas.some(elemento => rec.id === elemento.id));
    //     }
    // }, []);

    // const handleChange = () => {
    //     if (estaGuardado === false || save === false) {
    //         setSave(true);
    //         let nombresGuardados = [];
    //         // Verificar si ya hay algo guardado en el localStorage
    //         const guardadoString = localStorage.getItem('guardado');
    //         if (guardadoString) {
    //             // Si hay algo guardado, convertirlo de vuelta a un arreglo
    //             nombresGuardados = JSON.parse(guardadoString);
    //         }
    //         // Agregar el nuevo nombre al arreglo
    //         nombresGuardados.push(rec.nombre);
    //         // Guardar el arreglo actualizado en el localStorage
    //         localStorage.setItem('guardado', JSON.stringify(nombresGuardados));
    //         console.log(localStorage.getItem('guardado'));
    //         // cargarGuardados(rec.id, correousuario);
    //         // localStorage.setItem('guardado', rec.nombre)

    //     } else {
    //         setSave(false);
    //         // eliminarGuardados(rec.id, correousuario);
    //     }
    //     setEstaguardado(!estaGuardado);
    // };

    // ELEMENTOS PARA USUARIOS QUE NO ESTÉN LOGEADOS
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const navigate = useNavigate();
    const nombreReceta = rec.nombre
    const redirigirADetalleRecetas = () => {
        navigate('/DetalleRecetas', { state: { rec } }); // Redirige a '/detalle-recetas' y pasa 'receta' como prop
        console.log(rec.nombre)
    };


    return (

        <div className="card card-home-rec justify-content-center">

            <div className="img" style={rec.imgUrl === "" || undefined ? { backgroundImage: 'url(/img/FondoDefecto.svg)' } : { backgroundImage: `url(${rec.imgUrl})` }}>

                <button
                    className="save"
                    onClick={() => handleChange(rec.id)}
                >
                    {save || (localStorage.getItem("guardado") && localStorage.getItem("guardado").indexOf(rec.id) !== -1) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </button>


            </div>

            <div className="text-rec">
                <p className="h3-rec"> {rec.nombre} </p>
                <p className="p-rec"> {rec.porciones} porciones - {rec.tiempoPreparacion} min. </p>
                <a className="icon-box btn" type='button' onClick={redirigirADetalleRecetas}>
                    <img src='img/maceta.png'></img>
                    <p className="span-rec text-center">Ver Receta</p>
                </a>
            </div >

            <div>

            </div>
        </div >

    )

}

CardRecetas.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}

export default CardRecetas;
