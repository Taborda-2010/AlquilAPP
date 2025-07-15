import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import logo from '../assets/alquilapp.png';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <section className="home-content">
                <h1 className="home-title">Bienvenido a AlquilApp UNAL</h1>
                <p className="home-description">
                    La plataforma de alquiler entre estudiantes de la Universidad Nacional. Encuentra y comparte artículos académicos como calculadoras, libros, batas, kits de laboratorio y más.
                </p>

                <div className="home-buttons">
                    <button onClick={() => navigate('/catalog')}>Ver Catálogo</button>
                    <button onClick={() => navigate('/login')} className="secondary">Iniciar Sesión</button>
                </div>
            </section>

            <section className="home-image">
                <img src= {logo}  alt="alquiler universitario" />
            </section>
        </main>
    );
};

export default Home;
