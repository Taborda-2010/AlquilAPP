import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/Catalog/ProductList';
import './Catalog.css';

const Catalog: React.FC = () => {
    const [products] = useState([
        {
            id: '1',
            name: 'Calculadora',
            imageUrl: '/calc.jpg',
            pricePerDay: 5000,
            category: 'Herramientas',
            available: true,
        },
        {
            id: '2',
            name: 'Bicicleta',
            imageUrl: '/bike.jpg',
            pricePerDay: 10000,
            category: 'Bicicletas',
            available: false,
        },
    ]);

    const navigate = useNavigate();

    const handleProductClick = (id: string) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="catalog">
            <h2>Catálogo de productos</h2>
            <ProductList products={products} onProductClick={handleProductClick} />
        </div>
    );
};

export default Catalog;
