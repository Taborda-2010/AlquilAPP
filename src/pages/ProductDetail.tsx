import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/productDetail.css';
import calc from '../assets/Calc.png';

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Producto simulado
    const product = {
        id,
        title: 'Calculadora Casio FX-991',
        description: 'Calculadora científica ideal para estudiantes de ingeniería.',
        image: calc,
        price: 3000, // precio por día
        availability: 'Disponible de lunes a viernes, Julio 2025',
        location: 'Biblioteca Central, UNAL Medellín',
    };

    const [days, setDays] = useState(1);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const total = product.price * days;

    const handleReserve = () => {
        console.log(`Reserva realizada: ${days} días por $${total}`);
        setShowConfirmation(true);
        setTimeout(() => {
            navigate(`/chat/${product.id}`);
        }, 1500); // Pequeño delay para mostrar confirmación antes de redirigir
    };

    return (
        <main className="product-detail-page">
            <div className="product-detail-card">
                <img src={product.image} alt={product.title} className="product-detail-img" />

                <div className="product-detail-info">
                    <h1>{product.title}</h1>
                    <p className="price">$ {product.price.toLocaleString()} / día</p>
                    <p className="description">{product.description}</p>
                    <p><strong>Disponibilidad:</strong> {product.availability}</p>
                    <p><strong>Punto de entrega:</strong> {product.location}</p>

                    <div className="reservation-controls">
                        <label htmlFor="days">Días de alquiler:</label>
                        <input
                            id="days"
                            type="number"
                            min={1}
                            value={days}
                            onChange={(e) => setDays(Number(e.target.value))}
                        />
                        <p><strong>Total:</strong> $ {total.toLocaleString()}</p>

                        <button onClick={handleReserve}>Reservar</button>

                        {showConfirmation && (
                            <p className="confirmation">
                                ✅ Reserva realizada por {days} día(s). Total: $ {total.toLocaleString()}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
