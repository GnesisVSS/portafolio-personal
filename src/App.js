import logo from './logo.svg';
import React from 'react';

import './App.css';
import Home from './pages/home';
import ReactDOM from 'react-dom/client';
import { Formik } from 'formik/dist';
import RecetasLog from './pages/recetas-log';
import Recetas from './pages/recetas';
import Index from './pages';
import PrevRecetas from './pages/prev-recetas';


function App() {
  return (
    <div className="App" style={{backgroundColor:'#484554'}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Index/>
      
      
    </div>
  );
}

export default App;
