
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Field, Form, Formik, useFormik } from 'formik';
import FormIngredientes from './FormIngredientes';
import Photo from '../../../Photo';
import { registroDetalleRecetaUsuario, registroIngredientes } from '../../../../../api/receta.api';
import * as Yup from 'yup';

const FormDetalles = (datosIngredientes, props) => {
    const [valorInput, setValorInput] = useState('');
    const [mensajeError, setMensajeError] = useState({});

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
        categoria: Yup.string()
            .required('La categoría es obligatoria')
            .notOneOf([''], 'Debes seleccionar una opción'),
        tiempoPreparacion: Yup.number()
            .required('El tiempo de preparacion es obligatorio')
            .min(1, 'El tiempo minimo de preparación es de 1 min'),
        porciones: Yup.number()
            .required('Las porciones son obligatorias')
            .min(1, 'El minimo de porciones es de 1')
            .max(100, 'El maximo de porciones es de 100'),
        dificultad: Yup.string()
            .required('La dificultad es obligatoria')
            .notOneOf([''], 'Debes seleccionar una opcion'),
    })


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


    const handleChangeSelect = (event, formik) => {
        const { name, value } = event.target;

        const selectElement = document.getElementsByName(name)[0]; // Obtener el elemento select del formulario

        // Recorrer las opciones y buscar el índice correspondiente al valor seleccionado
        for (let i = 0; i < selectElement.options.length; i++) {
            // si el valor de la opcion seleccionada es igual al valor traido anteriormente entra en el ciclo
            if (selectElement.options[i].value === value) {
                // se define como el indexSeleccionado a i (valor que se define para el for)
                const selectedIndex = i;
                // si este numero es diferente de 0 entra en el ciclo
                if (selectedIndex !== 0) {
                    // se esconde el primer elemento del select al seleccionar un valor diferente al default que es de indice 0
                    selectElement.options[0].style.display = 'none';
                }
                break;
            }
        }
        // se llama a la funcion handleChange 
        formik.handleChange(event);
    }

    return (
        page ? <FormIngredientes /> :
            <Formik>

                <div>
                    <Form noValidate onSubmit={formik.handleSubmit}>
                        <h1 className='text-focus-in titulo-inicio'>Detalles</h1>
                        <div className='py-4'>
                            {/* NOMBRE */}
                            <div className="form-floating mb-3">
                                <Field type="text" onChange={formik.handleChange} name="nombre" placeholder="Nombre" id="nombre" className={formik.touched.nombre && Boolean(formik.errors.nombre) ? 'form-control is-invalid' : 'form-control'} />
                                <div className="invalid-feedback">{formik.errors.nombre}</div>
                                <label htmlFor="nombre">Nombre</label>
                            </div>

                            {/* DESCRIPCIÓN */}
                            <div className="form-floating mb-3">
                                <Field onChange={formik.handleChange} type="text" name="descripcion" placeholder="Descripción" id="descripcion" className={formik.touched.descripcion && Boolean(formik.errors.descripcion) ? 'form-control is-invalid' : 'form-control'} />
                                <div className="invalid-feedback">{formik.errors.descripcion}</div>
                                <label htmlFor="nombre">Descripción</label>
                            </div>

                            {/* PREPARACIÓN */}
                            <div className="form-floating mb-3">
                                <Field as="textarea" onChange={formik.handleChange} type="text" name="preparacion" placeholder="Preparación" id="preparacion" className={formik.touched.preparacion && Boolean(formik.errors.preparacion) ? 'form-control is-invalid' : 'form-control'} />
                                <div className="invalid-feedback">{formik.errors.preparacion}</div>
                                <label htmlFor="nombre">Preparación</label>
                            </div>

                            {/* CATEGORÍA */}
                            <div className="form-floating mb-3">
                                <Field as="select" onChange={(event) => {handleChangeSelect(event, formik)}} type="text" name="categoria" placeholder="Categoría" id="categoria" className={formik.touched.categoria && Boolean(formik.errors.categoria) ? 'form-control is-invalid' : 'form-control'} >
                                    <option selected>Selecciona una categoría</option>
                                    <option value="1">Desayuno</option>
                                    <option value="2">Almuerzo</option>
                                    <option value="3">Postres</option>
                                </Field>
                                <div className="invalid-feedback">{formik.errors.categoria}</div>
                                <label htmlFor="nombre">Categoría</label>

                            </div>

                            {/* TIEMPO DE PREPARACIÓN */}
                            <div className="form-floating mb-3">
                                <Field onChange={formik.handleChange} type="number" name="tiempoPreparacion" placeholder="Tiempo de Preparación" id="tiempoPreparacion" className={formik.touched.tiempoPreparacion && Boolean(formik.errors.tiempoPreparacion) ? 'form-control is-invalid' : 'form-control'} />
                                <div className="invalid-feedback">{formik.errors.tiempoPreparacion}</div>
                                <label htmlFor="nombre">Tiempo de Preparación</label>
                            </div>

                            {/* PORCIONES */}
                            <div className="form-floating mb-3">
                                <Field onChange={formik.handleChange} type="number" name="porciones" placeholder="Número de Porciones" id="porciones" className={formik.touched.porciones && Boolean(formik.errors.porciones) ? 'form-control is-invalid' : 'form-control'} />
                                <div className="invalid-feedback">{formik.errors.porciones}</div>
                                <label htmlFor="nombre">Número de Porciones</label>
                            </div>

                            {/* DIFICULTAD */}
                            <div className="form-floating mb-3">
                                <Field as="select" onChange={(event) => {handleChangeSelect(event, formik)}} type="text" name="dificultad" placeholder="Dificultad" id="dificultad" className={formik.touched.dificultad && Boolean(formik.errors.dificultad) ? 'form-control is-invalid' : 'form-control'} >
                                    <option selected>Selecciona una dificultad</option>
                                    <option value="1">Fácil</option>
                                    <option value="2">Media</option>
                                    <option value="3">Difícil</option>
                                </Field>
                                <div className="invalid-feedback">{formik.errors.dificultad}</div>
                                <label htmlFor="nombre">Dificultad</label>
                            </div>

                            {/* FOTO */}
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




                    </Form>
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
            </Formik>



    );
}

export default FormDetalles;
