import { Photo } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Field, setIn, useFormik } from 'formik';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormDetalles from './FormDetalles';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const FormIngredientes = () => {
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
        onSubmit: async (values) => {
            console.log(values)
            values.imgUrl = info;
            try {
                const response = await cargarRecetaAdmin(values)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    });

    const [values, setValues] = useState([]);
    const [page, setPage] = useState(true);
    const [ingredienteExtra, setIngredienteExtra] = useState([]);

    const addInput = () => {
        setValues([...values, { value: '' }]);
    };

    const handleClick = (event, index) => {
        setPage(!page);
        let valuesIngr = [];
        let valuesCant = [];
        let valuesUnidad = [];
        let valFinal = []
        for (let i = 0; i < 3; i++) {
            valuesIngr = [...valuesIngr, document.getElementById('nombre').value]

            valuesCant = [...valuesCant, document.getElementById('cantidad').value]

            valuesUnidad = [...valuesUnidad, document.getElementById('unidad').value]
            valFinal = [valuesIngr, valuesCant, valuesUnidad]
        }


        setValues([...values, formValues, additionalInputs]);
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setFormValues({ nombre: "", cantidad: "", unidad: "" });
        const formData = {};
        values.forEach((value, index) => {
            formData[`input-${index}`] = formData[`input-${index}`] || [];
            formData[`input-${index}`].push(value.value);
        });
        console.log(formValues);
    };

    const [formValues, setFormValues] = useState([]);

    const [additionalInputs, setAdditionalInputs] = useState([
        { nombre: '' },
        { cantidad: '' },
        { unidad: '' }
    ]);

    const handleAddInput = () => {
        setAdditionalInputs([...additionalInputs, {}]);
    };
    // 2. Crear un controlador de eventos para actualizar el estado cuando se cambie algún input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const index = parseInt(name.slice(-1)) - 1; // obtenemos el índice del objeto en el arreglo
        const field = name.slice(0, -1); // obtenemos el nombre del campo del objeto
        setFormValues((prevState) => {
            const newState = [...prevState]; // creamos un nuevo arreglo
            if (newState.length <= index) {
                newState[index] = { [field]: value }; // si el objeto no existe, lo creamos
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
    }, []);

    // 4. Cuando el usuario hace clic en el botón "Siguiente", guardar el estado actual del formulario en localStorage
    const handleRemoveInput = (indexToRemove) => {
        const filteredInputs = additionalInputs.filter((input, index) => index !== indexToRemove);
        setAdditionalInputs(filteredInputs);
        localStorage.setItem('additionalInputs', JSON.stringify(filteredInputs));

    };

    return (
        page ? <div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'nombre1'} id="nombre" variant="outlined" label="Nombre del Ingrediente" value={formValues[0]?.nombre}
                            onChange={handleInputChange} />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'cantidad1'} id="cantidad" variant="outlined" label="Cantidad" value={formValues[0]?.cantidad}
                            onChange={handleInputChange} />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'unidad1'} id="unidad" variant="outlined" label="Unidad de Medida" value={formValues[0]?.unidad}
                            onChange={handleInputChange} />

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[1]?.nombre}
                            onChange={handleInputChange} name={'nombre2'} id="nombreIngr1" variant="outlined" label="Nombre del Ingrediente" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[1]?.cantidad}
                            onChange={handleInputChange} name={'cantidad2'} id="Cantidad1" variant="outlined" label="Cantidad" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[1]?.unidad}
                            onChange={handleInputChange} name={'unidad2'} id="unidad1" variant="outlined" label="Unidad de Medida" />

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[2]?.nombre}
                            onChange={handleInputChange} name={'nombre3'} id="nombreIngr2" variant="outlined" label="Nombre del Ingrediente" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[2]?.cantidad}
                            onChange={handleInputChange} name={'cantidad3'} id="Cantidad2" variant="outlined" label="Cantidad" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues[2]?.unidad}
                            onChange={handleInputChange} name={'unidad3'} id="unidad2" variant="outlined" label="Unidad de Medida" />

                    </div>
                </div>


            </form>
            <div>

                {additionalInputs.map((input, index) => (

                    // eslint-disable-next-line react/jsx-key
                    <div className='row py-4'>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.nombre}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].nombre = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Nombre del Ingrediente" id={'extra'} />

                        </div>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.cantidad}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].cantidad = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Cantidad" id={'extra'} />

                        </div>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.unidad}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].unidad = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Unidad de Medida" id={'extra'} />


                        </div>
                        <div className='col-sm-1'>
                            <Button variant="text" onClick={() => handleRemoveInput(index)} style={{ color: "#00A087" }} startIcon={<RemoveCircleIcon />}>Agregar otro</Button>


                        </div>

                    </div>
                ))}
                <Button variant="text" onClick={handleAddInput} style={{ color: "#00A087" }} startIcon={<AddCircleIcon />}>Agregar otro</Button>

            </div>
            <div style={{ textAlign: "right" }}>
                <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" onClick={handleClick}>
                    {/* <span >Loading...</span> */}
                    <div className="visually-hidden" id='loading' role="status" >
                        <div className="spinner-border spinner-border-sm" role="status" />
                    </div>

                    <span className="" id='iniciar'>Siguente</span>
                </button>
            </div>

        </div> : <FormDetalles datosIngredientes={values} />

    );
}

export default FormIngredientes;
