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
                <div className="container col-sm-8 py-5 mx-auto">
                    <div className="row align-items-center py-2">
                        <div className="col text-white">
                            <h1 className="text-focus-in">Hola mundo! Soy Genesis, Ingeniera en Informática y Desarrolladora
                                Frontend!</h1>
                        </div>
                        {/* <div className="col py-4">
                            <img src="img/prom.svg" alt="" />
                        </div> */}
                        <div className="col">
                            <img src="img/prom.svg" alt="" className='card-img-top'/>
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
