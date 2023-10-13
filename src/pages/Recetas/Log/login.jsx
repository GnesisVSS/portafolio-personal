import React, { useState } from 'react';
import { Field, Form, Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { carga } from '../../../funciones/carga';
import NavbarRecetas from './../Navs/navbar-recetas';
import { Alert, Box, IconButton } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { obtenerUsuario } from '../../../api/registro.api';
import * as Yup from 'yup';


const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const estilo2 = {
        textAlign: 'center'
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const history = useNavigate();


    const [usuario, setUsuario] = useState("");
    async function loadRecetas() {
        const response = await obtenerUsuario()
        setUsuario(response.data)

        // setImage(new Blob([response.data], { type: "image/jpeg" }));
    }

    const valSchema = Yup.object().shape({
        correo: Yup.string()
            .email('Ingresa un correo válido')
            .required('El correo es obligatorio'),
        contrasena: Yup.string()
            .required('La contraseña es obligatoria'),
    })

    const formik = useFormik({
        initialValues: {
            correo: "",
            contrasena: ""
        },
        validationSchema: valSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                await carga(values)
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (

        <section className='py-5'>
            <NavbarRecetas />
            <div className="container col-sm-8 mx-auto py-4">
                <div className="row">
                    <div className="card mb-3 ps-0">
                        <div className="row g-0">
                            <div className="col-md-7">
                                <img className="img-fluid rounded-start" src="../img/waffle-2596092_1280.jpg" alt="" />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body p-4">
                                    <h3 className="card-title text-center fw-bold">Inicia sesión</h3>
                                    <Alert severity="info">Al ser un demo las credenciales son:
                                        <div className='col'>
                                            <li style={{ textAlign: 'start' }}><strong>Correo Electrónico:</strong> root@root.cl</li>
                                            <li style={{ textAlign: 'start' }}> <strong>Pass:</strong> root</li>
                                        </div>
                                    </Alert>
                                    <div>
                                        <div className="card-text p-4">
                                            <Formik>
                                                <Form noValidate onSubmit={formik.handleSubmit} >
                                                    <div className="form-floating mb-3">
                                                        <Field className={formik.touched.correo && Boolean(formik.errors.correo) ? 'form-control is-invalid' : 'form-control'} name='correo' onChange={formik.handleChange} id="outlined-basic" placeholder='Correo electrónico' variant="outlined" />
                                                        <div className="invalid-feedback">{formik.errors.correo}</div>
                                                        <label htmlFor="correo">Correo electrónico</label>
                                                    </div>

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

                                                    {/* <div className="input-group has-validation ">
                                                        
                                                        <div className={formik.touched.contrasena && Boolean(formik.errors.contrasena) ? 'form-floating is-invalid' : 'form-floating'}>
                                                            <input type="text" className={formik.touched.contrasena && Boolean(formik.errors.contrasena) ? 'form-control is-invalid' : 'form-control'} id="floatingInputGroup2" placeholder="Username" required/>
                                                                <label htmlFor="floatingInputGroup2">Username</label>
                                                        </div>
                                                        <span className="input-group-text">@</span>
                                                        <div className="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div> */}

                                                    {/* 
                                                        <div className="input-group mb-3">
                                                            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                                                <InputLabel name='contrasena' htmlFor="contrasena">Contraseña</InputLabel>
                                                                <OutlinedInput
                                                                    id="contrasena"
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    onChange={handleChange}
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                aria-label="toggle password visibility"
                                                                                onClick={handleClickShowPassword}
                                                                                onMouseDown={handleMouseDownPassword}
                                                                                edge="end"
                                                                            >
                                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    }
                                                                    label="Contraseña"

                                                                />
                                                            </FormControl>
                                                        </div> */}
                                                    <div style={estilo2} className="py-2">

                                                        <button type="submit" className="button-inicio" >
                                                            {/* <span >Loading...</span> */}
                                                            <div className="visually-hidden" id='loading' role="status" >
                                                                <div className="spinner-border spinner-border-sm" role="status" />
                                                            </div>

                                                            <span className="" id='iniciar'>Iniciar sesión</span>
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>

                                            <hr />
                                            <div className='visually-hidden' id='alerta'>
                                                <p className="text-danger" ><small>La contraseña no es correcta. Compruébala.</small></p>
                                            </div>
                                            <div className='visually-hidden' id='alerta-2'>
                                                <p className="text-danger" ><small>El usuario no existe, por favor comprueba el correo electronico y vuelve a intentarlo.</small></p>
                                            </div>
                                            <div className="card-text text-center">
                                                <small><a href="/registro" htmlFor="basic-url" className="form-label">¿No tienes una cuenta? Registrate
                                                    aquí</a></small>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </section >

    );


}

export default Login;
