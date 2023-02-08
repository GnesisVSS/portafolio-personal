import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { guardar } from '../api/registro.api';

const Registro = () => {

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
                                    <h3 class="card-title text-center fw-bold">Registrate</h3>
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
                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name='nombre'
                                                            placeholder="Ingresa tu nombre"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>apellido</label> */}
                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name='apellido'
                                                            placeholder="Ingresa tu apellido"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>correo</label> */}
                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name='correo'
                                                            placeholder="Ingresa tu correo"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>usuario</label> */}
                                                    <div class="input-group mb-3">
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name='usuario'
                                                            placeholder="Ingresa tu nombre de usuario"
                                                            onChange={handleChange} />
                                                    </div>


                                                    {/* <label>contrasena</label> */}
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
                                                        <button type="submit" class="button-inicio">Registrarse</button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                        <div class="card-text text-center">
                                            <small><a href="/login" for="basic-url" class="form-label">¿Ya tienes una cuenta? Inicia sesión
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
