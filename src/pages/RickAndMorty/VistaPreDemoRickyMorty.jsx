import Table from '@mui/joy/Table';
import Atropos from 'atropos/react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '../Home/ElementosHome/footer';
import Navbar from '../Home/ElementosHome/navbar';

const VistaPreDemoRickyMorty = () => {


    const estilo2 = {
        fontSize: '18px'
    }

    const boxVariant = {
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
        hidden: { x: 0, opacity: 0 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let Desplazamiento_actual = window.pageYOffset;
        if (ubicacionPrincipal >= Desplazamiento_actual) {
            document.getElementById('navbar').style.top = '0px';
        } else {
            document.getElementById('navbar').style.top = '-100px';
        }
        ubicacionPrincipal = Desplazamiento_actual;
    }
    return (
        <section id='recetas' style={{ minHeight: '100vh' }}>
            <div style={{ backgroundColor: '#EDE6F1', color: '#162E36' }}>
                <Navbar />
                <div className='py-5' >
                    <div className="container col-sm-12 py-2 mx-auto">

                        <div className="row justify-content-center">

                            <div className="col-sm-8 col-md-6 p-5 align-self-center">

                                <div className="col" style={{ lineHeight: '27px' }}>
                                    <strong><h1 style={{ textAlign: 'left', color: '#162E36', marginTop: '40px' }} className='h1Proyectos'>Pagina web de Rick y Morty</h1></strong>
                                    <div className='py-4'>
                                        <p style={estilo2}>
                                            Pagina web ficticia en donde se puede leer información de diferentes personajes con su respectiva información en detalle

                                            Ademas, es posible guardar un personaje como favoritos y quitarlo de esa lista si asi se desea. Para esto se utilizó la API oficial de Rick y Morty y GraphQL para la consulta de datos a esta, ademas de la utilización de React Redux para la mantención de estados globales.
                                        </p>

                                    </div>

                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6  align-self-center' >
                                <div className="col">
                                    <Atropos>
                                        <div className="card-prev-rec" data-atropos-offset="-3">
                                            <div className="tools">
                                                <div className="circle">
                                                    <span className="red box"></span>
                                                </div>
                                                <div className="circle">
                                                    <span className="yellow box"></span>
                                                </div>
                                                <div className="circle">
                                                    <span className="green box"></span>
                                                </div>
                                            </div>
                                            <div className="card__content" style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '350px',
                                                borderBottomLeftRadius: '30px',
                                                borderBottomRightRadius: '30px',
                                                position: 'relative',
                                            }}>

                                                <div className="card__background" style={{
                                                    backgroundImage: 'url(/img/RickAndMorty/captura-randm.png)',
                                                    backgroundSize: 'cover',
                                                    width: '100%',
                                                    height: '100%',
                                                    position: 'absolute',
                                                    zIndex: 1,
                                                    borderBottomLeftRadius: '30px',
                                                    borderBottomRightRadius: '30px',
                                                    transition: 'opacity 0.3s ease',

                                                }}></div>

                                                <button className='button-demo' style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                }}>
                                                    <svg className='svg-demo' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path>
                                                    </svg>
                                                    <a href='/RickYMorty' type="button" className="span-demo">Ver demo</a>
                                                </button>

                                            </div>
                                        </div>
                                    </Atropos>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="container text-center" style={{ paddingBottom: '32px' }}>
                    <div className="row" style={{ marginBottom: '32px' }}>
                        <div className="col-md-10 offset-md-1 text-start">
                            <h1 style={{ marginBottom: '32px' }}>Especificaciones</h1>
                            <Table aria-label="basic table">
                                <tbody style={{ fontSize: '18px' }}>
                                    <tr>
                                        <td> <strong>Lenguaje de Programación</strong></td>
                                        <td></td>
                                        <td>
                                        <img src='img/icons/javascript.svg' width='32px' height='32px' style={{margin: '12px'}}/> JavaScript
                                        </td>
                                    </tr>
                                    <tr className='complementos'>
                                        <td> <strong>Frameworks y Librerías</strong> </td>
                                        <td></td>
                                        <td >
                                            <img src='img/icons/react.svg' width='32px' height='32px' style={{margin: '12px'}}/> ReactJS
                                            <br />
                                            <img src='img/icons/redux.svg' width='32px' height='32px' style={{margin: '12px'}}/> React Redux
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Base de Datos</strong> </td>
                                        <td></td>
                                        <td><img src='img/icons/graph.svg' width='32px' height='32px' style={{margin: '12px'}}/> GraphQL </td>
                                    </tr>
                                    <tr className='complemetos'>
                                        <td> <strong>Complementos</strong> </td>
                                        <td></td>
                                        <td >
                                            <img src='img/icons/git.svg' width='32px' height='32px' style={{margin: '12px'}}/> Git
                                            <br />
                                            <img src='img/icons/html.svg' width='32px' height='32px' style={{margin: '12px'}}/> HTML

                                            <br />
                                            <img src='img/icons/css.svg' width='32px' height='32px' style={{margin: '12px'}}/> CSS

                                            <br />
                                            <img src='img/icons/rickyMorty.svg' width='32px' height='32px' style={{margin: '12px'}}/> Rick and Morty API
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </section>
    );
}

export default VistaPreDemoRickyMorty;








