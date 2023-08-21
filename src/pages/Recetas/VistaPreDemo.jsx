import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { homeAnimation } from '../../animation';
import Recetas from '../Recetas/Recetas';
import Atropos from 'atropos/react';
import Table from '@mui/joy/Table';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconBrandGit } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';
import { IconBrandHtml5 } from '@tabler/icons-react';
import Navbar from '../Elementos/navbar';
import Footer from '../Elementos/footer';

const VistaPreDemo = () => {


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
                                    <strong><h1 style={{ textAlign: 'left', color: '#162E36', marginTop: '40px' }} className='h1Proyectos'>Pagina web de Recetas</h1></strong>
                                    <div className='py-4'>
                                        <p style={estilo2}>
                                            Pagina web ficticia en donde se puede leer información de diferentes recetas con su respectiva información, tales como: porciones, tiempo de preparación,categoría,Ingredientes y detalles de la preparación.

                                            Ademas, es posible registrarse como usuario e iniciar sesión para poder guardar recetas, eliminarlas de los elementos guardados e ingresar recetas propias, todo esto siendo accesible a través del menú de usuario disponible en la barra de navegación luego de ingresar las credenciales.
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
                                                    backgroundImage: 'url(/img/RecetasScreen/recetas-inicio-card.png)',
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
                                                    <a href='/RecetasHome' type="button" className="span-demo">Ver demo</a>
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
                                        <td><IconBrandJavascript width='32px' height='32px' style={{ color: '#ffd630', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />JavaScript</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Framework</strong> </td>
                                        <td></td>
                                        <td><IconBrandReact width='32px' height='32px' style={{ color: '#61DBFB', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />ReactJS</td>
                                    </tr>
                                    <tr>
                                        <td> <strong>Base de Datos</strong> </td>
                                        <td></td>
                                        <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-planetscale" width='32px' height='32px' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'black', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }}>
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362z"></path>
                                            <path d="M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166z"></path>
                                            <path d="M12 12l-6 6"></path>
                                        </svg>MySql con PlanetScale</td>
                                    </tr>
                                    <tr className='complemetos'>
                                        <td> <strong>Complementos</strong> </td>
                                        <td></td>
                                        <td >
                                            <IconBrandGit width='32px' height='32px' style={{ color: '#f96926', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />Git
                                            <br />
                                            <IconBrandHtml5 width='32px' height='32px' style={{ color: '#f96926', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />HTML

                                            <br />
                                            <IconBrandCss3 width='32px' height='32px' style={{ color: '#61DBFB', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />CSS

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

export default VistaPreDemo;








