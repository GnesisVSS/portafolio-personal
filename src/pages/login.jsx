import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { guardar } from '../api/registro.api';

;

const Login = () => {

    const [mostrarPass, setMostrarPass] = useState(false)

    const estilo2 = {
        textAlign: 'center'
    }

    var fondo = document.getElementById('ind');
    fondo.style.backgroundColor = "white";

    var letras = document.getElementById('nav-titulo');
    letras.style.color = "black";

    var letras2 = document.getElementById('nav-recetas');
    letras2.style.color = "black";

    return (
        <section className='py-5'>
            <div class="container col-sm-8 mx-auto">
                <div class="row">
                    <div class="card mb-3 ps-0">
                        <div class="row g-0">
                            <div class="col-md-7">
                                <img class="img-fluid rounded-start" src="../img/waffle-2596092_1280.jpg" alt="" />
                            </div>
                            <div class="col-md-5">
                                <div class="card-body p-4">
                                    <h3 class="card-title text-center fw-bold">Inicia sesión</h3>
                                    <div class="card-text p-4">
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
                                                    // cambiar la funcion, debe ser el buscar correo o nombre de usuario
                                                    const response = await guardar(values)
                                                    console.log(response)
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                            }}
                                        >
                                            {({ handleChange, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name='correo'
                                                            placeholder="Correo o nombre de Usuario"
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control form-icono"
                                                            type={mostrarPass ? "text" : "password"}
                                                            name='contrasena'
                                                            placeholder="Ingresa tu contraseña"
                                                            onChange={handleChange} />
                                                        <span className='input-group-text icono pointer' role="button" onClick={() =>
                                                            setMostrarPass(!mostrarPass)}>
                                                            {mostrarPass ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye-slash-fill"></i>}
                                                        </span>
                                                    </div>
                                                    <div style={estilo2} class="py-2">
                                                        <button type="submit" class="button-inicio">Iniciar Sesión</button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                        <div class="card-text text-center">
                                            <small><a href="/registro" for="basic-url" class="form-label">¿No tienes una cuenta? Registrate
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

export default Login;
