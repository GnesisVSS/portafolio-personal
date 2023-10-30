import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Footer from './ElementosHome/footer';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
            console.log('Mensaje enviado correctamente');
        } catch (error) {
            console.error('Error al enviar el mensaje', error);
        }
    };

    return (
        <section className='align-items-center formContacto'>

            <div className='py-4'>
                <div className="container col-sm-8 py-2 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-8  align-self-center col-contact" >
                            <form onSubmit={handleSubmit} >

                                <strong><h1 className='h1ContactForm'>Contactame</h1></strong>

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
                                    <TextField
                                        className='w100 bgWhite'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        color="secondary"
                                        focused
                                        label="Mensaje"
                                        multiline
                                        rows={6}
                                    />

                                </div>

                                <div className='py-4'>
                                    <button className="noselect butcorreo" type='submit'>
                                        <span className="textCorreo spanCorreo">Enviar</span>
                                        <span className="iconCorreo spanCorreo">
                                            <MailOutlineIcon className='svgCorreo' width="48" height="48" />
                                        </span>
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>


                </div>
            </div >
            <div className={'align-self-end'}>
                <Footer/>

            </div>

        </section >
    );
}

export default ContactForm;
