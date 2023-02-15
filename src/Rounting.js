/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Index from './pages';
import Login from './pages/login';
import Recetas from './pages/recetas';
import RecetasLog from './pages/recetas-log';
import Registro from './pages/registro';
function Routing() {

    let logged = false;

    let cred = localStorage.getItem('credentials');
    if (cred) {
        logged = true
    } else {
        logged = false
    }
    console.log('User logged?', logged)



    return (
        <Router>
            {/* Redirecciones para proteger nuestras rutas */}
            <Routes>            
                <Route path='/recetas' element={<Recetas />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/recetasHome' element={logged ? <RecetasLog /> : <Navigate to='/login' />} />

            </Routes>
        </Router>
    )
}

export default Routing;
