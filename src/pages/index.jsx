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
                        <div className="col-sm-8 col-md-5 px-5 text-white">
                            <h1 className="text-focus-in">Hola mundo! Soy Genesis, ingeniera en informática y desarrolladora
                                frontend!</h1>
                        </div>
                        <div className="col-sm-6 col-md-7 p-5">
                            <img src="img/composition-11.png" alt="" className='img-fluid rounded-circle'/>
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
