import React, { useEffect, useState } from 'react';

import { motion, useAnimation } from "framer-motion";
import { homeAnimation } from '../animation';
import Navbar from './Elementos/navbar';
import { useInView } from 'react-intersection-observer';

// Secciones para el Home
import Home from './Home/home';
import Proyectos from './Home/proyectos';
import SobreMi from './Home/sobreMi';
import Footer from './Elementos/footer';
import ContactForm from './Home/ContactForm';
import Hr from './Home/Hr';
import { ParallaxProvider } from 'react-scroll-parallax';


function Index() {
    


    return (

        <ParallaxProvider>
            <div>
                <Navbar />
                <Home />
                <SobreMi />
                <Proyectos />
                <Hr />
                <ContactForm />
                <Footer />
            </div>
        </ParallaxProvider>


    );
}

export default Index;
