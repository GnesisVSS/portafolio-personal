/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Field, useFormik } from 'formik';
import FormIngredientes from './FormIngredientes';
import Photo from '../../Photo';
import { registroDetalleRecetaUsuario, registroRecetasUsuario } from '../../../../api/receta.api';

const FormDetalles = (datosIngredientes, props) => {
    const [valorInput, setValorInput] = useState('');
    const correousuario = localStorage.getItem("correoUsuario");

    const valuesDetalle = datosIngredientes.datosIngredientes[0]

    useEffect(() => {
        setValorInput(props.valorInicial);
        console.log(valuesDetalle.length)
    }, [props.valorInicial]);

    const [info, setInfo] = useState(valorInput);

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
        onSubmit: async (detallesIngredientes) => {
            detallesIngredientes.imgUrl = info;
            try {
                const response = await registroRecetasUsuario(valuesDetalle)
                const responseDetalle = await registroDetalleRecetaUsuario(detallesIngredientes)
                console.log(response)
                console.log(responseDetalle)
            } catch (error) {
                console.log(error)

            }
        },
    });
    const [page, setPage] = useState(false);
    const handleClick = (event, index) => {
        setPage(!page);
    }
    // console.log(datosIngredientes)


    return (
        page ? <FormIngredientes /> :
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='text-focus-in titulo-inicio'>Detalles</h1>
                    <div className='py-4'>
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
                        <Photo onInfoChange={handleInfoChange} />
                        <div style={{ textAlign: "center" }} className="py-2">
                            <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" >
                                {/* <span >Loading...</span> */}
                                <div className="visually-hidden" id='loading' role="status" >
                                    <div className="spinner-border spinner-border-sm" role="status" />
                                </div>

                                <span className="" id='iniciar'>Cargar Receta</span>
                            </button>
                        </div>
                    </div>




                </form>
                <div style={{ textAlign: "right" }}>
                    <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" onClick={handleClick}>
                        {/* <span >Loading...</span> */}
                        <div className="visually-hidden" id='loading' role="status" >
                            <div className="spinner-border spinner-border-sm" role="status" />
                        </div>

                        <span className="" id='iniciar'>Volver</span>
                    </button>
                </div>
            </div>


    );
}

export default FormDetalles;
