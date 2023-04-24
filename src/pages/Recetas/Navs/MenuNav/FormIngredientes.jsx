import { Photo } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Field, useFormik } from 'formik';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FormIngredientes = () => {
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

    const [values, setValues] = useState([]);

    const addInput = () => {
        setValues([...values, {}]);
    };

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>
                {/* <div className='py-4'>
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
                </div> */}

                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Nombre del Ingrediente"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Cantidad"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Unidad de Medida"/>

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Nombre del Ingrediente"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Cantidad"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Unidad de Medida"/>

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Nombre del Ingrediente"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Cantidad"/>

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}  onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Unidad de Medida"/>

                    </div>
                </div>


            </form>
            <div>
                
                {values.map((value, index) => (
                    <div key={index} className='row py-4'>
                        <div className='col'>
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={`input-${index}`} onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Nombre del Ingrediente"/>

                        </div>
                        <div className='col' key={index}>
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={`input-${index}`} onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Cantidad"/>

                        </div>
                        <div className='col' key={index}>
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={`input-${index}`} onChange={formik.handleChange} id="outlined-basic" variant="outlined" label="Unidad de Medida"/>

                        </div>
                    </div>

                ))}
                <Button variant="text" onClick={addInput} style={{color:"#00A087"}} startIcon={<AddCircleIcon />}>Agregar otro</Button>

            </div>
        </div>
    );
}

export default FormIngredientes;
