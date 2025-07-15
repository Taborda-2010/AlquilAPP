import React from 'react';
import '../styles/productCard.css';

type ProductProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    onClick: () => void;
};

const ProductCard: React.FC<ProductProps> = ({  title, image, price, onClick }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-img" />
            <h3 className="product-title">{title}</h3>
            <p className="product-price">$ {price.toLocaleString()} / día</p>
            <button className="product-btn" onClick={onClick}>
                Ver más
            </button>
        </div>
    );
};

export default ProductCard;
