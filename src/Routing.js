/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Index from './pages';
import Login from './pages/Recetas/Log/login';
import Recetas from './pages/Recetas/Recetas';
import Registro from './pages/Recetas/Log/registro';
import React, { useEffect, useState } from 'react';
import RecetasPreLog from './pages/Recetas/HomeRec.jsx';
import RegRecAdmin from './pages/Recetas/Admin/ingreso-rec-admin';
import HomeUsuario from './pages/Recetas/UsuarioLogged/HomeUsuario';
import MiPerfil from './pages/Recetas/Navs/MenuNav/miPerfil';
import RecetasGuardadasCompletas from './pages/Recetas/Navs/MenuNav/RecetasGuardadasCompletas';
import MisRecetas from './pages/Recetas/Navs/MenuNav/misRecetas';
import FormRecetas from './pages/Recetas/Navs/MenuNav/FormRecetas';

function Routing() {

    let datos = localStorage.getItem("nombreUsuario");


    return (


        <Router>
            {/* Redirecciones para proteger nuestras rutas */}
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/recetas' element={<Recetas />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/RecetasHome' element={datos ? <Navigate to='/HomeUsuario' />: <RecetasPreLog />}/>
                <Route path='/regRecAdmin' element={<RegRecAdmin />} />
                <Route path='/HomeUsuario' element={datos ? <HomeUsuario /> : <Navigate to='/login' />} />
                <Route path='/miPerfil' element={datos ? <MiPerfil /> : <Navigate to='/login' />} />
                <Route path='/misGuardados' element={datos ? <RecetasGuardadasCompletas /> : <Navigate to='/login' />} />
                <Route path='/misRecetas' element={datos ? <MisRecetas /> : <Navigate to='/login' />} />
                <Route path='/FormRecetas' element={datos ? <FormRecetas /> : <Navigate to='/login' />} />
            </Routes>
        </Router>
    )
}

export default Routing;