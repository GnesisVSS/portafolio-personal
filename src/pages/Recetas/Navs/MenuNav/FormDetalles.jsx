import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Field, useFormik } from 'formik';
import FormIngredientes from './FormIngredientes';

const FormDetalles = (datosIngredientes) => {
  

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
    const [page, setPage] = useState(false);
    const handleClick = (event, index) => {
        setPage(!page);
    }
    console.log(datosIngredientes)
    return (
        page ? <FormIngredientes/> :
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
