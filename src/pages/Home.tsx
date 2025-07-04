import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <div className="home-container">
            <h1>Bienvenido a Alquilapp UNAL</h1>
            <p>La plataforma de confianza para alquilar y prestar entre estudiantes de la Universidad Nacional.</p>

            <div className="home-buttons">
                {user ? (
                    <>
                        <button onClick={() => navigate('/catalog')}>Ver catálogo</button>
                        <button onClick={() => navigate('/profile')}>Mi perfil</button>
                        {user.isAdmin && (
                            <button onClick={() => navigate('/admin')}>Administrar publicaciones</button>
                        )}
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/login')}>Iniciar sesión</button>
                        <button onClick={() => navigate('/register')}>Registrarse</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
