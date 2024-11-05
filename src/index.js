import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppRouter from './router';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);

reportWebVitals();
