/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { Field, useFormik } from 'formik';
import NavbarRecetas from './navbar-recetas';
import { TextField } from '@mui/material';
import { cargarRecetaAdmin } from '../api/receta.api';
import { createApi, toJson } from "unsplash-js";
import Photo from './Photo';


const RegRecAdmin = (props) => {

    const estilo2 = {
        textAlign: 'center'
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [imageUrl, setImageUrl] = useState('');
    const [imageBlob, setImageBlob] = useState(null);

    const [valorInput, setValorInput] = useState('');

    useEffect(() => {
        setValorInput(props.valorInicial);
    }, [props.valorInicial]);


    const [info, setInfo] = useState(valorInput);
    const [myValue, setMyValue] = useState(null);

    const handleInfoChange = (newInfo) => {
        setInfo(newInfo);
    };

    const formik = useFormik({
        initialValues: {
            nombre: "",
            descripcion: "",
            preparacion: "",
            categoria: "",
            tiempoPreparacion: "",
            porciones: "",
            dificultad: "",
            imgUrl: ""
        },
        onSubmit: async (values) => {
            console.log(values)
            values.imgUrl = info;
            try {
                const response = await cargarRecetaAdmin(values)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <div>
            <NavbarRecetas />
            <section className='py-5'>

                <div className="container col-sm-8 mx-auto">
                    <div className="row">
                        <div className="card mb-3 ps-0">
                            <div className="row g-0">
                                <div className="col-md-7">
                                    <img className="img-fluid rounded-start" src="../img/waffle-2596092_1280.jpg" alt="" />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body p-4">
                                        {/* <h3 className="card-title text-center fw-bold">Inicia sesión</h3> */}
                                        <div className="card-text p-4">

                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='nombre' onChange={formik.handleChange} id="outlined-basic" label="Nombre" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='descripcion' onChange={formik.handleChange} id="outlined-basic" label="Descripcion" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='preparacion' onChange={formik.handleChange} id="outlined-basic" label="Preparacion" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='categoria' onChange={formik.handleChange} id="outlined-basic" label="Categoria" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='tiempoPreparacion' onChange={formik.handleChange} id="outlined-basic" label="Tiempo Preparacion" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='porciones' onChange={formik.handleChange} id="outlined-basic" label="Porciones" variant="outlined" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='dificultad' onChange={formik.handleChange} id="outlined-basic" label="Dificultad" variant="outlined" />
                                                </div>
                                                {/* <ChildComponent onInfoChange={handleInfoChange} /> */}
                                                <Photo onInfoChange={handleInfoChange}/>

                                                <div style={estilo2} className="py-2">
                                                    <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" >
                                                        {/* <span >Loading...</span> */}
                                                        <div className="visually-hidden" id='loading' role="status" >
                                                            <div className="spinner-border spinner-border-sm" role="status" />
                                                        </div>

                                                        <span className="" id='iniciar'>Cargar Receta</span>
                                                    </button>
                                                </div>

                                            </form>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </section >
        </div>



    );


}

export default RegRecAdmin
