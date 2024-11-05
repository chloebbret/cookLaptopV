// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Signup from './pages/Signup';
// import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Recettes from './pages/Recettes';
import Cocktails from './pages/Cocktails';
import Favoris from './pages/Favoris';

function MainApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signup" element={<Signup />} />
                {/*<Route path="/logout" element={<Logout />} />*/}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recettes" element={<Recettes />} />
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/favoris" element={<Favoris />} />
            </Routes>
        </Router>
    );
}

export default MainApp;
