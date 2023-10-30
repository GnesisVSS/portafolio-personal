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
import MiPerfil from './pages/Recetas/ElementosRecetas/Navs/MenuItems/miPerfil';
import RecetasGuardadasCompletas from './pages/Recetas/ElementosRecetas/Navs/MenuItems/RecetasGuardadasCompletas';
import MisRecetas from './pages/Recetas/ElementosRecetas/Navs/MenuItems/misRecetas';
import FormRecetas from './pages/Recetas/ElementosRecetas/Navs/MenuItems/FormRecetas';
import VistaRecetasUsuario from './pages/Recetas/UsuarioLogged/VistaRecetasUsuario';
import DetalleRecetas from './pages/Recetas/VistaDetalleRecetas';
import FormIngredientesAdmin from './pages/Recetas/Admin/FormIngredientesAdmin';
import FormRecetasAdmin from './pages/Recetas/Admin/FormRecetasAdmin';
import VistaDetalleGuardados from './pages/Recetas/UsuarioLogged/VistaDetalleGuardados';
import VistaDetalleRecetasUsuario from './pages/Recetas/UsuarioLogged/VistaDetalleRecetasUsuario';
import VistaPreDemo from './pages/Recetas/VistaPreDemo';
import RickAndMortyPages from './pages/RickAndMorty/RickAndMortyPages';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import store from './pages/RickAndMorty/Redux/store/store';
import { Provider } from 'react-redux';
import InfoDetalladaId from './pages/RickAndMorty/InfoDetalladaId';
import InfoFavoritos from './pages/RickAndMorty/InfoFavoritos';

import VistaPreDemoRickyMorty from './pages/RickAndMorty/VistaPreDemoRickyMorty';
import '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

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
                    <Route path='/misGuardados' element={datos ? <RecetasGuardadasCompletas /> : <Navigate to='/login' />} />
                    <Route path='/misRecetas' element={datos ? <VistaRecetasUsuario /> : <Navigate to='/login' />} />
                    <Route path='/FormRecetas' element={datos ? <FormRecetas /> : <Navigate to='/login' />} />
                    <Route path='/DetalleRecetas' element={<DetalleRecetas />} />
                    <Route path='/DetalleGuardados' element={<VistaDetalleGuardados />} />
                    <Route path='/DetalleMisRecetas' element={<VistaDetalleRecetasUsuario />} />
                    <Route path='/DemoRecetas' element={<VistaPreDemo />} />
                    {/* RUTAS RICK Y MORTY */}
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