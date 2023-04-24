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
    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleClick = () => {
        setPage(!page);
    }

    // const paginas = () => {
    //     if (page === 1) {
    //         return (
    //             <div>
    //                 <NavbarUsuario />
    //                 <section className='py-5'>

    //                     <div className="container col-sm-8 mx-auto">
    //                         <div className="row">
    //                             <div className="card mb-3 ps-0">
    //                                 <div className="row g-0">
    //                                     <div className="col-md-7">
    //                                         <img className="img-fluid rounded-start" src="../img/waffle-2596092_1280.jpg" alt="" />
    //                                     </div>
    //                                     <div className="col-md-5">
    //                                         <div className="card-body p-4">
    //                                             {/* <h3 className="card-title text-center fw-bold">Inicia sesión</h3> */}
    //                                             <div className="card-text p-4">

    //                                                 <form onSubmit={formik.handleSubmit}>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='nombre' onChange={formik.handleChange} id="outlined-basic" label="Nombre" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='descripcion' onChange={formik.handleChange} id="outlined-basic" label="Descripcion" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='preparacion' onChange={formik.handleChange} id="outlined-basic" label="Preparacion" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='categoria' onChange={formik.handleChange} id="outlined-basic" label="Categoria" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='tiempoPreparacion' onChange={formik.handleChange} id="outlined-basic" label="Tiempo Preparacion" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='porciones' onChange={formik.handleChange} id="outlined-basic" label="Porciones" variant="outlined" />
    //                                                     </div>
    //                                                     <div className="input-group mb-3">
    //                                                         <TextField fullWidth sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} name='dificultad' onChange={formik.handleChange} id="outlined-basic" label="Dificultad" variant="outlined" />
    //                                                     </div>
    //                                                     {/* <ChildComponent onInfoChange={handleInfoChange} /> */}
    //                                                     <Photo onInfoChange={handleInfoChange} />

    //                                                     <div style={{ textAlign: "center" }} className="py-2">
    //                                                         <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" >
    //                                                             {/* <span >Loading...</span> */}
    //                                                             <div className="visually-hidden" id='loading' role="status" >
    //                                                                 <div className="spinner-border spinner-border-sm" role="status" />
    //                                                             </div>

    //                                                             <span className="" id='iniciar'>Cargar Receta</span>
    //                                                         </button>
    //                                                     </div>

    //                                                 </form>

    //                                             </div>


    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>

    //                         </div >
    //                     </div >
    //                 </section >
    //                 <Stack spacing={2}>
    //                     <Typography>Page: {page}
    //                     </Typography>
    //                     <Pagination count={2} page={page} onChange={handleChange} />
    //                 </Stack>
    //             </div>
    //         )

    //     } else {
    //         return (
    //             <div>
    //                 <p>otra hoja</p>
    //                 <Stack spacing={2}>
    //                     <Typography>Page: {page}
    //                     </Typography>
    //                     <Pagination count={2} page={page} onChange={handleChange} />
    //                 </Stack>

    //             </div>


    //         )
    //     }
    // }



    return (
        <section>
            <NavbarUsuario />
            {/* <p>prueba</p> */}
            <div className='container mx-auto py-5' >
                <div className="card border-dark py-4">
                    <div className="card-body text-dark">
                        {/* <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> */}
                        {page === true ? <FormIngredientes /> : <FormDetalles />}
                        {page === true ? <div style={{ textAlign: "right" }} className="py-2">
                            <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" onClick={handleClick}>
                                {/* <span >Loading...</span> */}
                                <div className="visually-hidden" id='loading' role="status" >
                                    <div className="spinner-border spinner-border-sm" role="status" />
                                </div>

                                <span className="" id='iniciar'>Siguente</span>
                            </button>
                        </div>
                            :


                            <div style={{ textAlign: "right" }} className="py-2">
                                    <Button variant="text" style={{color:"#00A087"}} onClick={handleClick}>Atrás</Button>

                                <button type="submit" className="button-inicio" name="formSub" id="formSub" value="form" >
                                    {/* <span >Loading...</span> */}
                                    <div className="visually-hidden" id='loading' role="status" >
                                        <div className="spinner-border spinner-border-sm" role="status" />
                                    </div>

                                    <span className="" id='iniciar'>Cargar Receta</span>
                                </button>
                            </div>}
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
