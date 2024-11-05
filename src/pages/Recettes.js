import React from 'react';
import MainLayout from '../component/MainLayout';
import '../styles/Recettes.css';
import { Link } from 'react-router-dom';

function Recettes() {
    return (
        <MainLayout>
            <div className="recette">
                <Link to="/dashboard" style={{ textDecoration: 'none' }}><button className="backToDashboard">Back</button></Link>
                <section className="section">
                    <div className="card-container">
                        <div className="card">Recette 1</div>
                        <div className="card">Recette 2</div>
                        <div className="card">Recette 3</div>
                        <div className="card">Recette 4</div>
                        <div className="card">Recette 5</div>
                        <div className="card">Recette 6</div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

export default Recettes;
