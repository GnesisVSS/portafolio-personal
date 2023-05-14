import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { RecetasC } from '../../models/recetas.class';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { cargarGuardados, eliminarGuardados, mostrarRecetasGuardadas } from '../../api/receta.api';
import { Box, Fade, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import DetalleRecetas from '../Recetas/VistaDetalleRecetas';
import { Link, useNavigate } from 'react-router-dom';


const CardRecetas = ({ rec }) => {

    const [save, setSave] = useState(false);
    const [recetas, setRecetas] = useState([])
    const [estaGuardado, setEstaguardado] = useState(false);

    const correousuario = localStorage.getItem("correoUsuario");

    useEffect(() => {

        async function loadRecetasGuardadas() {
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
            <div className="img" style={rec.imgUrl === "" ? { backgroundImage: 'url(/img/FondoDefecto.svg)' } : { backgroundImage: `url(${rec.imgUrl})` }}>
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

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <div className="container text-center">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <img src="../img/ohno.svg" />
                                    </div>
                                    <div className="col align-self-center">
                                        <h1 className="card-title text-center fw-bold">Oh, no!</h1>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            Debes iniciar sesión para poder guardar tus recetas favoritas. Crea una cuenta gratis para acceder a esta función y más!
                                        </Typography>
                                        <p className="text-muted text-center">
                                            Al ser un demo, las credenciales principales son:
                                            
                                            <div className='row'>
                                                <div className='col-4'>
                                                </div>
                                                <div className='col-4'>
                                                    <li style={{textAlign:'start'}}> <strong>Pass:</strong> root</li>
                                                    <li style={{textAlign:'start'}}><strong>Correo:</strong> root</li>
                                                </div>
                                                <div className='col-4'>
                                                </div>
                                            </div>



                                        </p>

                                        <a className="button-inicio" type='button' href='./login'>
                                            <span className="" id='iniciar'>Iniciar sesión</span>
                                        </a>
                                    </div>

                                </div>

                            </div>


                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div >

    )

}

CardRecetas.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}

export default CardRecetas;
