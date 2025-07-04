import React, { useState } from 'react';
import './Admin.css';

interface Product {
    id: string;
    name: string;
    available: boolean;
}

interface Reservation {
    id: string;
    productName: string;
    renterEmail: string;
    fromDate: string;
    toDate: string;
}

const Admin: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: '1', name: 'Calculadora', available: true },
        { id: '2', name: 'Bicicleta', available: false },
    ]);

    const [reservations, setReservations] = useState<Reservation[]>([
        {
            id: '1',
            productName: 'Bicicleta',
            renterEmail: 'juan@unal.edu.co',
            fromDate: '2025-07-04',
            toDate: '2025-07-06',
        },
    ]);

    const toggleAvailability = (id: string) => {
        setProducts((prev) =>
            prev.map((prod) =>
                prod.id === id ? { ...prod, available: !prod.available } : prod
            )
        );
    };

    const cancelReservation = (id: string) => {
        if (window.confirm('¿Estás seguro de cancelar esta reserva?')) {
            setReservations((prev) => prev.filter((res) => res.id !== id));
        }
    };

    return (
        <div className="admin-panel">
            <h2>Panel de Administración</h2>

            <section className="admin-section">
                <h3>Productos publicados</h3>
                <ul className="admin-list">
                    {products.map((prod) => (
                        <li key={prod.id} className="admin-list-item">
                            <span>{prod.name}</span>
                            <span className={`status ${prod.available ? 'available' : 'unavailable'}`}>
                {prod.available ? 'Disponible' : 'No disponible'}
              </span>
                            <button onClick={() => toggleAvailability(prod.id)}>
                                Cambiar estado
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="admin-section">
                <h3>Reservas activas</h3>
                <ul className="admin-list">
                    {reservations.length === 0 ? (
                        <p className="no-reservations">No hay reservas activas.</p>
                    ) : (
                        reservations.map((res) => (
                            <li key={res.id} className="admin-list-item">
                                <div>
                                    <strong>{res.productName}</strong> - {res.renterEmail}
                                    <div>
                                        {res.fromDate} → {res.toDate}
                                    </div>
                                </div>
                                <button onClick={() => cancelReservation(res.id)}>
                                    Cancelar
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </section>
        </div>
    );
};

export default Admin;
