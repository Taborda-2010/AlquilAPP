import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simula usuarios
        // admin@unal.edu.co → admin
        // user@unal.edu.co → usuario normal
        let isAdmin = false;

        if (email === 'admin@unal.edu.co' && password === 'admin123') {
            isAdmin = true;
        } else if (email === 'user@unal.edu.co' && password === 'user123') {
            isAdmin = false;
        } else {
            alert('Usuario o contraseña incorrectos');
            return;
        }

        login(email, isAdmin);
        alert(`Bienvenido ${isAdmin ? 'administrador' : 'usuario'}`);
        navigate('/');
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Correo institucional</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="usuario@unal.edu.co"
                    required
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    required
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
