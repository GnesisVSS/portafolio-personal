import { Photo } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Field, setIn, useFormik } from 'formik';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormDetalles from './FormDetalles';

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
        let ingrextra = [];
        let valuesIngr = [];
        let valuesCant = [];
        let valuesUnidad = [];
        let valFinal = []
        for (let i = 0; i < 3; i++) {
            valuesIngr = [...valuesIngr, document.getElementById(`nombreIngr${i}`).value]

            valuesCant = [...valuesCant, document.getElementById(`Cantidad${i}`).value]

            valuesUnidad = [...valuesUnidad, document.getElementById(`unidad${i}`).value]
            valFinal = [valuesIngr, valuesCant, valuesUnidad]
        }


        setValues([...values, formValues,additionalInputs]);
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('additionalInputs', JSON.stringify(additionalInputs));
    }

    const handleChange = (event, index) => {
        const newValues = [...values];
        newValues[index] = { ...newValues[index], value: event.target.value };;
        setIngredienteExtra([...ingredienteExtra], newValues);
        console.log(newValues)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        values.forEach((value, index) => {
            formData[`input-${index}`] = formData[`input-${index}`] || [];
            formData[`input-${index}`].push(value.value);
        });
        console.log(formData);
    };

    const [formValues, setFormValues] = useState([
        [{nombreInput1: ''},
        {cantidadInput1: ''},
        {unidadInput1: ''},],
        {nombreInput2: ''},
        {nombreInput3: ''},
        
        {cantidadInput2: ''},
        {cantidadInput3: ''},
        
        {unidadInput2: ''},
        {unidadInput3: ''}
    ]);
    const [additionalInputs, setAdditionalInputs] = useState([
        { IngrExtra: '' },
        { CantidadExtra: '' },
        { UnidadExtra: '' }
    ]);

    const handleAddInput = () => {
        setAdditionalInputs([...additionalInputs, '']);

    };
    // 2. Crear un controlador de eventos para actualizar el estado cuando se cambie algún input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
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


    return (
        page ? <div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-focus-in titulo-inicio'>Ingredientes</h1>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'nombreInput1'} id="nombreIngr0" variant="outlined" label="Nombre del Ingrediente" value={formValues.nombreInput1}
                            onChange={handleInputChange} />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'cantidadInput1'} id="Cantidad0" variant="outlined" label="Cantidad" value={formValues.cantidadInput1}
                            onChange={handleInputChange} />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name={'unidadInput1'} id="unidad0" variant="outlined" label="Unidad de Medida" value={formValues.unidadInput1}
                            onChange={handleInputChange} />

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.nombreInput2}
                            onChange={handleInputChange} name={'nombreInput2'} id="nombreIngr1" variant="outlined" label="Nombre del Ingrediente" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.cantidadInput2}
                            onChange={handleInputChange} name={'cantidadInput2'} id="Cantidad1" variant="outlined" label="Cantidad" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.unidadInput2}
                            onChange={handleInputChange} name={'unidadInput2'} id="unidad1" variant="outlined" label="Unidad de Medida" />

                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.nombreInput3}
                            onChange={handleInputChange} name={'nombreInput3'} id="nombreIngr2" variant="outlined" label="Nombre del Ingrediente" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.cantidadInput3}
                            onChange={handleInputChange} name={'cantidadInput3'} id="Cantidad2" variant="outlined" label="Cantidad" />

                    </div>
                    <div className='col'>
                        <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={formValues.unidadInput3}
                            onChange={handleInputChange} name={'unidadInput3'} id="unidad2" variant="outlined" label="Unidad de Medida" />

                    </div>
                </div>


            </form>
            <div>

                {additionalInputs.map((input, index) => (

                    // eslint-disable-next-line react/jsx-key
                    <div className='row py-4'>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.IngrExtra}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].IngrExtra = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Nombre del Ingrediente" />

                        </div>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.CantidadExtra}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].CantidadExtra = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Cantidad" />

                        </div>
                        <div className='col'>
                            <TextField key={index} fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} value={input.UnidadExtra}
                                onChange={(event) => {
                                    const updatedInputs = [...additionalInputs];
                                    updatedInputs[index].UnidadExtra = event.target.value;
                                    setAdditionalInputs(updatedInputs);
                                }} variant="outlined" label="Unidad de Medida" />

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

        </div> : <FormDetalles datosIngredientes={values}/>

    );
}

export default FormIngredientes;
