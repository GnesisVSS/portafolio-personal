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
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name='nombre'
                                                            placeholder="Ingresa tu nombre"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>apellido</label> */}
                                                    <div className="input-group mb-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name='apellido'
                                                            placeholder="Ingresa tu apellido"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>correo</label> */}
                                                    <div className="input-group mb-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name='correo'
                                                            placeholder="Ingresa tu correo"
                                                            onChange={handleChange}
                                                        />
                                                    </div>


                                                    {/* <label>usuario</label> */}
                                                    <div className="input-group mb-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name='usuario'
                                                            placeholder="Ingresa tu nombre de usuario"
                                                            onChange={handleChange} />
                                                    </div>


                                                    {/* <label>contrasena</label> */}
                                                    <div className="input-group mb-3">
                                                        <input
                                                            className="form-control form-icono"
                                                            type={mostrarPass ? "text" : "password"}
                                                            name='contrasena'
                                                            placeholder="Ingresa tu contraseña"
                                                            onChange={handleChange} />
                                                        <span className='input-group-text icono pointer' role="button" onClick={() =>
                                                            setMostrarPass(!mostrarPass)}>
                                                            {mostrarPass ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
                                                        </span>
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
