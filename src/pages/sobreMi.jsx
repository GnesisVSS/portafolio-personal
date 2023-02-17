import React from 'react';
import { IconBrandReact, IconBrandJavascript, IconBrandGit, IconBrandCss3, IconBrandHtml5 } from '@tabler/icons-react';

const SobreMi = () => {

    const estilo1 = {
        color: '#F9A826'
    }

    const estilo2 = {
        fontFamily: ['"Lora"', 'serif'],
        textAlign: 'justify'
    }

    const estilo3 = {
        textAlign: 'center',
        color: '#61DBFB'
    }

    const estilo4 = {
        height: '578px',
        width: '578px'
    }

    return (
        <section id='sobreMi' >
            <div style={{ backgroundColor: 'white' }}>

                <div className="container col py-2 mx-auto">
                    <strong><h1 className='p-5' style={{ textAlign: 'left' }}>Sobre Mi</h1></strong>
                    <div className="row  py-5">
                        {/* <div class="col-2" >
                            <div class="col text-black" >

                                <ul >
                                    <h4>Conocimientos en</h4>
                                    <li class="list-group-item py-2"><IconBrandReact width='50px' height='50px' style={{ color: '#61DBFB' }} />
                                        React JS
                                    </li>
                                    <li class="list-group-item py-2"><IconBrandJavascript width='50px' height='50px' style={{ color: '#ffd630' }} />
                                        JavaScript
                                    </li>
                                    <li class="list-group-item py-2"><IconBrandGit width='50px' height='50px' style={{ color: '#f96926' }} />
                                        Git
                                    </li>
                                    <li class="list-group-item py-2"><IconBrandCss3 width='50px' height='50px' style={{ color: '#61DBFB' }} />
                                        CSS
                                    </li>
                                    <li class="list-group-item py-2"><IconBrandHtml5 width='50px' height='50px' style={{ color: '#f96926' }} />
                                        HTML
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col px-5" >
                            <div className="col text-black">
                                <img alt='' src='img/sobremi.svg' className='card-img-top' />
                            </div>
                        </div>

                        <div className="col-6" >
                            <div className="col text-black" >
                                <h4>Experiencia</h4>
                                <div className='py-4'>  
                                    <p style={estilo2}>
                                        A la fecha he realizado las prácticas correspondientes a mi carrera realizando una
                                        página web con wordpress y una integración de Transbank con webpay plus y One
                                        Click mall para recibir donaciones vía web. De estas experiencias destaco mi
                                        capacidad de adaptarme a herramientas que no conocía y a resolver las
                                        problemáticas propuestas por medio de investigación y motivación para seguir
                                        aprendiendo
                                    </p>
                                </div>
                                <div className='py-4'>
                                    <h4>Conocimientos Destacables</h4>
                                    <IconBrandReact width='50px' height='50px' style={{ color: '#61DBFB', margin: '20px' }} />

                                    <IconBrandJavascript width='50px' height='50px' style={{ color: '#ffd630', margin: '20px' }} />

                                    <IconBrandGit width='50px' height='50px' style={{ color: '#f96926', margin: '20px' }} />

                                    <IconBrandCss3 width='50px' height='50px' style={{ color: '#61DBFB', margin: '20px' }} />

                                    <IconBrandHtml5 width='50px' height='50px' style={{ color: '#f96926', margin: '20px' }} />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </section>
    );
}

export default SobreMi;









