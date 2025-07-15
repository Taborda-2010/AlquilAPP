import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/catalog.css';

// Imágenes locales
import calculadora from '../assets/calculadora.png';
import bata from '../assets/bata.png';
import kit from '../assets/kit.png';
import multi from '../assets/multi.png';

// Tipo de producto
type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
};

// Productos simulados
const mockProducts: Product[] = [
    {
        id: 1,
        title: 'Calculadora Casio FX-991ES',
        image: calculadora,
        price: 3000,
    },
    {
        id: 2,
        title: 'Bata de Laboratorio',
        image: calculadora,
        price: 5000,
    },
    {
        id: 3,
        title: 'Kit de dibujo técnico',
        image: calculadora,
        price: 2500,
    },

];

const Catalog: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        // Redirige al detalle del producto
        navigate(`/product/${id}`);
    };

    return (
        <main className="catalog-page">
            <h1 className="catalog-title">Catálogo de artículos</h1>

            {/* Filtros (placeholder) */}
            <div className="catalog-filters">
                <input type="text" placeholder="Buscar..." />
                <select>
                    <option>Filtrar por</option>
                    <option>Precio (asc)</option>
                    <option>Precio (desc)</option>
                </select>
            </div>

            {/* Grilla de productos */}
            <div className="catalog-grid">
                {mockProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        onClick={() => handleClick(product.id)}
                    />
                ))}
            </div>
        </main>
    );
};

export default Catalog;
