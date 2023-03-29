import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../navbar';

const Home = () => {
    const estilo1 = {
        // backgroundColor: '#484554'
    }

    const estilo2 = {
        backgroundColor: '#ADA9BB',
        paddingTop: '52px',
        paddingBottom: '52px'
    }

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
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
        <div id='home' style={{ minHeight: '100vh' }}>
            
            <div style={estilo1}>

                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >
                    <div className="container col-sm-8 py-5 mx-auto">
                        <div className="row align-items-center py-2">
                            <div className="col-sm-8 col-md-5 px-5 text-white" >
                                <h1 className="text-focus-in">Hola mundo! Soy Genesis, ingeniera en informática y desarrolladora
                                    frontend!</h1>
                            </div>
                            <div
                                className="col-sm-6 col-md-7 p-5"

                            >
                                <img src="img/composition-11.png" alt="" className='img-fluid rounded-circle' />

                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>


        </div >
    );
}

export default Home;
