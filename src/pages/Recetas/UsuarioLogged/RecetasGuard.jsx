import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { cargarGuardados, eliminarGuardados, mostrarRecetasGuardadas } from '../../../api/receta.api';
import { RecetasC } from '../../../models/recetas.class';

const RecetasGuard = ({ rec }) => {
    
    const [save, setSave] = useState(false);
    const [recetas, setRecetas] = useState([])
    const [estaGuardado, setEstaguardado] = useState(false);

    const correousuario = localStorage.getItem("correoUsuario");

    useEffect(() => {

        async function loadRecetasGuardadas() {
            const cant = 2;
            const response = await mostrarRecetasGuardadas(correousuario)
            // console.log(response.data[0].id)
            setRecetas(...recetas, response.data)
            setEstaguardado(response.data.some((elemento) => rec.id === elemento.id));
        }
        loadRecetasGuardadas();
    }, [])

    const handleChange = () => {
        if (estaGuardado === false && save === false) {
            setSave(true);
            cargarGuardados(rec.id, correousuario);

        } else {
            setSave(false);
            eliminarGuardados(rec.id, correousuario);
        }
        setEstaguardado(!estaGuardado);
    };
    
    const navigate = useNavigate();
    const nombreReceta = rec.nombre
    const redirigirADetalleRecetas = () => {
        navigate('/DetalleRecetas', { state: { rec } }); // Redirige a '/detalle-recetas' y pasa 'receta' como prop
        console.log(rec)
    };

    return (
        <div className="card card-home-rec justify-content-center">
            <div className="img" style={rec.imgUrl === "" ? { backgroundImage: 'url(../img/FondoDefecto.svg)' } : { backgroundImage: `url(${rec.imgUrl})` }}>
                {
                    correousuario ? <button
                        className="save"
                        onClick={handleChange}
                        style={{ color: "grey" }}
                    >
                        {estaGuardado || save ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </button>
                        :
                        <button
                            className="save"
                            onClick={handleClickOpen}
                            style={{ color: "grey" }}
                        >
                            {<BookmarkBorderIcon />}
                        </button>
                }

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
