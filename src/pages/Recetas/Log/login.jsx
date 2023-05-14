import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { UNSAFE_useScrollRestoration, useNavigate } from 'react-router-dom';
import { carga } from '../../../funciones/carga';
import NavbarRecetas from './../Navs/navbar-recetas';
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { obtenerUsuario } from '../../../api/registro.api';

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
                                            <li style={{ textAlign: 'start' }}><strong>Correo Electrónico:</strong> root</li>
                                            <li style={{ textAlign: 'start' }}> <strong>Pass:</strong> root</li>
                                        </div>
                                    </Alert>
                                    <div className="card-text p-4">
                                        <Formik
                                            initialValues={{
                                                correo: "",
                                                contrasena: ""
                                            }}
                                            onSubmit={async (values) => {
                                                console.log(values)
                                                try {
                                                    const response = await carga(values)
                                                    console.log(response)
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                            }}
                                        >
                                            {({ handleChange, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit} >
                                                    <div className="input-group mb-3">
                                                        <TextField fullWidth sx={{ m: 1 }} name='correo' onChange={handleChange} id="outlined-basic" label="Correo electrónico" variant="outlined" />
                                                    </div>

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
                                                    </div>
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
                                            )}
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

                </div >
            </div >
        </section >

    );


}

export default Login;
