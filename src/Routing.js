/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages';
import Login from './pages/login';
import Recetas from './pages/recetas';
import Registro from './pages/registro';
import React from 'react';
import RecetasPreLog from './pages/recetas-pre-log';
import RegRecAdmin from './pages/ingreso-rec-admin';

function Routing() {
    return (
        <Router>
            {/* Redirecciones para proteger nuestras rutas */}
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/recetas' element={<Recetas />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/HomeLogin' element={<RecetasPreLog />} />
                <Route path='/regRecAdmin' element={<RegRecAdmin />} />
            </Routes>
        </Router>
    )
}

export default Routing;