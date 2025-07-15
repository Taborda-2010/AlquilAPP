import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.endsWith('@unal.edu.co')) {
            setError('Debe usar un correo institucional (@unal.edu.co)');
            return;
        }

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setError('');
        console.log('Login enviado:', { email, password });

        // Aquí iría la llamada al backend con fetch o axios
        // Ej: await axios.post('/api/login', { email, password })
    };

    return (
        <main className="login-page">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Iniciar Sesión</h1>

                <label htmlFor="email">Correo institucional</label>
                <input
                    type="email"
                    id="email"
                    placeholder="usuario@unal.edu.co"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Ingresar</button>

                <p className="login-register-link">
                    ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
            </form>
        </main>
    );
};

export default Login;
