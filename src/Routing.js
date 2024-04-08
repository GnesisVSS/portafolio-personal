/* eslint-disable react/react-in-jsx-scope */
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './pages';
import FormRecetasAdmin from './pages/Recetas/Admin/FormRecetasAdmin';
import FormRecetas from './pages/Recetas/ElementosRecetas/Navs/MenuItems/FormRecetas';
import RecetasGuardadasCompletas from './pages/Recetas/ElementosRecetas/Navs/MenuItems/RecetasGuardadasCompletas';
import MiPerfil from './pages/Recetas/ElementosRecetas/Navs/MenuItems/miPerfil';
import RecetasPreLog from './pages/Recetas/HomeRec.jsx';
import Login from './pages/Recetas/Log/login';
import Registro from './pages/Recetas/Log/registro';
import Recetas from './pages/Recetas/Recetas';
import HomeUsuario from './pages/Recetas/UsuarioLogged/HomeUsuario';
import VistaDetalleGuardados from './pages/Recetas/UsuarioLogged/VistaDetalleGuardados';
import VistaDetalleRecetasUsuario from './pages/Recetas/UsuarioLogged/VistaDetalleRecetasUsuario';
import VistaRecetasUsuario from './pages/Recetas/UsuarioLogged/VistaRecetasUsuario';
import DetalleRecetas from './pages/Recetas/VistaDetalleRecetas';
import VistaPreDemo from './pages/Recetas/VistaPreDemo';
import InfoDetalladaId from './pages/RickAndMorty/InfoDetalladaId';
import InfoFavoritos from './pages/RickAndMorty/InfoFavoritos';
import store from './pages/RickAndMorty/Redux/store/store';
import RickAndMortyPages from './pages/RickAndMorty/RickAndMortyPages';

import '@mui/material/styles';
import VistaPreDemoRickyMorty from './pages/RickAndMorty/VistaPreDemoRickyMorty';

import Proyectos from './pages/Home/proyectos';


function Routing() {

    let datos = localStorage.getItem("nombreUsuario");

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })

    const client = new ApolloClient({
        link: from([errorLink, httpLink]),
        cache: new InMemoryCache(),
    });
    return (
        <Provider store={store}>
            <Router>
                {/* Redirecciones para proteger nuestras rutas */}
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/Proyectos' element={<Proyectos />} />
                    <Route path='/recetas' element={<Recetas />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/registro' element={<Registro />} />
                    <Route path='/RecetasHome' element={datos ? <Navigate to='/HomeUsuario' /> : <RecetasPreLog />} />
                    <Route path='/regRecAdmin' element={<FormRecetasAdmin />} />
                    <Route path='/HomeUsuario' element={datos ? <HomeUsuario /> : <Navigate to='/login' />} />
                    <Route path='/miPerfil' element={datos ? <MiPerfil /> : <Navigate to='/login' />} />
                    {/* <Route path='/misGuardados' element={datos ? <RecetasGuardadasCompletas /> : <Navigate to='/login' />} /> */}
                    <Route path='/misGuardados' element={<RecetasGuardadasCompletas />} />
                    <Route path='/misRecetas' element={datos ? <VistaRecetasUsuario /> : <Navigate to='/login' />} />
                    <Route path='/FormRecetas' element={datos ? <FormRecetas /> : <Navigate to='/login' />} />
                    <Route path='/DetalleRecetas' element={<DetalleRecetas />} />
                    <Route path='/DetalleGuardados' element={<VistaDetalleGuardados />} />
                    <Route path='/DetalleMisRecetas' element={<VistaDetalleRecetasUsuario />} />
                    <Route path='/DemoRecetas' element={<VistaPreDemo />} />
                    {/* RUTAS RICK Y MORTY */}
                    <Route path='/DemoRickyMorty' element={<ApolloProvider client={client}>
                        <VistaPreDemoRickyMorty client={client} />
                    </ApolloProvider>} style={{backgroundColor: 'white'}}/>
                    <Route path='/RickYMorty' element={<ApolloProvider client={client}>
                        <RickAndMortyPages client={client} />
                    </ApolloProvider>} style={{backgroundColor: 'white'}}/>
                    <Route path='/InfoDetallada' element={<ApolloProvider client={client}>
                        <InfoDetalladaId />
                    </ApolloProvider>} />
                    <Route path='/MisFavoritos' element={<ApolloProvider client={client}>
                        <InfoFavoritos />
                    </ApolloProvider>} />
                    
                    
                </Routes>
            </Router>
        </Provider>
    )
}

export default Routing;