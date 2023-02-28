import React, { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion";
import { homeAnimation } from '../animation';
import Navbar from './navbar';
import { useInView } from 'react-intersection-observer';

// Secciones para el Home
import Home from './Home/home';
import Proyectos from './Home/proyectos';
import SobreMi from './Home/sobreMi';
function Index() {

    

    return (
        <div id='home'>
            <Navbar/>
            <Home/>
            <SobreMi/>
            <Proyectos />
        </div>
    );
}

export default Index;
