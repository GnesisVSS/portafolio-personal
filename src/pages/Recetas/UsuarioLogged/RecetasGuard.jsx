import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { RecetasC } from '../../../models/recetas.class';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { cargarGuardados, eliminarGuardados, mostrarRecetasGuardadas } from '../../../api/receta.api';

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
    
    
    return (
        <div className="card card-home-rec justify-content-center">
            <div className="img" style={{ backgroundImage: `url(${rec.imgUrl})` }}>
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
                <button className="icon-box btn">
                    <img src='img/maceta.png'></img>
                    <p className="span-rec text-center">Ver Receta</p>
                </button>
            </div >

        </div >
    );
}

RecetasGuard.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}
export default RecetasGuard;
