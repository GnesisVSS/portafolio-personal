import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Elementos/navbar';
import Typed from 'typed.js';

const Home = () => {
    
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

    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Hola mundo! Soy Genesis, ingeniera en informática y desarrolladora frontend!'
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div id='home' style={{ minHeight: '100vh'}} className='align-items-center'>

            <div>

                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >

                    <div className="container col-sm-8 py-5 mx-auto">
                        <div className="row justify-content-center rowhome">
                            <div className="col-sm-8 col-md-6 text-white align-self-center" >
                            <h1 style={{'fontSize':'48px'}}>
                                <span ref={el} />
                            </h1>
                            </div>
                            
                            <div className="col-sm-6 col-md-5 p-5 align-self-center" style={{'textAlign':'center'}}>
                                <img src="img/gifHome.gif" alt="" className='img-fluid rounded-circle'/>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>


        </div >
    );
}

export default Home;
