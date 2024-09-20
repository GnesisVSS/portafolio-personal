import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { IconChefHat, IconLock } from '@tabler/icons-react';
import Atropos from 'atropos/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
const menu = ["Página web de recetas", "Rick y Morty"]
const links = ["/DemoRecetas", "/DemoRickyMorty"]
const imagen = ["/img/Shawarma.gif", "/img/RickAndMorty/ReYG.gif"]

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};


const Proyectos = () => {
    const [indexImagen, setIndexImagen] = useState([]);

    function mostrarImagen() {
        var imagen = document.getElementById('imagen');
        var imagenD = document.getElementById('imagenDefecto');
        imagen.style.display = 'block';
        imagenD.style.display = 'none';

    }

    function ocultarImagen() {
        var imagen = document.getElementById('imagen');
        var imagenD = document.getElementById('imagenDefecto');
        imagen.style.display = 'none';
        imagenD.style.display = 'block';

    }
    const handleListItemClick = (index, e) => {
        e.preventDefault();
        window.location.href = links[index];
    };
    function renderRow(props) {
        // eslint-disable-next-line react/prop-types
        const { index, style } = props;

        return (
            <motion.div
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => {
                    setIndexImagen(prevIndex => {
                        mostrarImagen(index);
                        return [index];
                    });
                    setIsVisible(false);
                }}
                onMouseLeave={() => {
                    setIsVisible(true);
                    ocultarImagen();
                }}
            >
                <List style={style} key={index} component="div" disablePadding>
                    <ListItem alignItems="flex-start" style={{ textDecoration: 'none', color: '#162E36', cursor: 'pointer' }} onClick={(e) => handleListItemClick(index, e)}>
                        <div className="controls">

                            <a >
                                <h2
                                    className='titulo-demo'
                                >
                                    <IconChefHat width='38px' height='38px' style={{ paddingRight: '10px' }} />
                                    {menu[index]}
                                </h2>
                            </a>

                        </div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </motion.div>


        );
    }

    const estilo2 = {
        fontSize: '18px'
    }

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
        setScreenSize(window.innerWidth);
    }, [control, inView]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const [isVisible, setIsVisible] = useState(true);

    const boxVariant = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        hidden: { y: 300, opacity: 0 },
    }

    const boxVariantMobile = {
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
        hidden: { x: -200, opacity: 0 },
    }
    const headerClass = screenSize < 767 ? 'mobile' : 'pantalla';

    return (
        <section id='recetas' style={{ backgroundColor: '#EDE6F1', color: '#162E36' }}>
            <div >
                <motion.div
                    ref={ref}
                    variants={headerClass === "pantalla" ? boxVariant : ''}
                    initial="hidden"
                    animate={control}

                >
                    <div className='py-4'>
                        <div className="container col py-2 mx-auto">
                            <div className="row justify-content-center">

                                <div className='col-sm-6 col-md-12 py-5 align-self-center' >
                                    <strong><h1 style={{ textAlign: 'left', color: '#162E36' }} className='h1Proyectos'>Mis proyectos</h1></strong>

                                </div>
                                
                                <div className='col-sm-12 col-md-12 col-lg-6 align-self-center py-3' >
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
                                                <span className='box-titulo'>
                                                    <IconLock className='IconLock' style={{margin: '0 8px'}}/>Recetas
                                                </span>
                                            </div>
                                            <div className="card__content">

                                                <div className="card__background" style={{
                                                    backgroundImage: 'url(/img/RecetasScreen/Opcion1.png)'
                                                }}></div>

                                                <button className='button-demo' disabled="true" style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                }}>
                                                    <svg className='svg-demo' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path>
                                                    </svg>
                                                    <a href='/DemoRecetas' type="button" className="span-demo">Sobre el Proyecto</a>                                                </button>

                                            </div>
                                        </div>
                                    </Atropos>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6 align-self-center py-3' >
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
                                                <span className='box-titulo'>
                                                    <IconLock className='IconLock' style={{margin: '0 8px'}}/>Rick y Morty
                                                </span>
                                            </div>
                                            <div className="card__content">

                                                <div className="card__background" style={{
                                                    backgroundImage: 'url(/img/RickAndMorty/RickYMortyPortada.jpg)',
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
                                                    <a href='/DemoRickyMorty' type="button" className="span-demo">Sobre el Proyecto</a>
                                                </button>

                                            </div>
                                        </div>
                                    </Atropos>


                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6 align-self-center py-3' >
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
                                                <span className='box-titulo'>
                                                    <IconLock className='IconLock' style={{margin: '0 8px'}}/> Ecotourist
                                                </span>
                                            </div>
                                            <div className="card__content">

                                                <div className="card__background_proximamente" style={{
                                                    backgroundImage: 'url(/img/EcoTourist/TrekkingPortada.png)'
                                                }}></div>

                                                <button className='button-demo_proximamente' disabled="true" style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                }}>
                                                    <svg className='svg-demo_proximamente' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path>
                                                    </svg>
                                                    <a className="span-demo_proximamente"></a>
                                                </button>

                                            </div>
                                        </div>
                                    </Atropos>
                                </div>
                                {/* TalentAlke */}
                                <div className='col-sm-12 col-md-12 col-lg-6 align-self-center py-3' >
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
                                                <span className='box-titulo'>
                                                    <IconLock className='IconLock' style={{margin: '0 8px'}}/> TalentAlke
                                                </span>
                                            </div>
                                            <div className="card__content">

                                                <div className="card__background" style={{
                                                    backgroundImage: 'url(/img/TalentAlke/prevView.png)'
                                                }}></div>

                                                <button className='button-demo' disabled="true" style={{
                                                    position: 'relative',
                                                    zIndex: 2,
                                                }}>
                                                    <svg className='svg-demo' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path>
                                                    </svg>
                                                    <a href='/DemoTalentAlke' type="button" className="span-demo">Sobre el Proyecto</a>
                                                </button>

                                            </div>
                                        </div>
                                    </Atropos>
                                </div>

                            </div>
                        </div>

                    </div>
                </motion.div>
            </div >

        </section >
    );
}

export default Proyectos;








