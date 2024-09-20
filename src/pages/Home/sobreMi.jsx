import { Tooltip } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';



const SobreMi = () => {
    const control = useAnimation()
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


                                        </div>
                                    </div>
                                </div>
                                <div className='py-3 row' id='iconos' >
                                    <strong><h2 style={{ textAlign: 'left' }}>Conocimientos destacables</h2></strong>
                                    <div className='col py-2' style={{ border: '1px solid grey', borderRadius: '25px', textAlign: 'center', margin: '12px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <h4>Lenguajes</h4>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Tooltip title="Java">
                                                    <img src='img/icons/java.svg' height={'32px'} className='px-2' alt='Java' />
                                                </Tooltip>
                                                <Tooltip title="JavaScript">
                                                    <img src='img/icons/javascript.svg' height={'32px'} className='px-2' alt='Javascript' />
                                                </Tooltip>
                                                <Tooltip title="C#">
                                                    <img src='img/icons/cSharp.svg' height={'32px'} className='px-2' alt="C#" />
                                                </Tooltip>
                                                <Tooltip title="Python">
                                                    <img src='img/icons/python.svg' height={'32px'} className='px-2' alt="Python" />
                                                </Tooltip>
                                                <Tooltip title="Typescript">
                                                    <img src='img/icons/typescript.svg' height={'32px'} className='px-2' alt="Typescript" />
                                                </Tooltip>
                                                <Tooltip title="PHP">
                                                    <img src='img/icons/php.svg' height={'32px'} className='px-2' alt="PHP" />
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col py-2' style={{ border: '1px solid grey', borderRadius: '25px', textAlign: 'center', margin: '12px' }}>
                                        <h4>Frameworks</h4>
                                        <Tooltip title=".NET">
                                            <img src='img/icons/dotNet.svg' height={'32px'} className='px-2' alt=".net" />
                                        </Tooltip>
                                        <Tooltip title="React">
                                            <img src='img/icons/react.svg' height={'32px'} className='px-2' alt='React' />
                                        </Tooltip>
                                        <Tooltip title="Spring Boot">
                                            <img src='img/icons/springboot.svg' height={'32px'} className='px-2' alt='Spring Boot' />
                                        </Tooltip>
                                        <Tooltip title="Django">
                                            <img src='img/icons/django.svg' height={'32px'} className='px-2' alt='Django' />
                                        </Tooltip>
                                        <Tooltip title="Bootstrap">
                                            <img src='img/icons/bootstrap.svg' height={'32px'} className='px-2' alt='Bootstrap' />
                                        </Tooltip>
                                    </div>

                                    <div className='col py-2' style={{ border: '1px solid grey', borderRadius: '25px', textAlign: 'center', margin: '12px' }}>
                                        <h4>Bases de Datos</h4>
                                        <Tooltip title="MySQL">
                                            <img src='img/icons/mySql.svg' height={'32px'} className='px-2' alt='MySQL' />
                                        </Tooltip>
                                        <Tooltip title="Microsoft SQL Server">
                                            <img src='img/icons/sqlServer.svg' height={'32px'} className='px-2' alt='Microsoft SQL Server' />
                                        </Tooltip>
                                        <Tooltip title="Oracle SQL">
                                            <img src='img/icons/oracleSql.svg' height={'32px'} className='px-2' alt='Oracle SQL' />
                                        </Tooltip>
                                        <Tooltip title="AWS RDS">
                                            <img src='img/icons/rds.svg' height={'32px'} className='px-2' alt='AWS RDS' />
                                        </Tooltip>
                                        <Tooltip title="GraphQL">
                                            <img src='img/icons/graph.svg' height={'32px'} className='px-2' alt='GraphQL' />
                                        </Tooltip>

                                    </div>
                                    <div className='col py-2' style={{ border: '1px solid grey', borderRadius: '25px', textAlign: 'center', margin: '12px' }}>
                                        <h4>Herramientas</h4>
                                        <Tooltip title="Git">
                                            <img src='img/icons/git.svg' height={'32px'} className='px-2' alt='Git' />
                                        </Tooltip>
                                        <Tooltip title="HTML">
                                            <img src='img/icons/html.svg' height={'32px'} className='px-2' alt='HTML' />
                                        </Tooltip>
                                        <Tooltip title="CSS">
                                            <img src='img/icons/css.svg' height={'32px'} className='px-2' alt='CSS' />
                                        </Tooltip>
                                        <Tooltip title="Jira">
                                            <img src='img/icons/jira.svg' height={'32px'} className='px-2' alt='Jira' />
                                        </Tooltip>
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
