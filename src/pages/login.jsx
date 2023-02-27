import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { carga } from '../funciones/carga';
const Login = () => {

    const [mostrarPass, setMostrarPass] = useState(false)

    const estilo2 = {
        textAlign: 'center'
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const history = useNavigate();


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
                                    <h3 className="card-title text-center fw-bold">Inicia sesión</h3>
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
                                                    // history('/recetasHome');
                                                    console.log(response)
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                            }}
                                        >
                                            {({ handleChange, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div className="input-group mb-3">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name='correo'
                                                            placeholder="Ingresa tu correo"
                                                            onChange={handleChange}
                                                        />
                                                    </div>

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
