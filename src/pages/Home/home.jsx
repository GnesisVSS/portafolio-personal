import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Elementos/navbar';
import Typed from 'typed.js';
import { Parallax } from "react-scroll-parallax";
import styles from '../../../public/css/Home.module.scss';
import HeaderExperiencia from '../Elementos/headerExperiencia';


const copy = "HolaMundo".split("");



const Home = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
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
        setScreenSize(window.innerWidth);
    }, [control, inView]);

    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Soy Genesis, ingeniera en informática y desarrolladora frontend!'
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
    const headerClass = screenSize < 767 ? 'mobile' : 'pantalla';
    return (
        <div id='home' style={{ minHeight: '100vh', backgroundColor: '#2A0253' }} className='align-items-center'>
            <Navbar />
            <div>

                <div className="container col-sm-8 mx-auto">

                    <div className="row justify-content-center rowhome">
                        <div className="col-sm-8 col-md-6 text-white align-self-center col-titulo-home" >
                            <div className='pantalla'>
                                <Parallax
                                    easing={[1, -0.75, 1, 1.34]}
                                    translateX={[-10, -50]}
                                >

                                    <h1 style={{ 'fontSize': '48px' }}>
                                        <span ref={el} />
                                    </h1>
                                </Parallax>
                            </div>
                            <div className='mobile'>
                                <h1 style={{ 'fontSize': '48px', paddingTop: '48px' }} className='mobile'>
                                    Soy Genesis, ingeniera en informática y desarrolladora frontend!
                                </h1>

                            </div>
                        </div>


                        <div className="col-sm-6 col-md-5 p-5 align-self-center col-img-home" style={{ 'textAlign': 'center' }}>
                            <div className='pantalla'>
                                <Parallax
                                    easing={[1, -0.75, 1, 1.34]}
                                    translateX={[10, 50]}
                                >
                                    <img src="img/gifHome.gif" alt="" className='img-fluid rounded-circle' />
                                </Parallax>
                            </div>
                            <div className='mobile'>
                                <img src="img/gifHome.gif" alt="" className='img-fluid rounded-circle' />

                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </div >
    );
}

export default Home;
