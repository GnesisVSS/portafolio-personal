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
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let Desplazamiento_actual = window.pageYOffset;
        if (ubicacionPrincipal >= Desplazamiento_actual) {
            document.getElementById('navbar').style.top = '0px';
        } else {
            document.getElementById('navbar').style.top = '-100px';
        }
        ubicacionPrincipal = Desplazamiento_actual;
    }


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
