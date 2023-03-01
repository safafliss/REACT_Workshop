import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyContext.Provider value= {{username: "safa", loggedIn: true}}> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </MyContext.Provider> */}
    {/* <Hello name="Med Ali"/>
    <Welcome name="safa"/> */}
  </React.StrictMode>
);
