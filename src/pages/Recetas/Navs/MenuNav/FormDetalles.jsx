/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Field, useFormik } from 'formik';
import FormIngredientes from './FormIngredientes';
import Photo from '../../Photo';
import { registroRecetasUsuario } from '../../../../api/receta.api';

const FormDetalles = (datosIngredientes, props) => {
    const [valorInput, setValorInput] = useState('');
    const correousuario = localStorage.getItem("correoUsuario");

    // const valuesDetalle = datosIngredientes.datosIngredientes.map(detalle => [detalle.categoria, detalle.descripcion, detalle.dificultad, detalle.imgUrl, detalle.nombre, detalle.porciones, detalle.preparacion, detalle.tiempoPreparacion, detalle.usuario]);

    useEffect(() => {
        setValorInput(props.valorInicial);
        console.log(datosIngredientes)
    }, [props.valorInicial]);


    const formik = useFormik({
        initialValues: {
            nombre: "",
            cantidad: "",
            unidad: "",
            id_receta: ""
        },
        onSubmit: async (datosIngredientes) => {
            // values.imgUrl = info;
            try {
                const response = await registroRecetasUsuario(datosIngredientes)
                console.log(response)
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

    const [info, setInfo] = useState(valorInput);

    const handleInfoChange = (newInfo) => {
        setInfo(newInfo);
    };


    return (
        page ? <FormIngredientes /> :
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='text-focus-in titulo-inicio'>Detalles</h1>
                    <div className='py-4'>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='nombre' id="outlined-basic" label="Nombre" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='descripcion' id="outlined-basic" label="Descripcion" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='preparacion' id="outlined-basic" label="Preparacion" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='categoria' id="outlined-basic" label="Categoria" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='tiempoPreparacion' id="outlined-basic" label="Tiempo Preparacion" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='porciones' id="outlined-basic" label="Porciones" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='dificultad' id="outlined-basic" label="Dificultad" variant="outlined" />
                        </div>
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
