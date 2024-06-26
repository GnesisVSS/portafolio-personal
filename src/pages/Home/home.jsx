import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from "react-scroll-parallax";
import Typed from 'typed.js';
import Navbar from './ElementosHome/navbar';


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
                'Soy Genesis, ingeniera en informática y desarrolladora <span style=color:#f9d613> fullStack! </span>'
            ],
            typeSpeed: 20,
            backSpeed: 20,
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
        <section id='home' className='align-items-center styleDefHome1'>
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
                                    <h1>
                                        <span ref={el} />
                                    </h1>
                                </Parallax>
                            </div>
                            <div className='mobile'>
                                <h1 className='mobile tituloHomeMobile'>
                                    Soy Genesis, ingeniera en informática y desarrolladora frontend!
                                </h1>

                            </div>
                        </div>


                        <div className="col-sm-6 col-md-5 p-5 align-self-center col-img-home" >
                            <div className='pantalla'>
                                <Parallax
                                    easing={[1, -0.75, 1, 1.34]}
                                    translateX={[10, 50]}
                                >
                                    <img src="img/gifHome3.gif" alt="" className='img-fluid rounded-circle' />
                                </Parallax>
                            </div>
                            <div className='mobile'>
                                    <img src="img/gifHome3.gif" alt="" className='img-fluid rounded-circle' />

                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </section >
    );
}

export default Home;
