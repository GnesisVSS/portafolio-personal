import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RegRecAdmin from './ingreso-rec-admin';

const FormIngredientesAdmin = () => {


    const [formValues, setFormValues] = useState([]);
    const [additionalInputs, setAdditionalInputs] = useState([]);
    const [values, setValues] = useState([]);
    const [page, setPage] = useState(true);
    const [mensajeError, setMensajeError] = useState({});



    const handleClick = () => {
        setPage(!page);
        let valFinal = []

        valFinal = formValues.concat(additionalInputs)
        setValues([...values, valFinal]);
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));
    }


    const handleAddInput = () => {
        setAdditionalInputs([...additionalInputs, {}]);
    };
    // 2. Crear un controlador de eventos para actualizar el estado cuando se cambie algún input
    const handleInputChange = (event) => {


        // se obtiene el nombre y valor de cada campo
        const { name, value } = event.target;

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

    // 4. Cuando el usuario hace clic en el botón "Siguiente", guardar el estado actual del formulario en localStorage
    const handleRemoveInput = (indexToRemove) => {
        const filteredInputs = additionalInputs.filter((input, index) => index !== indexToRemove);
        setAdditionalInputs(filteredInputs);
        localStorage.setItem('additionalInputs', JSON.stringify(filteredInputs));

    };


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
            if (value <= 0) {
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
        handleInputChange(event);
    }

    return (
        page ? <div>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleClick}>
                <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>
                <div className='row py-4'>
                    <div className='col'>
                        <div className='form-floating'>
                            <input
                                className="form-control"
                                type="text"
                                name="nombre1"
                                id="nombre1"
                                value={formValues[0]?.nombre}
                                onChange={handleInputChange}
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
                                value={formValues[0]?.cantidad}
                                onChange={handleInputChange}
                                placeholder="Cantidad"
                                required
                                min={0.1}
                                step={0.1}
                            />
                            <label htmlFor="cantidad1" style={{ color: 'grey' }}>Cantidad</label>
                            {mensajeError.cantidad1 ? <div className="invalid-feedback">{mensajeError.cantidad1}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
                            
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
                                <option value={"Pizca"}>Pizca</option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                            <label htmlFor="unidad1" style={{ color: 'grey' }}>Unidad de Medida</label>
                        </div>

                    </div>
                </div>


                <div className='row py-4'>
                    <div className='col'>
                        <div className='form-floating'>
                            <input
                                className='form-control'
                                type="text"
                                name="nombre2"
                                id="nombre2"
                                value={formValues[1]?.nombre}
                                onChange={handleInputChange}
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
                                value={formValues[1]?.cantidad}
                                onChange={handleInputChange}
                                placeholder="Cantidad"
                                required
                                min={0.1}
                                step={0.1}
                            />
                            <label htmlFor="cantidad2" style={{ color: 'grey' }}>Cantidad</label>
                            {mensajeError.cantidad2 ? <div className="invalid-feedback">{mensajeError.cantidad2}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
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
                                <option value={"Pizca"}>Pizca</option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                            <label htmlFor="unidad2" style={{ color: 'grey' }}>Unidad de Medida</label>
                        </div>

                    </div>
                </div>



                <div className='row py-4'>
                    <div className='col'>
                        <div className='form-floating'>
                            <input
                                className='form-control'
                                type="text"
                                name="nombre3"
                                id="nombre3"
                                value={formValues[2]?.nombre}
                                onChange={handleInputChange}
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
                                value={formValues[2]?.cantidad}
                                onChange={handleInputChange}
                                placeholder="Cantidad"
                                required
                                min={0.1}
                                step={0.1}
                            />
                            <label htmlFor="cantidad3" style={{ color: 'grey' }}>Cantidad</label>
                            {mensajeError.cantidad3 ? <div className="invalid-feedback">{mensajeError.cantidad3}</div> : <div className="invalid-feedback">Por favor, ingrese una cantidad</div>}
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
                                <option value={"Pizca"}>Pizca</option>
                            </select>
                            <div className="invalid-feedback">
                                Por favor, selecciona una unidad de medida
                            </div>
                            <label htmlFor="unidad3" style={{ color: 'grey' }}>Unidad de Medida</label>
                        </div>
                    </div>
                </div>



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
                                        required
                                        min={0.1}
                                        step={0.1}
                                        onChange={(event) => {
                                            validaciones(event);
                                            const updatedInputs = [...additionalInputs];
                                            updatedInputs[index].cantidad = event.target.value;
                                            setAdditionalInputs(updatedInputs);
                                        }}
                                    />
                                    <label htmlFor={`cantidadExtra-${index}`} style={{ color: 'grey' }}>Cantidad</label>
                                    {mensajeError[`cantidadExtra-${index}`] ? <div className="invalid-feedback">{mensajeError[`cantidadExtra-${index}`]}</div> : <div className="invalid-feedback">Por favor,ingrese una cantidad</div>}
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
                    <Button variant="text" onClick={handleAddInput} style={{ color: "#00A087" }} startIcon={<AddCircleIcon />}>Agregar otro</Button>
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
            </form>

        </div> : <RegRecAdmin datosIngredientes={values} />

    );
}

export default FormIngredientesAdmin;
