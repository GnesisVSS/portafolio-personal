/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { Field, useFormik } from 'formik';
import NavbarUsuario from '../navbarUsuario';
import { Button, Pagination, Stack, TextField, Typography } from '@mui/material';
import { cargarRecetaAdmin } from '../../../../api/receta.api';
import Photo from '../../Photo';
import FormIngredientes from './FormIngredientes';
import FormDetalles from './FormDetalles';


const FormRecetas = (props) => {

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    // const [imageUrl, setImageUrl] = useState('');
    // const [imageBlob, setImageBlob] = useState(null);

    // const [valorInput, setValorInput] = useState('');

    // useEffect(() => {
    //     setValorInput(props.valorInicial);
    // }, [props.valorInicial]);


    // const [info, setInfo] = useState(valorInput);
    // const [myValue, setMyValue] = useState(null);

    // const handleInfoChange = (newInfo) => {
    //     setInfo(newInfo);
    // };

    // const formik = useFormik({
    //     initialValues: {
    //         nombre: "",
    //         descripcion: "",
    //         preparacion: "",
    //         categoria: "",
    //         tiempoPreparacion: "",
    //         porciones: "",
    //         dificultad: "",
    //         imgUrl: ""
    //     },
    //     onSubmit: async (values) => {
    //         console.log(values)
    //         values.imgUrl = info;
    //         try {
    //             const response = await cargarRecetaAdmin(values)
    //             console.log(response)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     },
    // });
    const [page, setPage] = React.useState(true);

    
    const [values, setValues] = useState(() => {
        const storedValues = localStorage.getItem('formValues');
        return storedValues ? JSON.parse(storedValues) : [];
    });

    useEffect(() => {
        localStorage.setItem('formValues', JSON.stringify(values));
    }, [values]);


    return (
        <section>
            <NavbarUsuario />
            {/* <p>prueba</p> */}
            <div className='container mx-auto py-5' >
                <div className="card border-dark py-4">
                    <div className="card-body text-dark">
                        {/* <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> */}
                        <FormIngredientes />
                    </div>
                    {/* <Stack spacing={2}>
                        <Pagination count={2} page={page} onChange={handleChange} />
                    </Stack> */}


                </div>

            </div>

        </section>


    )
}

export default FormRecetas
