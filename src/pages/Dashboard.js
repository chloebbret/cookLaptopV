import React from 'react';
import MainLayout from '../component/MainLayout';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <MainLayout>
            <div className="dashboard">
                <section className="section">
                    <h2>Dernières sorties</h2>
                    <div className="card-container">
                        <div className="card">Recette 1</div>
                        <div className="card">Recette 2</div>
                        <div className="card">Recette 3</div>
                    </div>
                </section>
                <section className="section">
                    <h2>Pour vous</h2>
                    <div className="card-container">
                        <div className="card">Recette 1</div>
                        <div className="card">Recette 2</div>
                        <div className="card">Recette 3</div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

export default Dashboard;
