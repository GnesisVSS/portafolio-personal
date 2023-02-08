import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom'
import Index from './pages';
import Login from './pages/login';
import Recetas from './pages/recetas';
import Registro from './pages/registro';
function Routing() {
    
    
    return (
        <Router>
            {/* Redirecciones para proteger nuestras rutas */}
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/recetas' element={<Recetas/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registro' element={<Registro/>} />
                {/* Login route */}
            </Routes>
        </Router>
    )
}

export default Routing;
