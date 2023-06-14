/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { Box, Fade, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, useFormik } from 'formik';
import FormIngredientes from './FormIngredientes';
import Photo from '../../Photo';
import { registroDetalleRecetaUsuario, registroIngredientes, registroRecetasUsuario } from '../../../../api/receta.api';
import { Navigate, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';

const FormDetalles = (datosIngredientes, props) => {
    const [valorInput, setValorInput] = useState('');

    const valuesDetalle = datosIngredientes.datosIngredientes[0]
    useEffect(() => {
        setValorInput(props.valorInicial);
    }, [props.valorInicial]);

    const [info, setInfo] = useState(valorInput);

    const handleInfoChange = (newInfo) => {
        setInfo(newInfo);
    };

    const handleKeyPress = (event) => {
        // Obtiene el código de tecla ingresado
        const keyCode = event.keyCode || event.which;
        const character = String.fromCharCode(keyCode);
        // Expresión regular para letras y números
        const pattern = /^[a-zA-Z0-9]*$/;
        // Verifica si el código de tecla corresponde a una letra
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (!pattern.test(character))) {
            // Si es una letra, cancela el evento de teclado
            event.preventDefault();
        }
    };

    const valSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre es obligatorio')
            .min(5, 'El nombre es muy corto')
            .max(120, 'El nombre excede el máximo de caracteres'),
        descripcion: Yup.string()
            .required('La descripcion es obligatoria')
            .min(5, 'La descripcion es muy corta'),
        preparacion: Yup.string()
            .required('La preparacion es obligatoria')
            .min(10, 'La preparacion es muy corta'),
        tiempoPreparacion: Yup.number()
            .required('El tiempo de preparacion es obligatorio')
            .min(1, 'El tiempo minimo de preparación es de 1 min'),
        porciones: Yup.number()
            .required('Las porciones son obligatorias')
            .min(1, 'El minimo de porciones es de 1')
            .max(100, 'El maximo de porciones es de 100'),
    })

    const validaciones = (event) => {
        // se llama al nombre y al valor del elemento del DOM, en este caso de cada input
        const { name, value } = event.target;

        // se definen los errores y se copia lo que hay en mensaje error
        const newErrors = { ...mensajeError };
        
        // para los campos extra se define el index como el nombre del input, que se separa al encontrar un -, y accede al primer elemento del array
        // se accede al elemento 1, ya que el split genera un arreglo con las separaciones, es decir queda como por ejemplo[nombreExtra,1]
        const index = name.split('-')[1];
        //!!TODO REVISAR LAS VALIDACIONES EN CUANTO A NUMERO O STRING
        // ------------------------------------SECCIÓN NOMBRE--------------------------------------------------
        if (name === 'nombre') {
            if (value.length < 3 && value.length > 0) {
                newErrors.nombre = "Por favor, ingresa un nombre válido"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.nombre = newErrors.nombre = ''     
            }
        // ------------------------------------SECCIÓN DESCRIPCIÓN--------------------------------------------------
        }else if(name === 'descripcion') {
            if (value.length < 3 && value.length > 0) {
                newErrors.descripcion = "Por favor, ingresa una descripción válida"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.descripcion = newErrors.descripcion = ''     
            }
        // ------------------------------------SECCIÓN PREPARACIÓN--------------------------------------------------
        }else if(name === 'preparacion') {
            if (value.length < 3 && value.length > 0) {
                newErrors.preparacion = "Por favor, ingresa una preparación válida"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.preparacion = newErrors.preparacion = ''     
            }
        // ------------------------------------SECCIÓN CATEGORÍA--------------------------------------------------
        }else if(name === 'categoria') {
            if (value.length < 3 && value.length > 0) {
                newErrors.categoria = "Por favor, ingresa una categoría válida"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.categoria = newErrors.categoria = ''     
            }
        // ------------------------------------SECCIÓN TIEMPO DE PREPARACIÓN--------------------------------------------------
        }else if(name === 'tiempoPreparacion') {
            if (value.length < 3 && value.length > 0) {
                newErrors.tiempoPreparacion = "Por favor, ingresa un tiempo de preparación válido"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.tiempoPreparacion = newErrors.tiempoPreparacion = ''     
            }
        // ------------------------------------SECCIÓN PORCIONES--------------------------------------------------
        }else if(name === 'porciones') {
            if (value.length < 3 && value.length > 0) {
                newErrors.porciones = "Por favor, ingresa una porción válida"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.porciones = newErrors.porciones = ''     
            }
        // ------------------------------------SECCIÓN DIFICULTAD--------------------------------------------------
        }else if(name === 'dificultad') {
            if (value.length < 3 && value.length > 0) {
                newErrors.dificultad = "Por favor, ingresa una dificultad válida"
            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
                newErrors.dificultad = newErrors.dificultad = ''     
            }
        }
        // Se asigna a MensajeError el newError (esto significa que, al obtener por ejemplo el error de mensajeNombreErrorValidoComun, este mensaje se asigna a mensajeError)
        setMensajeError(newErrors);
    }

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
        validationSchema: valSchema,
        onSubmit: async (detallesIngredientes) => {
            detallesIngredientes.imgUrl = info;
            try {
                await registroIngredientes(valuesDetalle)
                await registroDetalleRecetaUsuario(detallesIngredientes)
                localStorage.removeItem("formValues");
                localStorage.removeItem("additionalInputs");
                window.location.href = '/misRecetas';

            } catch (error) {
                console.log(error)

            }
        }
    });


    const [page, setPage] = useState(false);
    const handleClick = (event, index) => {
        setPage(!page);
    }



    return (
        page ? <FormIngredientes /> :
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='text-focus-in titulo-inicio'>Detalles</h1>
                    <div className='py-4'>
                        <div className="input-group mb-3">
                            <TextField variant="filled" error={formik.touched.nombre && Boolean(formik.errors.nombre)} onBlur={formik.handleBlur}
                                helperText={formik.touched.nombre && formik.errors.nombre} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='nombre' onChange={formik.handleChange} id="nombre" label="Nombre" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField error={formik.touched.descripcion && Boolean(formik.errors.descripcion)} onBlur={formik.handleBlur}
                                helperText={formik.touched.descripcion && formik.errors.descripcion} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='descripcion' onChange={formik.handleChange} id="outlined-basic" label="Descripcion" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            {/* <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='preparacion' onChange={formik.handleChange} id="outlined-basic" label="Preparacion" variant="outlined" /> */}
                            <TextField
                                fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                                name='preparacion'
                                onChange={formik.handleChange}
                                label="Preparacion"
                                multiline
                                rows={6}
                                error={formik.touched.preparacion && Boolean(formik.errors.preparacion)}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.preparacion && formik.errors.preparacion}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='categoria' onChange={formik.handleChange} id="outlined-basic" label="Categoria" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField error={formik.touched.tiempoPreparacion && Boolean(formik.errors.tiempoPreparacion)} onBlur={formik.handleBlur}
                                helperText={formik.touched.tiempoPreparacion && formik.errors.tiempoPreparacion} onKeyPress={handleKeyPress} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='tiempoPreparacion' onChange={formik.handleChange} id="outlined-basic" label="Tiempo Preparacion" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField error={formik.touched.porciones && Boolean(formik.errors.porciones)} onBlur={formik.handleBlur}
                                helperText={formik.touched.porciones && formik.errors.porciones} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='porciones' onChange={formik.handleChange} id="outlined-basic" label="Porciones" variant="outlined" />
                        </div>
                        <div className="input-group mb-3">
                            <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='dificultad' onChange={formik.handleChange} id="outlined-basic" label="Dificultad" variant="outlined" />
                        </div>
                        {/* <ChildComponent onInfoChange={handleInfoChange} /> */}
                        <Photo onInfoChange={handleInfoChange} />
                        <div style={{ textAlign: "center" }} className="py-2">
                            <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form">
                                {/* <span >Loading...</span> */}
                                <div className="visually-hidden" id='loading' role="status" >
                                    <div className="spinner-border spinner-border-sm" role="status" />
                                </div>

                                <span className="" id='iniciar' >Cargar Receta</span>
                            </button>
                        </div>
                    </div>




                </form>
                {/* <Field name="creditCard" component={renderCleaveField} /> */}

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
