import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { RecetasC } from '../../../models/recetas.class';

const RecetasGuard = ({ rec }) => {

    const [save, setSave] = useState(false);
    const [recetas, setRecetas] = useState([])
    const [estaGuardado, setEstaguardado] = useState(false);

    const correousuario = localStorage.getItem("correoUsuario");
    let arreg = localStorage.getItem('guardado');
    let ar = JSON.parse(arreg);

    useEffect(() => {

        async function loadRecetasGuardadas() {
            const final = ar.join(',');
            const response = await mostrarRecetasGuardadasGeneral(final)
            console.log(response)
            setRecetas(...recetas, response.data)
            setEstaguardado(response.data.some((elemento) => rec.id === elemento.id));
        }
        loadRecetasGuardadas();
    }, [])

    console.log(recetas)

    const handleChange = () => {
        setSave(!save);
        let guardado = !save;
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

    const navigate = useNavigate();
    const nombreReceta = rec.nombre
    const redirigirADetalleRecetas = () => {
        navigate('/DetalleRecetas', { state: { rec } }); // Redirige a '/detalle-recetas' y pasa 'receta' como prop
        console.log(rec)
    };

    return (
        <div className="card card-home-rec justify-content-center">
            <div className="img" style={rec.imgUrl === "" ? { backgroundImage: 'url(../img/FondoDefecto.svg)' } : { backgroundImage: `url(${rec.imgUrl})` }}>
                <button
                    className="save"
                    onClick={handleChange}
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

        </div >
    );
}

RecetasGuard.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}
export default RecetasGuard;
