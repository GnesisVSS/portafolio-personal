// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Imports de Redux
// import { Provider } from 'react-redux';


// Importamos las hojas de estilos
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import Routing from './Rounting';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

ReactDOM.render(
    <React.StrictMode>
        <Routing></Routing>
    </React.StrictMode>,
    document.getElementById('root'),
);
