import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { guardar } from '../../../api/registro.api';
import NavbarRecetas from '../Navs/navbar-recetas';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
                                        <Formik
                                            initialValues={{
                                                nombre: "",
                                                apellido: "",
                                                correo: "",
                                                usuario: "",
                                                contrasena: ""
                                            }}
                                            onSubmit={async (values) => {
                                                console.log(values)
                                                try {
                                                    const response = await guardar(values)
                                                    console.log(response)
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                            }}
                                        >
                                            {({ handleChange, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    {/* <label>nombre</label> */}
                                                    <div className="input-group mb-3">
                                                        <TextField fullWidth sx={{ m: 1 }}
                                                            name='nombre'
                                                            onChange={handleChange}
                                                            id="outlined-basic"
                                                            label="Nombre"
                                                            variant="outlined" />
                                                    </div>


                                                    {/* <label>apellido</label> */}
                                                    <div className="input-group mb-3">
                                                        <TextField fullWidth sx={{ m: 1 }}
                                                            name='apellido'
                                                            onChange={handleChange}
                                                            id="outlined-basic"
                                                            label="Apellido"
                                                            variant="outlined" />

                                                    </div>


                                                    {/* <label>correo</label> */}
                                                    <div className="input-group mb-3">
                                                        <TextField fullWidth sx={{ m: 1 }}
                                                            name='correo'
                                                            onChange={handleChange}
                                                            id="outlined-basic"
                                                            label="Correo Electrónico"
                                                            variant="outlined" />
                                                    </div>


                                                    {/* <label>usuario</label> */}
                                                    <div className="input-group mb-3">
                                                        <TextField fullWidth sx={{ m: 1 }}
                                                            name='usuario'
                                                            onChange={handleChange}
                                                            id="outlined-basic"
                                                            label="Nombre de Usuario"
                                                            variant="outlined" />
                                                    </div>


                                                    {/* <label>contrasena</label> */}
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
                                                        <button type="submit" className="button-inicio">Registrarse</button>
                                                    </div>
                                                </Form>
                                            )}
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
