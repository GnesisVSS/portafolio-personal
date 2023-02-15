import React from 'react';
import PrevRecetas from './prev-recetas';
import SobreMi from './sobreMi';

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
        <div id='home'>
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
            <SobreMi/>
            <PrevRecetas/>
            
        </div>


    );
}

export default Index;
