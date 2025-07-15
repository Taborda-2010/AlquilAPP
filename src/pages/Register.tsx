import React, { useState } from 'react';
import '../styles/register.css';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.endsWith('@unal.edu.co')) {
            setError('Solo se permite correo institucional @unal.edu.co');
            return;
        }

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        setError('');
        console.log('Registrando usuario:', { name, email, password });

        // Aquí va la llamada al backend (POST)
        // Ejemplo: await axios.post('/api/register', { name, email, password })
    };

    return (
        <main className="register-page">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Crear cuenta</h1>

                <label htmlFor="name">Nombre completo</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Correo institucional</label>
                <input
                    id="email"
                    type="email"
                    placeholder="usuario@unal.edu.co"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Registrarse</button>
            </form>
        </main>
    );
};

export default Register;
