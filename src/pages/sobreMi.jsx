import React from 'react';
import { IconBrandReact, IconBrandJavascript, IconBrandGit, IconBrandCss3, IconBrandHtml5 } from '@tabler/icons-react';

const SobreMi = () => {

    const estilo1 = {
        color: '#F9A826'
    }

    const estilo2 = {
        // fontFamily: ['"Lora"', 'serif'],
        fontSize: '18px'
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
            <div style={{ backgroundColor: 'rgb(255 231 241)' }} className='py-4'>

                <div className="container col py-2 mx-auto" >
                    <strong><h1 className='p-5' style={{ textAlign: 'left' }}>Experiencia</h1></strong>
                    <div className="row justify-content-center py-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-md-7 p-5 align-self-center" >
                                <div className="col text-black">
                                    <img alt='' src='img/meditating.png' className='img-fluid' />
                                </div>
                            </div>

                            <div className="col-sm-8 col-md-5 px-5 align-self-center" >
                                <div className="col text-black" >
                                    <div className='py-5'>
                                        <p style={estilo2}>
                                            A la fecha he realizado las prácticas correspondientes a mi carrera realizando una
                                            página web con wordpress y una integración de Transbank con webpay plus y One
                                            Click mall para recibir donaciones vía web. De estas experiencias destaco mi
                                            capacidad de adaptarme a herramientas que no conocía y a resolver las
                                            problemáticas propuestas por medio de investigación y motivación para seguir
                                            aprendiendo.
                                        </p>
                                    </div>
                                    <div className='py-5'>
                                        <h4>Conocimientos destacables</h4>
                                        <IconBrandReact width='50px' height='50px' style={{ color: '#61DBFB', margin: '20px' }} />

                                        <IconBrandJavascript width='50px' height='50px' style={{ color: '#ffd630', margin: '20px' }} />

                                        <IconBrandGit width='50px' height='50px' style={{ color: '#f96926', margin: '20px' }} />

                                        <IconBrandCss3 width='50px' height='50px' style={{ color: '#61DBFB', margin: '20px' }} />

                                        <IconBrandHtml5 width='50px' height='50px' style={{ color: '#f96926', margin: '20px' }} />

                                    </div>
                                </div>

                            </div>
                        </div>
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



                    </div>


                </div>

            </div>



        </section>
    );
}

export default SobreMi;
