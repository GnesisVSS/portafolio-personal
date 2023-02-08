import React from 'react';

const Index = () => {

    const estilo1 = {
        backgroundColor: '#484554'
    }

    const estilo2 = {
        backgroundColor: '#ADA9BB',
        paddingTop: '52px',
        paddingBottom: '52px'
    }

    

    return (
        <div>
            <div style={estilo1}>
                <div class="container col-sm-8 py-5 mx-auto">
                    <div class="row align-items-center py-2">
                        <div class="col text-white">
                            <h1 class="text-focus-in">Hola mundo! Soy Genesis, Ingeniera en Informática y Desarrolladora
                                Frontend!</h1>
                        </div>
                        <div class="col py-4">
                            <img src="img/prom.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="juegos container-fluid" style={estilo2}>
                <div class="container col-sm-8  mx-auto ">
                </div>
                <div class="d-flex flex-row-reverse">
                    <button class="cta">
                        <span class="hover-underline-animation"> Ver Más </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </div>
            </div> */}
        </div>


    );
}

export default Index;
