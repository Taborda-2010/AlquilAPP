import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
    // Aquí podrías obtener el usuario desde contexto o props en el futuro
    const mockUser = {
        name: 'Felipe Vélez',
        email: 'felipevelez@unal.edu.co',
    };

    const mockPublishedProducts = [
        { id: '1', name: 'Calculadora', available: true },
        { id: '2', name: 'Libro de física', available: false },
    ];

    const mockReservations = [
        { id: '1', productName: 'Bicicleta', fromDate: '2025-07-10', toDate: '2025-07-12' },
    ];

    return (
        <div className="profile-container">
            <h2>Mi perfil</h2>

            <div className="profile-info">
                <p><strong>Nombre:</strong> {mockUser.name}</p>
                <p><strong>Correo:</strong> {mockUser.email}</p>
            </div>

            <div className="profile-section">
                <h3>Mis publicaciones</h3>
                {mockPublishedProducts.length === 0 ? (
                    <p>No tienes publicaciones.</p>
                ) : (
                    <ul>
                        {mockPublishedProducts.map((prod) => (
                            <li key={prod.id}>
                                {prod.name} - {prod.available ? 'Disponible' : 'No disponible'}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="profile-section">
                <h3>Mis reservas</h3>
                {mockReservations.length === 0 ? (
                    <p>No tienes reservas activas.</p>
                ) : (
                    <ul>
                        {mockReservations.map((res) => (
                            <li key={res.id}>
                                {res.productName}: {res.fromDate} → {res.toDate}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Profile;
