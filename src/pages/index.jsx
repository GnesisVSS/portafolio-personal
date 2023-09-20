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
import HeaderExperiencia from './Elementos/headerExperiencia';


function Index() {



    return (

        <ParallaxProvider>
            <div style={{backgroundColor:'#2A0253'}}>
                <Navbar />
                <Home />
            </div>

            <HeaderExperiencia />
            <SobreMi />
            <Proyectos />
            <Hr />
            <ContactForm />
            <Footer />
        </ParallaxProvider>


    );
}

export default Index;
