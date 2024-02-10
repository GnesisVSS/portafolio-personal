import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Alert, TextField } from '@mui/material';
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from '@tabler/icons-react';
import axios from 'axios';
import React, { useState } from 'react';
import Footer from './ElementosHome/footer';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');
    // const alerta = () => {
    //     return(
    //         <Alert severity="success">This is a success alert — check it out!</Alert>
    //     )
    // }

    function alerta() {
        if (tipoAlerta === "exito") {
            return (
                <Alert severity="success">Mensaje Enviado!</Alert>
            )
        } else if (tipoAlerta === "error") {
            return (
                <Alert severity="error">Lo siento! Esto parece no estar funcionando.</Alert>
            )
        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://formspree.io/f/xdovbqjg', {
                name,
                email,
                message,
            });
            // Limpiar los campos después de enviar el formulario
            setName('');
            setEmail('');
            setMessage('');
            // Mostrar un mensaje de éxito o redirigir a una página de éxito
            setTipoAlerta("exito")
        } catch (error) {
            setTipoAlerta("error");
            // console.error('Error al enviar el mensaje', error);
        }
    };

    return (
        <section className='align-items-center formContacto'>

            <div className='py-4'>
                <div className="container col-sm-8 py-2 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-12  align-self-center col-contact" >

                            <form onSubmit={handleSubmit} >
                                <strong><h1 className='h1ContactForm py-5'>Contáctame</h1></strong>
                                <div className="row">
                                    <div className="col-sm-8 col-md-4">
                                        <div className="icon-demo">
                                            <div className="text-center lh-1">
                                                <div className="icon-demo-icon icon-demo-stroke-150 icon-demo-size-32">
                                                    <IconBrandGithub className='iconContact'></IconBrandGithub>
                                                </div>
                                                <div className="text-uppercase font-h5 mt-2 font-medium"> <strong>Github</strong></div>
                                                <div>
                                                    <a type='button' className='button-contact' href='https://github.com/GnesisVSS'>
                                                        Ir a Github
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-4">
                                        <div className="icon-demo">
                                            <div className="text-center lh-1">
                                                <div className="icon-demo-icon icon-demo-stroke-150 icon-demo-size-32">
                                                    <IconBrandLinkedin className='iconContact'></IconBrandLinkedin>
                                                </div>
                                                <div className="text-uppercase font-h5 mt-2 font-medium"> <strong>Linkedin</strong></div>
                                                <a type='button' className='button-contact' href='https://www.linkedin.com/in/genesis-saez/'>
                                                    Ir a Linkedin
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-4">
                                        <div className="icon-demo">
                                            <div className="text-center lh-1">
                                                <div className="icon-demo-icon icon-demo-stroke-150 icon-demo-size-32">
                                                    <IconFileDownload className='iconContact'></IconFileDownload>                                                </div>
                                                <div className="text-uppercase font-h5 mt-2 font-medium"> <strong>CV</strong></div>
                                                <a type='button' className='button-contact' href='files/GenesisSaez-CV.pdf'>
                                                    Descargar CV
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="row justify-content-center">
                                    <strong><h2 className='h2Escribeme py-5'>Escríbeme</h2></strong>
                                    <div className="col-sm-8 col-md-10 align-self-center" >

                                        <div className="col-sm-12 col-md-12 py-4">
                                            <TextField
                                                className='w100'
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                label="Nombre"
                                                variant="standard"
                                                color="secondary"
                                                focused
                                            />

                                        </div>
                                        <div className="col-sm-12 col-md-12 py-4 ">
                                            <TextField
                                                className='w100'
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                label="Email"
                                                variant="standard"
                                                color="secondary"
                                                focused
                                            />
                                        </div>
                                        <div className="col-sm-12 col-md-12 py-4">
                                            <span className='labelMensaje'>Mensaje</span>
                                            <TextField
                                                className='w100 bgWhite'
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                color="secondary"
                                                focused
                                                
                                                multiline
                                                rows={6}
                                            />

                                        </div>
                                        <div className="col-sm-12 col-md-12 py-4">
                                            {alerta(tipoAlerta)}
                                        </div>
                                        <div className='py-4'>
                                            <button className="noselect butcorreo" type='submit'>
                                                <span className="textCorreo spanCorreo">Enviar</span>
                                                <span className="iconCorreo spanCorreo">
                                                    <MailOutlineIcon className='svgCorreo' width="48" height="48" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>


                            </form>
                        </div>

                    </div>


                </div>
            </div >
            <div className={'align-self-end'}>
                <Footer />

            </div>

        </section >
    );
}

export default ContactForm;
