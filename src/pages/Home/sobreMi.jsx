import { IconBrandCss3, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandReact } from '@tabler/icons-react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';



const SobreMi = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
        setScreenSize(window.innerWidth);
    }, [control, inView]);


    const boxVariant = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        hidden: { y: 300, opacity: 0 },
    }

    // const boxVariantMobile = {
    //     visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    //     hidden: { x: -200, opacity: 0 },
    // }

    const estilo2 = {
        fontSize: '18px'
    }
    const control = useAnimation()
    const headerClass = screenSize < 767 ? 'mobile' : 'pantalla';

    return (
        <section id='sobreMi' style={{ backgroundColor: '#EDE6F1', color: '#162E36' }}>
            <div className={headerClass}>
                {headerClass === "pantalla" ? <div style={{ overflow: "hidden" }}>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: "#2A0253", width: "100%", height: "110px", transform: "scaleX(-1)" }}
                    >
                        <path d="M1200 120L0 16.48V0h1200v120z" />
                    </svg>
                </div> : ''}

            </div>

            <div className='py-4 '>
                <div className="container col py-2 mx-auto">

                    <div className="row justify-content-center">
                        <div>
                            <motion.div
                                ref={ref}
                                variants={headerClass === "pantalla" ? boxVariant : ''}
                                initial="hidden"
                                animate={control}
                            >
                                <div className="row justify-content-center" >
                                    <div className="col-sm-12 col-md-12 col-xl-7 p-5 align-self-center col-imagen" >

                                        <div className="col">
                                            {/* <img alt='' src='img/pensando.gif' id='gifSobreMi' className='img-fluid' /> */}
                                            <img alt='' src='img/Group40.png' id='gifSobreMi' className='img-fluid' />

                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-xl-5 px-5 align-self-center col-texto" >

                                        <div className="col" >
                                            <strong><h1 style={{ textAlign: 'left' }} className='h1SobreMi'>Experiencia</h1></strong>

                                            <div className='py-4'>

                                                <p style={estilo2}>
                                                    A la fecha he realizado las prácticas correspondientes a mi carrera realizando una
                                                    página web con wordpress y una integración de Transbank con webpay plus y One
                                                    Click mall para recibir donaciones vía web. De estas experiencias destaco mi
                                                    capacidad de adaptarme a herramientas que no conocía y a resolver las
                                                    problemáticas propuestas por medio de investigación y motivación para seguir
                                                    aprendiendo.
                                                </p>
                                            </div>

                                            <div className='py-3' id='iconos'>
                                                <h4>Conocimientos destacables</h4>
                                                <IconBrandReact width='46px' height='46px' style={{ color: '#61DBFB', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }} />

                                                <IconBrandJavascript width='46px' height='46px' style={{ color: '#ffd630', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }} />

                                                <IconBrandGit width='46px' height='46px' style={{ color: '#f96926', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }} />

                                                <IconBrandCss3 width='46px' height='46px' style={{ color: '#61DBFB', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }} />

                                                <IconBrandHtml5 width='46px' height='46px' style={{ color: '#f96926', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }} />

                                                <div style={{ width: '46px', padding: '1px', height: '46px', margin: '14px', backgroundColor: 'white', borderRadius: '15px' }}>
                                                <img src="img/springboot-color.svg" alt="Descripción del SVG"></img>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>


                        </div>

                    </div>
                </div>
            </div>




        </section>
    );
}

export default SobreMi;
