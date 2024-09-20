// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// import App from './App';

// Imports de Redux
// import { Provider } from 'react-redux';


// Importamos las hojas de estilos
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import Routing from './Routing';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Routing></Routing>
        </React.StrictMode>
    )

} else {
    console.error('Element with id "root" not found');
}




