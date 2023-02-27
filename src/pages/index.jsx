import React, { useEffect } from 'react';
import PrevRecetas from './prev-recetas';
import SobreMi from './sobreMi';
import { motion, useAnimation } from "framer-motion";
import { homeAnimation } from '../animation';
import Navbar from './navbar';
import { useInView } from 'react-intersection-observer';
import Home from './home';

function Index() {

    

    return (
        <div id='home'>
            <Navbar/>
            <Home/>
            <SobreMi/>
            <PrevRecetas />
        </div>
    );
}

export default Index;
