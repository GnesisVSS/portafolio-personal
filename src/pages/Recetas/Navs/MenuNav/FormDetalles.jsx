import { TextField } from '@mui/material';
import React from 'react';
import { Field, useFormik } from 'formik';

const FormDetalles = () => {
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
                </div>




            </form>
        </div>
    );
}

export default FormDetalles;
