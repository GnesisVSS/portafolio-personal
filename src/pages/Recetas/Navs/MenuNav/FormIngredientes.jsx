import { ContactSupportOutlined, Photo } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, setIn, useFormik } from 'formik';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormDetalles from './FormDetalles';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import * as Yup from 'yup';


const FormIngredientes = () => {

    const [values, setValues] = useState([]);
    const [page, setPage] = useState(true);

    const handleClick = (event, index) => {
        setPage(!page);
        let valFinal = []

        valFinal = formValues.concat(additionalInputs)
        setValues([...values, valFinal]);
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));
    }


    const handleSubmit = () => {
        additionalInputs.forEach((input, index) => {
            // Validar el campo "nombreExtra"
            const nombreError = validateNombreExtra(input.nombre);
            formik.setFieldError(`nombreExtra-${index}`, nombreError);

            // Validar el campo "cantidadExtra"
            const cantidadError = validateCantidadExtra(input.cantidad);
            formik.setFieldError(`cantidadExtra-${index}`, cantidadError);

            // Validar el campo "unidadExtra"
            const unidadError = validateUnidadExtra(input.unidad);
            formik.setFieldError(`unidadExtra-${index}`, unidadError);
        });

        if (Object.keys(formik.errors).length === 0) {
            formik.handleSubmit(); // Envía el formulario utilizando el método handleSubmit de Formik
        }
    };

    const [formValues, setFormValues] = useState([]);
    const [additionalInputs, setAdditionalInputs] = useState([]);
    const [unidad, setUnidad] = React.useState('');
    const handleAddInput = () => {
        setAdditionalInputs([...additionalInputs, {}]);
    };
    // 2. Crear un controlador de eventos para actualizar el estado cuando se cambie algún input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const index = parseInt(name.slice(-1)) - 1; // obtenemos el índice del objeto en el arreglo
        const field = name.slice(0, -1);
        formik.handleChange(event);
        // obtenemos el nombre del campo del objeto
        setFormValues((prevState) => {
            const newState = [...prevState]; // creamos un nuevo arreglo
            if (newState.length <= index) {
                newState[index] = { ...newState[index], [field]: value }; // actualizamos el campo correspondiente
            } else {
                newState[index][field] = value; // si el objeto ya existe, actualizamos el campo correspondiente
            }
            return newState; // devolvemos el nuevo estado
        });
    };


    // 3. Recuperar los valores del formulario del localStorage y actualizar el estado del componente con esos valores
    useEffect(() => {

        const storedValues = localStorage.getItem('formValues');
        const storedAdditionalInputs = localStorage.getItem('additionalInputs');
        if (storedValues) {
            setFormValues(JSON.parse(storedValues));
        }
        if (storedAdditionalInputs) {
            setAdditionalInputs(JSON.parse(storedAdditionalInputs));
        }
        console.log(additionalInputs)
    }, []);

    // 4. Cuando el usuario hace clic en el botón "Siguiente", guardar el estado actual del formulario en localStorage
    const handleRemoveInput = (indexToRemove) => {
        const filteredInputs = additionalInputs.filter((input, index) => index !== indexToRemove);
        setAdditionalInputs(filteredInputs);
        localStorage.setItem('additionalInputs', JSON.stringify(filteredInputs));

    };

    const [inputErrorMessages, setInputErrorMessages] = useState(Array(additionalInputs.length).fill(''));
    const [inputErrorMessagesCantidad, setInputErrorMessagesCantidad] = useState(Array(additionalInputs.length).fill(''));
    const [inputErrorMessagesUnidad, setInputErrorMessagesUnidad] = useState(Array(additionalInputs.length).fill(''));



    const valSchema = Yup.object().shape({
        nombre1: Yup.string()
            .required('El nombre del ingrediente es obligatorio')
            .min(1, 'El nombre es muy corto')
            .max(120, 'El nombre excede el máximo de caracteres'),
        cantidad1: Yup.number()
            .required('La cantidad es obligatoria')
            .min(1, 'La cantidad es de minimo 1'),
        unidad1: Yup.string()
            .required('La unidad es obligatoria'),
        nombre2: Yup.string()
            .required('El nombre del ingrediente es obligatorio')
            .min(1, 'El nombre es muy corto')
            .max(120, 'El nombre excede el máximo de caracteres'),
        cantidad2: Yup.number()
            .required('La cantidad es obligatoria')
            .min(1, 'La cantidad es de minimo 1'),
        unidad2: Yup.string()
            .required('La unidad es obligatoria'),
        nombre3: Yup.string()
            .required('El nombre del ingrediente es obligatorio')
            .min(1, 'El nombre es muy corto')
            .max(120, 'El nombre excede el máximo de caracteres'),
        cantidad3: Yup.number()
            .required('La cantidad es obligatoria')
            .min(1, 'La cantidad es de minimo 1'),
        unidad3: Yup.string()
            .required('La unidad es obligatoria'),

        // nombreExtra: Yup.string()
        //     .required('El nombre del ingrediente es obligatorio')
        //     .min(1, 'El nombre es muy corto')
        //     .max(120, 'El nombre excede el máximo de caracteres'),
    })

    const formik = useFormik({
        initialValues: {
            nombre: "",
            nombre1: "",
            cantidad1: "",
            unidad1: "",
            nombre2: "",
            cantidad2: "",
            unidad2: "",
            nombre3: "",
            cantidad3: "",
            unidad3: "",
            // nombreExtra: ""
        },
        validationSchema: valSchema,

        onSubmit: () => {
            try {
                setPage(!page);
                let valFinal = []

                valFinal = formValues.concat(additionalInputs)
                setValues([...values, valFinal]);
                localStorage.setItem('formValues', JSON.stringify(formValues));
                localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));

            } catch (error) {
                console.log(error)

            }
        }
    });

    const ChangeNombre = (index, name, event, value) => {
        console.log(event.target.value)
        // Dependiendo del nombre del input cambia el error

        if (name === `nombreExtra-${index}`) {
            const updatedErrorMessages = [...inputErrorMessages];

            if (event.target.value.length < 2 && event.target.value.length > 0) {
                updatedErrorMessages[index] = 'El nombre del ingrediente es muy corto'
            } else if (event.target.value.length > 120) {
                updatedErrorMessages[index] = 'El nombre del ingrediente es muy largo'
            } else if (event.target.value.length <= 120 && event.target.value.length > 0) {
                updatedErrorMessages[index] = ''
            } else {
                updatedErrorMessages[index] = 'El nombre del ingrediente es obligatorio'
            }
            setInputErrorMessages(updatedErrorMessages);
        }
        else if (name === `cantidadExtra-${index}`) {
            const updatedErrorMessages = [...inputErrorMessagesCantidad];
            if (event.target.value < 1 && event.target.value.length > 0) {
                updatedErrorMessages[index] = 'La cantidad es de minimo 1'
            } else if (event.target.value.length > 0) {
                updatedErrorMessages[index] = ''
            } else {
                updatedErrorMessages[index] = 'La cantidad es obligatoria'
            }
            setInputErrorMessagesCantidad(updatedErrorMessages);
        } else if (name === `unidadExtra-${index}`) {
            const updatedErrorMessages = [...inputErrorMessagesUnidad];


            if (value) {
                updatedErrorMessages[index] = '';

            } else {
                updatedErrorMessages[index] = 'Debe seleccionar una unidad';


            }
            setInputErrorMessagesUnidad(updatedErrorMessages);
        }
    }

    const [touchedUnidadExtra, setTouchedUnidadExtra] = useState(false);

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    const [mensajeError, setMensajeError] = useState({});

    // Validaciones de los campos (se genera en esta parte y no automaticamente con formik o la validacion de bootstrap ya que al generar campos extra, para validarlos todos juntos se debe hacer a mano)

    const validaciones = (event) => {
        const { name, value } = event.target;

        // se definen los errores y se copia lo que hay en mensaje error
        const newErrors = { ...mensajeError };

        // Se definen los errores en comun para las distintas variables (nombre,cantidad y unidad de medida)
        const mensajeNombreErrorComun = 'Por favor, ingresa un nombre válido';
        const mensajeCantidadErrorComun = 'Por favor, ingresa un valor de cantidad válido';
        const index = name.split('-')[1];
        // ------------------------------------SECCIÓN NOMBRES--------------------------------------------------
        if (name === 'nombre1' || name === 'nombre2' || name === 'nombre3' || name.startsWith('nombreExtra-')) {
            
            if (value.length < 3 && value.length > 0) {
                // se evalua si el nombre es nombre1, si no es se evalua si es nombre2 y asi sucesivamente
                name === 'nombre1' ? newErrors.nombre1 = mensajeNombreErrorComun
                    :
                    name === 'nombre2' ? newErrors.nombre2 = mensajeNombreErrorComun
                        :
                        name === 'nombre3' ? newErrors.nombre3 = mensajeNombreErrorComun
                            :
                            newErrors[`nombreExtra-${index}`] = mensajeNombreErrorComun;
            } else {
                name === 'nombre1' ? newErrors.nombre1 = newErrors.nombre1 = ''
                    :
                    name === 'nombre2' ? newErrors.nombre2 = newErrors.nombre2 = ''
                        :
                        name === 'nombre3' ? newErrors.nombre3 = newErrors.nombre3 = ''
                            :
                            newErrors[`nombreExtra-${index}`] = ''
            }
            // ------------------------------------SECCIÓN CANTIDAD--------------------------------------------------
        } else if (name === 'cantidad1' || name === 'cantidad2' || name === 'cantidad3' || name.startsWith('cantidadExtra-')) {
            if (value === "0") {
                name === 'cantidad1' ? newErrors.cantidad1 = mensajeCantidadErrorComun
                    :
                    name === 'cantidad2' ? newErrors.cantidad2 = mensajeCantidadErrorComun
                        :
                        name === 'cantidad3' ? newErrors.cantidad3 = mensajeCantidadErrorComun
                            :
                            newErrors[`cantidadExtra-${index}`] = mensajeCantidadErrorComun;
            } else {
                name === 'cantidad1' ? newErrors.cantidad1 = newErrors.cantidad1 = ''
                    :
                    name === 'cantidad2' ? newErrors.cantidad2 = newErrors.cantidad2 = ''
                        :
                        name === 'cantidad3' ? newErrors.cantidad3 = newErrors.cantidad3 = ''
                            :
                            newErrors[`cantidadExtra-${index}`] = ''
            }
        }
        // Se asigna a MensajeError el newError (esto significa que, al obtener por ejemplo el error de mensajeNombreErrorValidoComun, este mensaje se asigna a mensajeError)
        setMensajeError(newErrors);
    }

    const handleChange = (event) => {

        // se obtiene el nombre y valor de cada campo
        const { name, value } = event.target;
        const index = parseInt(name.slice(-1)) - 1; // obtenemos el índice del objeto en el arreglo
        const field = name.slice(0, -1);
        formik.handleChange(event);
        // obtenemos el nombre del campo del objeto
        setFormValues((prevState) => {
            const newState = [...prevState]; // creamos un nuevo arreglo
            if (newState.length <= index) {
                newState[index] = {}; // inicializamos el objeto en el índice si aún no existe
            }
            newState[index][field] = value; // actualizamos el campo correspondiente
            return newState; // devolvemos el nuevo estado
        });
        validaciones(event);

    }

    //!Validacion con bootstrap
    return (
        page ?
            <div>
                <form className="row g-3 needs-validation" noValidate>
                    <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Primera fila de inputs */}

                    <div className='row py-4'>

                        <div className='col'>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                name="nombre1"
                                id="nombre1"
                                value={formValues[0]?.nombre}
                                onChange={handleChange}
                                placeholder="Nombre del ingrediente"
                                minLength="3"
                                required
                            />
                            {mensajeError.nombre1 ? <div className="invalid-feedback">{mensajeError.nombre1}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                        </div>

                        <div className='col'>
                            <input
                                className='form-control form-control-lg'
                                type="number"
                                name={'cantidad1'}
                                id="cantidad"
                                value={formValues[0]?.cantidad}
                                onChange={handleChange}
                                placeholder="Cantidad"
                                required
                                min={1}
                            />
                            {mensajeError.cantidad1 ? <div className="invalid-feedback">{mensajeError.cantidad1}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                        </div>

                        <div className='col'>
                            <select className="form-select form-select-lg" name={'unidad1'}
                                id="unidad" value={formValues[0]?.unidad || ''}
                                onChange={handleChange} required>
                                <option selected disabled value="" >Unidad de Medida</option>
                                <option value={"na"}><em>na</em></option>
                                <option value={"l."}>Litro(l.)</option>
                                <option value={"ml."}>Mililitro(ml.) </option>
                                <option value={"c.c."}>Centímetros cúbicos(c.c.)</option>
                                <option value={"kg."}>Kilogramos (kg.)</option>
                                <option value={"g."}>Gramos (g.) </option>
                                <option value={"lb."}>Libra (lb.)</option>
                                <option value={"oz."}>Onza (oz.)</option>
                                <option value={"c.s."}>Cucharada sopera(c.s.) </option>
                                <option value={"c.c."}>Cucharadita de postre(c.c.) </option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                        </div>

                    </div>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Segunda fila de inputs */}

                    <div className='row py-4'>

                        <div className='col'>
                            <input
                                className='form-control form-control-lg'
                                type="text"
                                name="nombre2"
                                id="nombre2"
                                value={formValues[1]?.nombre}
                                onChange={handleChange}
                                placeholder="Nombre del ingrediente"
                                minLength="3"
                                required
                            />
                            {mensajeError.nombre2 ? <div className="invalid-feedback">{mensajeError.nombre2}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                        </div>

                        <div className='col'>
                            <input
                                className='form-control form-control-lg'
                                type="number"
                                name={'cantidad2'}
                                id="cantidad2"
                                value={formValues[1]?.cantidad}
                                onChange={handleChange}
                                placeholder="Cantidad"
                                required
                                min={1}
                            />
                            {mensajeError.cantidad2 ? <div className="invalid-feedback">{mensajeError.cantidad2}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                        </div>

                        <div className='col'>
                            <select className="form-select form-select-lg" name={'unidad2'}
                                id="unidad1" value={formValues[1]?.unidad || ''}
                                onChange={handleChange} required>
                                <option selected disabled value="" >Unidad de Medida</option>
                                <option value={"na"}><em>na</em></option>
                                <option value={"l."}>Litro(l.)</option>
                                <option value={"ml."}>Mililitro(ml.) </option>
                                <option value={"c.c."}>Centímetros cúbicos(c.c.)</option>
                                <option value={"kg."}>Kilogramos (kg.)</option>
                                <option value={"g."}>Gramos (g.) </option>
                                <option value={"lb."}>Libra (lb.)</option>
                                <option value={"oz."}>Onza (oz.)</option>
                                <option value={"c.s."}>Cucharada sopera(c.s.) </option>
                                <option value={"c.c."}>Cucharadita de postre(c.c.) </option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                        </div>

                    </div>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Tercera fila de inputs */}

                    <div className='row py-4'>

                        <div className='col'>
                            <input
                                className='form-control form-control-lg'
                                type="text"
                                name="nombre3"
                                id="nombre3"
                                value={formValues[3]?.nombre}
                                onChange={handleChange}
                                placeholder="Nombre del ingrediente"
                                minLength="3"
                                required
                            />
                            {mensajeError.nombre3 ? <div className="invalid-feedback">{mensajeError.nombre3}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                        </div>

                        <div className='col'>
                            <input
                                className='form-control form-control-lg'
                                type="number"
                                name={'cantidad3'}
                                id="cantidad3"
                                value={formValues[3]?.cantidad}
                                onChange={handleChange}
                                placeholder="Cantidad"
                                required
                                min={1}
                            />
                            {mensajeError.cantidad3 ? <div className="invalid-feedback">{mensajeError.cantidad3}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                        </div>

                        <div className='col'>
                            <select className="form-select form-select-lg" name={'unidad3'}
                                id="unidad3" value={formValues[2]?.unidad || ''}
                                onChange={handleChange} required>
                                <option selected disabled value="" >Unidad de Medida</option>
                                <option value={"na"}><em>na</em></option>
                                <option value={"l."}>Litro(l.)</option>
                                <option value={"ml."}>Mililitro(ml.) </option>
                                <option value={"c.c."}>Centímetros cúbicos(c.c.)</option>
                                <option value={"kg."}>Kilogramos (kg.)</option>
                                <option value={"g."}>Gramos (g.) </option>
                                <option value={"lb."}>Libra (lb.)</option>
                                <option value={"oz."}>Onza (oz.)</option>
                                <option value={"c.s."}>Cucharada sopera(c.s.) </option>
                                <option value={"c.c."}>Cucharadita de postre(c.c.) </option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                        </div>

                    </div>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/*-----------------Inputs generados dinámicamente--------------------*/}

                    <div>

                        {additionalInputs.map((input, index) => (

                            // eslint-disable-next-line react/jsx-key
                            <div className='row py-4 align-items-center'>

                                <div className='col'>
                                    <input
                                        key={index}
                                        className='form-control form-control-lg'
                                        type="text"
                                        name={`nombreExtra-${index}`}
                                        value={input.nombre || ''}
                                        placeholder="Nombre del ingrediente"
                                        minLength="3"
                                        required
                                        onChange={(event) => {
                                            validaciones(event);
                                            const updatedInputs = [...additionalInputs];
                                            updatedInputs[index].nombre = event.target.value;
                                            setAdditionalInputs(updatedInputs);
                                        }}
                                    />
                                    {mensajeError[`nombreExtra-${index}`] ? <div className="invalid-feedback">{mensajeError[`nombreExtra-${index}`]}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                                </div>

                                <div className='col'>
                                    <input
                                        key={index}
                                        className='form-control form-control-lg'
                                        type="number"
                                        name={`cantidadExtra-${index}`}
                                        id={`cantidadExtra-${index}`}
                                        value={input.cantidad || ''}
                                        placeholder="Nombre del ingrediente"
                                        min={1}
                                        required
                                        onChange={(event) => {
                                            validaciones(event);
                                            const updatedInputs = [...additionalInputs];
                                            updatedInputs[index].cantidad = event.target.value;
                                            setAdditionalInputs(updatedInputs);
                                        }}
                                    />
                                    {mensajeError[`cantidadExtra-${index}`] ? <div className="invalid-feedback">{mensajeError[`cantidadExtra-${index}`]}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                                </div>
                                <div className='col'>
                                    <select className="form-select form-select-lg" name={`unidadExtra-${index}`}
                                        value={input.unidad || ''}
                                        onChange={(event) => {
                                            validaciones(event);
                                            const updatedInputs = [...additionalInputs];
                                            updatedInputs[index].unidad = event.target.value;
                                            setAdditionalInputs(updatedInputs);
                                        }} required>
                                        <option selected disabled value="" >Unidad de Medida</option>
                                        <option value={"na"}><em>na</em></option>
                                        <option value={"l."}>Litro(l.)</option>
                                        <option value={"ml."}>Mililitro(ml.) </option>
                                        <option value={"c.c."}>Centímetros cúbicos(c.c.)</option>
                                        <option value={"kg."}>Kilogramos (kg.)</option>
                                        <option value={"g."}>Gramos (g.) </option>
                                        <option value={"lb."}>Libra (lb.)</option>
                                        <option value={"oz."}>Onza (oz.)</option>
                                        <option value={"c.s."}>Cucharada sopera(c.s.) </option>
                                        <option value={"c.c."}>Cucharadita de postre(c.c.) </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Por favor, selecciona una unidad de medida
                                    </div>
                                </div>
                                <div className='col-sm-1'>
                                    <Button variant="text" onClick={() => handleRemoveInput(index)} sx={{ color: "red" }} startIcon={<RemoveCircleIcon />}></Button>
                                </div>

                            </div>
                        ))}
                        <Button variant="text" onClick={handleAddInput} style={{ color: "#00A087" }} startIcon={<AddCircleIcon />}>Agregar otro</Button>
                        <div style={{ textAlign: "right" }}>
                            <button type="submit" className="button-inicio">
                                {/* <span >Loading...</span> */}
                                <div className="visually-hidden" id='loading' role="status" >
                                    <div className="spinner-border spinner-border-sm" role="status" />
                                </div>

                                <a className="" id='iniciar' onClick={handleClick}>Cargar Receta</a>
                            </button>
                        </div>
                    </div>
                </form >

            </div > : <FormDetalles datosIngredientes={values} />

    );
}

export default FormIngredientes;
