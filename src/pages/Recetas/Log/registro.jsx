import React, { useState } from 'react';
import { Field, Form, Formik, useFormik } from 'formik';
import { guardar } from '../../../api/registro.api';
import NavbarRecetas from '../Navs/navbar-recetas';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';

const Registro = () => {

    const [mostrarPass, setMostrarPass] = useState(false)

    const estilo2 = {
        textAlign: 'center'
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const valSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre es obligatorio'),
        apellido: Yup.string()
            .required('El apellido es obligatorio'),
        correo: Yup.string()
            .email('Ingresa un correo válido')
            .required('El correo es obligatorio'),
        usuario: Yup.string()
            .required('El usuario es obligatorio'),
        contrasena: Yup.string()
            .required('La contraseña es obligatoria'),
    })

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            correo: "",
            usuario: "",
            contrasena: ""
        },
        validationSchema: valSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                const response = await guardar(values)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <section className='py-5'>
            <NavbarRecetas />
            <div className="container col-sm-8 mx-auto">
                <div className="row">
                    <div className="card mb-3 ps-0">
                        <div className="row g-0">
                            <div className="col-md-7">
                                <img className="img-fluid rounded-start" src="../img/waffle-2596092_1280.jpg" alt="" />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body p-4">
                                    <h3 className="card-title text-center fw-bold">Registrate</h3>
                                    <div className="card-text p-4">
                                        <Formik>
                                            <Form noValidate onSubmit={formik.handleSubmit}>
                                                {/* NOMBRE */}
                                                <div className="form-floating mb-3">
                                                    <Field className={formik.touched.nombre && Boolean(formik.errors.nombre) ? 'form-control is-invalid' : 'form-control'} name='nombre' onChange={formik.handleChange} id="outlined-basic" placeholder='Nombre' variant="outlined" />
                                                    <div className="invalid-feedback">{formik.errors.nombre}</div>
                                                    <label htmlFor="nombre">Nombre</label>
                                                </div>

                                                {/* APELLIDO */}
                                                <div className="form-floating mb-3">
                                                    <Field className={formik.touched.apellido && Boolean(formik.errors.apellido) ? 'form-control is-invalid' : 'form-control'} name='apellido' onChange={formik.handleChange} id="outlined-basic" placeholder='Apellido' variant="outlined" />
                                                    <div className="invalid-feedback">{formik.errors.apellido}</div>
                                                    <label htmlFor="apellido">Apellido</label>
                                                </div>

                                                {/* CORREO */}
                                                <div className="form-floating mb-3">
                                                    <Field className={formik.touched.correo && Boolean(formik.errors.correo) ? 'form-control is-invalid' : 'form-control'} name='correo' onChange={formik.handleChange} id="outlined-basic" placeholder='Correo electrónico' variant="outlined" />
                                                    <div className="invalid-feedback">{formik.errors.correo}</div>
                                                    <label htmlFor="correo">Correo Electrónico</label>
                                                </div>

                                                {/* NOMBRE USUARIO */}
                                                <div className="form-floating mb-3">
                                                    <Field className={formik.touched.usuario && Boolean(formik.errors.usuario) ? 'form-control is-invalid' : 'form-control'} name='usuario' onChange={formik.handleChange} id="outlined-basic" placeholder='Nombre de Usuario' variant="outlined" />
                                                    <div className="invalid-feedback">{formik.errors.correo}</div>
                                                    <label htmlFor="usuario">Nombre de Usuario</label>
                                                </div>

                                                {/* CONTRASEÑA */}


                                                <div className="input-group has-validation mb-3 ">

                                                    <div className={formik.touched.contrasena && Boolean(formik.errors.contrasena) ? 'form-floating is-invalid' : 'form-floating'}>
                                                        <input
                                                            name='contrasena'
                                                            className={formik.touched.contrasena && Boolean(formik.errors.contrasena) ? 'form-control is-invalid' : 'form-control'}
                                                            id="contrasena"
                                                            type={showPassword ? 'text' : 'password'}
                                                            onChange={formik.handleChange}
                                                            placeholder='contraseña'
                                                        />

                                                        <label htmlFor="contrasena">Contraseña</label>
                                                    </div>
                                                    <button className="btn btn-outline-secondary input-group-text" type="button" onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}>
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </button>
                                                    <div className="invalid-feedback">{formik.errors.contrasena}</div>
                                                </div>

                                                <div style={estilo2} className="py-2">
                                                    <button type="submit" className="button-inicio">Registrarse</button>
                                                </div>
                                            </Form>

                                        </Formik>
                                        <div className="card-text text-center">
                                            <small><a href="/login" htmlFor="basic-url" className="form-label">¿Ya tienes una cuenta? Inicia sesión
                                                aquí</a></small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default Registro;
