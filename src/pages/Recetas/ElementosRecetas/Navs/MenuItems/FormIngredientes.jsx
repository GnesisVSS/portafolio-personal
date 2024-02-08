import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormDetalles from './FormDetalles';


const FormIngredientes = () => {

    const [formValues, setFormValues] = useState([]);
    const [additionalInputs, setAdditionalInputs] = useState([]);
    const [values, setValues] = useState([]);
    const [page, setPage] = useState(true);
    const [mensajeError, setMensajeError] = useState({});

    // Para manejo de las cantidades con su checkbox, se hace de manera individual para el correcto funcionamiento, de lo contrario al tomar el check de la primera cantidad tambien tomaría de la segunda
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);


    const [cambioCantidad1, setCambioCantidad1] = useState('');
    const [cambioCantidad2, setCambioCantidad2] = useState('');
    const [cambioCantidad3, setCambioCantidad3] = useState('');
    // Manejo del click del botón "siguente"
    const handleClick = () => {
        //  cambio de pagina, se toma el valor de page(true) y cambia a falso para que en el return condicional de mas abajo llame al componente FormDetalles
        setPage(!page);

        // se inicializa el valor final de el form en un arreglo vacío para almacenar cada valor de los inputs ingresados por el usuario
        let valFinal = []
        if (disabled) {
            setFormValues((prevState) => {
                // Se clona el estado anterior para no mutar directamente el estado
                const newState = [...prevState];

                // Se verifica si el objeto en la posición 0 ya existe
                if (!newState[0]) {
                    newState[0] = {}; // Si no existe, se inicializa
                }

                // Se establece la propiedad cantidad en "0"
                newState[0].cantidad = "0";

                return newState; // Devolvemos el nuevo estado
            });
        }
        // el valor final, toma el valor de lo obtenido del formValues (arreglo con los valores ingresados por el usuario) concatenado a los valores de los inputs adicionales
        valFinal = formValues.concat(additionalInputs)

        // se le da como valor al Values, los elementos que ya tenia en el arreglo, mas, lo que hay en valFinal declarado anteriormente
        // este proceso es para luego enviarle estos valores finales al componente FormDetalles como props, se dejan en un valor a parte ya que solo en esta variable se juntan los valores en un solo arreglo de los inputs adicionales y los inputs por defecto

        setValues([...values, valFinal]);

        // se crean las keys con sus values en el localStorage para mantener los datos desde el FormValues (sus valores se determinan en el HandleChange) y los additionalInputs (sus valores se determinan en handleAddInput)
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));
    }
    const [checkboxStatesExtra, setCheckboxStatesExtra] = useState([]);

    const handleAddInput = () => {

        // se le da como valor al additionalInputs los valores que ya tenia, mas los valores ingresados después como un objeto dentro de un arreglo
        setAdditionalInputs([...additionalInputs, {}]);
        setCheckboxStatesExtra((prevState) => {
            const newState = [...prevState];
            newState.push(true); // Agregamos true al final del arreglo
            return newState;
        });
    };

    useEffect(() => {
        // Se obtienen los valores de lo que haya en el localStorage en estas dos keys, para que al volver desde la pagina dos (formDetalles) se muestren los valores previamente ingresados por el usuario
        const storedValues = localStorage.getItem('formValues');
        const storedAdditionalInputs = localStorage.getItem('additionalInputs');

        // se evalua si en las keys recuperadas anteriormente hay datos, en caso de haber datos se les asigna a los inputs correspondientes al valor ingresado
        if (storedValues) {
            setFormValues(JSON.parse(storedValues));
        }
        if (storedAdditionalInputs) {
            setAdditionalInputs(JSON.parse(storedAdditionalInputs));
        }
    }, []);

    // funcion para remover los inputs generados por el usuario al presionar el boton para eliminarlos
    // recibe el index en el que se encuentra el input extra(esto se obtendrá al recorrer la variable additionalInputs)
    const handleRemoveInput = (indexToRemove) => {
        // se filtra el arreglo de los inputs adicionales recibiendo el valor del input y el indice del input
        // para filtrar verifica si el indice es diferente a el indice recibido al llamar a la función
        const filteredInputs = additionalInputs.filter((input, index) => index !== indexToRemove);
        // en caso de ser diferente se le da este valor del filter al additionalInputs para que lo elimine de la vista también
        setAdditionalInputs(filteredInputs);
        const storedData = JSON.parse(localStorage.getItem('additionalInputs'));
        storedData.splice(1, indexToRemove); // Elimina 1 elemento en la posición 1 del arreglo obtenido del key "additionalInputs"
        localStorage.setItem('additionalInputs', JSON.stringify(storedData)); //se le da como valor a esta key el nuevo arreglo luego de eliminar el input necesario
    };

    (() => {
        'use strict'

        // Se seleccionan todas las clases .needs-validation y se guardan en una variable
        const forms = document.querySelectorAll('.needs-validation')

        // Convierte en forms en un arreglo
        Array.from(forms).forEach(form => {
            // por cada uno de los elementos dentro del forms se le añade un evento submit (para que valide al hacer el submit)
            form.addEventListener('submit', event => {
                // se verifica si el formulario es valido, en caso de no ser valido entra en el ciclo if
                if (!form.checkValidity()) {
                    // esto evita que se envíe el formulario
                    event.preventDefault()
                    // evita la propagación del evento, no se propaga a los elementos del DOM
                    event.stopPropagation()
                }

                // Al pasar la validacion se les añade la clase was-validated para definir el estilo correspondiente de bootstrap
                form.classList.add('was-validated')
                // se define false para que primero valide cada elemento del formulario de manera individual y solo se ejecute esta validacion primero
                // esto lo define como la fase de burbugeo y no de captura, es decir,evita que se ejecuten todas las funciones del padre de una vez
            }, false)
        })
    })()

    // Validaciones de los campos (se genera en esta parte y no automaticamente con formik o la validacion de bootstrap ya que al generar campos extra, para validarlos todos juntos se debe hacer a mano)

    const validaciones = (event) => {
        // se llama al nombre y al valor del elemento del DOM, en este caso de cada input
        const { name, value } = event.target;

        // se definen los errores y se copia lo que hay en mensaje error
        const newErrors = { ...mensajeError };

        // Se definen los errores en comun para las distintas variables (nombre,cantidad y unidad de medida)
        const mensajeNombreErrorComun = 'Por favor, ingresa un nombre válido';
        const mensajeCantidadErrorComun = 'Por favor, ingresa un valor de cantidad válido';
        // para los campos extra se define el index como el nombre del input, que se separa al encontrar un -, y accede al primer elemento del array
        // se accede al elemento 1, ya que el split genera un arreglo con las separaciones, es decir queda como por ejemplo[nombreExtra,1]
        const index = name.split('-')[1];

        // ------------------------------------SECCIÓN NOMBRES--------------------------------------------------
        if (name === 'nombre1' || name === 'nombre2' || name === 'nombre3' || name.startsWith('nombreExtra-')) {

            if (value.length < 3 && value.length > 0) {
                // se evalua si el nombre es nombre1, si no es se evalua si es nombre2 y asi sucesivamente
                // en caso de cumplir la validacion, el error del nombre1 es igual al mensajeNombreErrorComun
                name === 'nombre1' ? newErrors.nombre1 = mensajeNombreErrorComun
                    :
                    name === 'nombre2' ? newErrors.nombre2 = mensajeNombreErrorComun
                        :
                        name === 'nombre3' ? newErrors.nombre3 = mensajeNombreErrorComun
                            :
                            newErrors[`nombreExtra-${index}`] = mensajeNombreErrorComun;

            } else { //En caso de no cumplirse ninguno de los errores de arriba, el error se asigna a vacío para que no muestre nada
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
            if (value <= 0 && value !== "0" && disabled === false) {
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

    // funcion para controlar el cambio de valores del Select
    const handleChangeSelect = (event) => {
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
        handleChange(event);
    }

    const handleChange = (event) => {

        // se obtiene el nombre y valor de cada campo
        const { name, value } = event.target;
        if (name === 'cantidad1') {
            setCambioCantidad1(value);
        } else if (name === 'cantidad1') {
            setCambioCantidad2(value);
        } else if (name === 'cantidad3') {
            setCambioCantidad3(value)
        }

        // se define como index a el numero dentro de name, se extrae el ultimo caracter de la cadena name (que es un numero) y se le resta 1 a este numero
        const index = parseInt(name.slice(-1)) - 1;
        // se define como field a el nombre, comenzando por el primer elemento de nombre y excluyendo el ultimo caracter de la cadena de texto
        const field = name.slice(0, -1);

        //  se define como valor del formVlues tomando el estado anterior y actualizandolo
        setFormValues((prevState) => {
            // se define como newState el estado anterior dentro de un arreglo
            const newState = [...prevState];
            // si el largo del arreglo newState es menor o igual al index creado anteriormente, entra en el ciclo
            // verifica si existe un objeto en esta posicion
            if (newState.length <= index) {
                newState[index] = {}; // inicializamos el objeto en el índice si aún no existe
            } else {
                newState[index][field] = value; // actualizamos el campo correspondiente
            }

            return newState; // devolvemos el nuevo estado
        });


        // se llama a validaciones
        validaciones(event);
    }

    const handleCheckboxChange = () => {

        setDisabled(!disabled);

    };

    const handleCheckboxChange2 = () => {

        setDisabled2(!disabled2);

    };

    const handleCheckboxChange3 = () => {

        setDisabled3(!disabled3);

    };

    const [checkboxStates, setCheckboxStates] = useState([]);
    // const [checkboxStatesExtra, setCheckboxStatesExtra] = useState([]);

    const handleToggleDisabled = (index) => {

        setCheckboxStatesExtra((prevState) => {
            // se define como newState el estado anterior dentro de un arreglo
            const newState = [...prevState];
            // si el largo del arreglo newState es menor o igual al index creado anteriormente, entra en el ciclo
            // verifica si existe un objeto en esta posicion
            if (newState.length <= index) {
                newState[index] = {}; // inicializamos el objeto en el índice si aún no existe
            } else {
                newState[index] = value; // actualizamos el campo correspondiente
            }

            return newState; // devolvemos el nuevo estado
        });
    };
    const handleCheckboxChangeExtra = (index) => {
        setCheckboxStatesExtra((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // Cambia al contrario del valor actual
            return newState;
        });
    };
    console.log(checkboxStatesExtra[0]);

    return (
        // se verifica si page es verdadero, si no, cambia a la siguente pagina
        page ?
            <div>
                <form className="row g-3 needs-validation" noValidate onSubmit={handleClick}>
                    <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Primera fila de inputs */}

                    <div className='row py-2'>

                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="nombre1"
                                    id="nombre1"
                                    value={formValues[0]?.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre del ingrediente"
                                    minLength="3"
                                    required
                                />
                                <label htmlFor="nombre1" style={{ color: 'grey' }}>Nombre Ingrediente</label>
                                {mensajeError.nombre1 ? <div className="invalid-feedback">{mensajeError.nombre1}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                            </div>
                        </div>


                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="number"
                                    name='cantidad1'
                                    id="cantidad1"
                                    value={disabled ? "0" : formValues[0]?.cantidad}
                                    onChange={handleChange}
                                    placeholder="Cantidad"
                                    required
                                    min={disabled ? 0 : 0.1}
                                    step={0.1}
                                    disabled={disabled}
                                />
                                <label htmlFor="cantidad1" style={{ color: 'grey' }}>Cantidad</label>
                                {mensajeError.cantidad1 ? <div className="invalid-feedback">{mensajeError.cantidad1}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                                <div className="form-check mt-4">
                                    <input className="form-check-input" onChange={handleCheckboxChange} type="checkbox" id="gridCheck1" checked={formValues[0]?.cantidad === "0" || disabled ? true : false} required={cambioCantidad1 === '' ? true : false} disabled={cambioCantidad1 === '' ? false : true} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        No Aplica
                                    </label>
                                    {cambioCantidad1 === '' ? <div className="invalid-feedback" /> : ''}
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-floating'>
                                <select className="form-select" name={'unidad1'}
                                    id="unidad1" value={formValues[0]?.unidad || ''}
                                    onChange={handleChangeSelect} required>
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
                                    <option value={"Tazas"}>Tazas </option>
                                    <option value={"A gusto"}>A gusto </option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecciona una unidad de medida
                                </div>
                                <label htmlFor="unidad1" style={{ color: 'grey' }}>Unidad de Medida</label>
                            </div>

                        </div>

                    </div>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Segunda fila de inputs */}

                    <div className='row py-4'>

                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="nombre2"
                                    id="nombre2"
                                    value={formValues[1]?.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre del ingrediente"
                                    minLength="3"
                                    required
                                />
                                <label htmlFor="nombre2" style={{ color: 'grey' }}>Nombre Ingrediente</label>
                                {mensajeError.nombre2 ? <div className="invalid-feedback">{mensajeError.nombre2}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="number"
                                    name={'cantidad2'}
                                    id="cantidad2"
                                    value={disabled2 ? "0" : formValues[1]?.cantidad}
                                    onChange={handleChange}
                                    placeholder="Cantidad"
                                    required
                                    min={disabled2 ? 0 : 0.1}
                                    step={0.1}
                                    disabled={disabled2}
                                />
                                <label htmlFor="cantidad2" style={{ color: 'grey' }}>Cantidad</label>
                                {mensajeError.cantidad2 ? <div className="invalid-feedback">{mensajeError.cantidad2}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                                <div className="form-check mt-4">
                                    <input className="form-check-input" onChange={handleCheckboxChange2} type="checkbox" id="gridCheck1" checked={formValues[1]?.cantidad === "0" || disabled2 ? true : false} required={cambioCantidad2 === '' ? true : false} disabled={cambioCantidad2 === '' ? false : true} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        No Aplica
                                    </label>
                                    {cambioCantidad2 === '' ? <div className="invalid-feedback" /> : ''}
                                </div>

                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-floating'>
                                <select className="form-select" name={'unidad2'}
                                    id="unidad2" value={formValues[1]?.unidad || ''}
                                    onChange={handleChangeSelect} required>
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
                                    <option value={"Tazas"}>Tazas </option>
                                    <option value={"A gusto"}>A gusto </option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecciona una unidad de medida
                                </div>
                                <label htmlFor="unidad2" style={{ color: 'grey' }}>Unidad de Medida</label>
                            </div>

                        </div>

                    </div>

                    {/*---------------------------------------------------------------------------------------------*/}
                    {/* Tercera fila de inputs */}

                    <div className='row py-4'>

                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="nombre3"
                                    id="nombre3"
                                    value={formValues[2]?.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre del ingrediente"
                                    minLength="3"
                                    required
                                />
                                <label htmlFor="nombre3" style={{ color: 'grey' }}>Nombre Ingrediente</label>
                                {mensajeError.nombre3 ? <div className="invalid-feedback">{mensajeError.nombre3}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="number"
                                    name={'cantidad3'}
                                    id="cantidad3"
                                    value={disabled3 ? "0" : formValues[2]?.cantidad}
                                    onChange={handleChange}
                                    placeholder="Cantidad"
                                    required
                                    min={disabled3 ? 0 : 0.1}
                                    step={0.1}
                                    disabled={disabled3}
                                />
                                <label htmlFor="cantidad3" style={{ color: 'grey' }}>Cantidad</label>
                                {mensajeError.cantidad3 ? <div className="invalid-feedback">{mensajeError.cantidad3}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                                <div className="form-check mt-4">
                                    <input className="form-check-input" onChange={handleCheckboxChange3} type="checkbox" id="gridCheck1" checked={formValues[2]?.cantidad === "0" || disabled3 ? true : false} required={cambioCantidad3 === '' ? true : false} disabled={cambioCantidad3 === '' ? false : true} />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        No Aplica
                                    </label>
                                    {cambioCantidad3 === '' ? <div className="invalid-feedback" /> : ''}
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-floating'>
                                <select className="form-select" name={'unidad3'}
                                    id="unidad3" value={formValues[2]?.unidad || ''}
                                    onChange={handleChangeSelect} required>
                                    <option selected disabled value="">Unidad de Medida</option>
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
                                    <option value={"Tazas"}>Tazas </option>
                                    <option value={"A gusto"}>A gusto </option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecciona una unidad de medida
                                </div>
                                <label htmlFor="unidad3" style={{ color: 'grey' }}>Unidad de Medida</label>
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
                                    <div className='form-floating'>
                                        <input
                                            key={index}
                                            className='form-control'
                                            type="text"
                                            name={`nombreExtra-${index}`}
                                            id={`nombreExtra-${index}`}
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
                                        <label htmlFor={`nombreExtra-${index}`} style={{ color: 'grey' }}>Nombre Ingrediente</label>
                                        {mensajeError[`nombreExtra-${index}`] ? <div className="invalid-feedback">{mensajeError[`nombreExtra-${index}`]}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-floating'>
                                        <input
                                            key={index}
                                            className='form-control'
                                            type="number"
                                            name={`cantidadExtra-${index}`}
                                            id={`cantidadExtra-${index}`}
                                            value={input.cantidad || ''}
                                            placeholder="Cantidad"
                                            checked={checkboxStatesExtra[index] || formValues[index]?.cantidad === "0"}
                                            onChange={(event) => {
                                                validaciones(event);
                                                const updatedInputs = [...additionalInputs];
                                                updatedInputs[index].cantidad = event.target.value;
                                                setAdditionalInputs(updatedInputs);
                                            }}
                                            required={formValues[index]?.cantidad === '' ? true : false}
                                            disabled={checkboxStatesExtra[index] === false || formValues[index]?.cantidad === "0" ? true : false}
                                            min={0.1}
                                            step={0.1}
                                        />
                                        <label htmlFor={`cantidadExtra-${index}`} style={{ color: 'grey' }}>Cantidad</label>
                                        {mensajeError[`cantidadExtra-${index}`] ? <div className="invalid-feedback">{mensajeError[`cantidadExtra-${index}`]}</div> : <div className="invalid-feedback">Por favor,ingrese un nombre</div>}
                                        {/* {formValues[index]?.cantidad === '' ? <div className="invalid-feedback" /> : ''} */}


                                        <div className="form-check mt-4">
                                            <input className="form-check-input" onChange={() => handleCheckboxChangeExtra(index)} type="checkbox" id="gridCheck1" checked={formValues[index]?.cantidad === "0" || !checkboxStatesExtra[index] ? true : false} required={ formValues[index]?.cantidad === '' ? true : false} disabled={ input.cantidad === '' ? false : true} />
                                            <label className="form-check-label" htmlFor="gridCheck1">
                                                No Aplica
                                            </label>
                                            {cambioCantidad3 === '' ? <div className="invalid-feedback" /> : ''}
                                        </div>
{/* 


                                        <div className="form-check mt-4">
                                            <input className="form-check-input" onChange={() => handleCheckboxChangeExtra(index)} type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" htmlFor="gridCheck1">
                                                No Aplica
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-floating'>
                                        <select
                                            className="form-select"
                                            name={`unidadExtra-${index}`}
                                            id={`unidadExtra-${index}`}
                                            value={input.unidad || ''}
                                            onChange={(event) => {
                                                validaciones(event);
                                                const updatedInputs = [...additionalInputs];
                                                updatedInputs[index].unidad = event.target.value;
                                                setAdditionalInputs(updatedInputs);
                                                const { name, value } = event.target;

                                                const selectElement = document.getElementsByName(name)[0]; // Obtener el elemento select del formulario

                                                // Recorrer las opciones y buscar el índice correspondiente al valor seleccionado
                                                for (let i = 0; i < selectElement.options.length; i++) {
                                                    if (selectElement.options[i].value === value) {
                                                        const selectedIndex = i;
                                                        if (selectedIndex !== 0) {
                                                            selectElement.options[0].style.display = 'none';
                                                        }
                                                        break;
                                                    }
                                                }
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
                                            <option value={"Tazas"}>Tazas </option>
                                            <option value={"A gusto"}>A gusto </option>
                                            <option value={"Pizca"}>Pizca</option>
                                        </select>
                                        <label htmlFor={`unidadExtra-${index}`} style={{ color: 'grey' }}>Cantidad</label>
                                        <div className="invalid-feedback">
                                            Por favor, selecciona una unidad de medida
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-1'>
                                    <Button variant="text" onClick={() => handleRemoveInput(index)} sx={{ color: "red" }} startIcon={<RemoveCircleIcon />}></Button>
                                </div>

                            </div>
                        ))}
                        <Button variant="text" onClick={handleAddInput} type='button' style={{ color: "#00A087" }} startIcon={<AddCircleIcon />}>Agregar otro</Button>
                        <div style={{ textAlign: "right" }}>
                            <button type="submit" className="button-inicio">
                                {/* <span >Loading...</span> */}
                                <div className="visually-hidden" id='loading' role="status" >
                                    <div className="spinner-border spinner-border-sm" role="status" />
                                </div>

                                <span className="" id='iniciar' >Siguiente</span>
                            </button>
                        </div>
                    </div>
                </form >

            </div > : <FormDetalles datosIngredientes={values} />

    );
}

export default FormIngredientes;