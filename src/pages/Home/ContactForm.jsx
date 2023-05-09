import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
        <section  style={{ backgroundColor: '#EDE6F1', color: '#162E36' }} className='align-items-center'>

            <div>
                <div className="container col-sm-8 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-8 text-white align-self-center" >
                            <form onSubmit={handleSubmit} >

                                <strong><h1 style={{ textAlign: 'left', color: '#162E36' }} className='h1Proyectos'>Contactame</h1></strong>

                                <div className="col-sm-12 col-md-12 py-4">
                                    <TextField
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        label="Nombre"
                                        variant="standard"
                                        color="secondary"
                                        focused
                                        style={{ width: '100%' }}
                                    />

                                </div>
                                <div className="col-sm-12 col-md-12 py-4">
                                    <TextField
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label="Email"
                                        variant="standard"
                                        color="secondary"
                                        focused
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-12 py-4">
                                    <TextField
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        color="secondary"
                                        focused
                                        label="Mensaje"
                                        multiline
                                        rows={6}
                                        style={{ backgroundColor: 'white', width: '100%' }}
                                    />

                                </div>

                                <div style={{ textAlign: 'center' }} className='py-4'>
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


        </section >
    );
}

export default ContactForm;
