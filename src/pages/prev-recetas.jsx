
import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { homeAnimation } from '../animation';
import Recetas from './recetas';

const PrevRecetas = () => {


    const estilo1 = {
        color: '#F9A826'
    }

    const estilo2 = {
        fontSize: '18px'
    }

    const estilo3 = {
        textAlign: 'center'
    }


    const boxVariant = {
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0.5 },

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

    return (
        <section id='recetas' style={{ minHeight: '100vh', backgroundColor: 'white' ,color: '#484554' }}>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                transition={{
                    default: {
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    },
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
                <div className='py-4'>
                    <div className="container col-sm-12 py-2 mx-auto">
                        <strong><h1 className='p-5' style={{ textAlign: 'left' }}>Mis proyectos</h1></strong>
                        <div className="row justify-content-center py-5">
                            <div className='col-sm-6 col-md-7 p-5 align-self-center' >
                                <div className="card-prev-rec">
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
                                    <div className="card__content">
                                        <img alt='' src='img/RecetasScreen/recetas-inicio-card.png' className='img-fluid' />
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-8 col-md-5 px-5 align-self-center" >
                                {/* <img src="../img/dibujo-cocina.svg" style={estilo4} alt="" /> */}
                                <div className="col" style={{ lineHeight: '27px' }}>

                                    <h2 className='titulo-demo'>Web de recetas</h2>
                                    <p style={estilo2}>
                                        Recetas dulces, saladas, saludables, para todos los gustos! Accede a estas y más recetas
                                        iniciando sesión, si no tienes una cuenta puedes registrarte gratis, para acceder al listado
                                        completo de resetas que tenemos para ti. Además tambien puedes crear tus propias recetas y guardarlas
                                        junto a las que te entregamos para tener una mayor variedad.
                                    </p>
                                    <div style={estilo3} className='py-5'>
                                        <button className='button-demo'>
                                            <svg className='svg-demo ' height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                            {/* <span className='span-demo' href='/recetas'>Ver demo</span> */}
                                            <a href='/recetas' type="button" className="span-demo text-white">Ver demo</a>
                                        </button>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </motion.div>




        </section>
    );
}

export default PrevRecetas;








