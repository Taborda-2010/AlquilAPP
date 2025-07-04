import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { reservationService } from '../services/reservationService';

interface ProductDetailProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        pricePerDay: number;
        category: string;
        available: boolean;
        state: string;
        meetingPoint: string;
        conditions: string;
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const navigate = useNavigate();

    const handleReserve = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fromDate || !toDate) {
            alert('Por favor selecciona las fechas de reserva');
            return;
        }

        try {
            await reservationService.addReservation({
                productId: product.id,
                productName: product.name,
                renterEmail: 'felipevelez@unal.edu.co',  // Reemplazar por usuario autenticado
                fromDate,
                toDate,
            });

            alert('Reserva exitosa, serás redirigido al chat');
            navigate(`/chat/${product.id}`);  // Nueva ruta para el chat
        } catch (err) {
            alert('Ocurrió un error al reservar');
        }
    };

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className="product-detail-image" />

            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Estado:</strong> {product.state}</p>
            <p><strong>Punto de encuentro:</strong> {product.meetingPoint}</p>
            <p><strong>Condiciones:</strong> {product.conditions}</p>
            <p><strong>Precio:</strong> ${product.pricePerDay} / día</p>
            <p className={product.available ? 'available' : 'unavailable'}>
                {product.available ? 'Disponible' : 'No disponible'}
            </p>

            {product.available && (
                <form className="reservation-form" onSubmit={handleReserve}>
                    <label>Desde</label>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        required
                    />

                    <label>Hasta</label>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        required
                    />

                    <button type="submit">Reservar</button>
                </form>
            )}
        </div>
    );
};

export default ProductDetail;
