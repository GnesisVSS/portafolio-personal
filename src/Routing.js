/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Index from './pages';
import Login from './pages/login';
import Recetas from './pages/recetas';
import RecetasLog from './pages/recetas-log';
import Registro from './pages/registro';
import React, { useEffect, useRef } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SobreMi from './pages/sobreMi';



function Routing() {

    

    return (

        <Router>
            
            {/* Redirecciones para proteger nuestras rutas */}
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/recetas' element={<Recetas />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
            </Routes>
        </Router>

    )
}

export default Routing;