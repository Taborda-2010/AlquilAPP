import React from 'react';
import '../styles/profile.css';
import bata from '../assets/calculadora.png';
import bici from '../assets/calculadora.png';
import calculadora from '../assets/calculadora.png';

const mockUser = {
    name: 'Felipe Velez',
    email: 'felipevelez@unal.edu.co',
    reputation: 4.5,
};

const mockPublished = [
    {
        id: 1,
        title: 'Calculadora Casio FX-991ES',
        price: 3000,
        image: calculadora,
    },
    {
        id: 2,
        title: 'Bata de laboratorio blanca',
        price: 5000,
        image: bata,
    },
];

const mockRentals = [
    {
        id: 3,
        title: 'Bici',
        price: 6000,
        image: bici,
        status: 'En curso',
    },
];

const Profile: React.FC = () => {
    return (
        <main className="profile-page">
            <section className="profile-info">
                <h1>{mockUser.name}</h1>
                <p>{mockUser.email}</p>
                <p>⭐ Reputación: {mockUser.reputation}/5</p>
            </section>

            <section className="profile-section">
                <h2>Mis artículos publicados</h2>
                <div className="profile-grid">
                    {mockPublished.map((item) => (
                        <div key={item.id} className="profile-card">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>$ {item.price.toLocaleString()} / día</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="profile-section">
                <h2>Alquileres en curso</h2>
                <div className="profile-grid">
                    {mockRentals.map((item) => (
                        <div key={item.id} className="profile-card">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Estado: {item.status}</p>
                            <p>$ {item.price.toLocaleString()} / día</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Profile;
