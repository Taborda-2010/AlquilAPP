import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    name: string;
    imageUrl: string;
    pricePerDay: number;
    category: string;
    available: boolean;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     name,
                                                     imageUrl,
                                                     pricePerDay,
                                                     category,
                                                     available,
                                                     onClick
                                                 }) => {
    return (
        <div className={`product-card ${available ? '' : 'unavailable'}`} onClick={onClick}>
            <div className="product-image-container">
                <img src={imageUrl} alt={name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-category">{category}</p>
                <p className="product-price">${pricePerDay} / día</p>
                {!available && <span className="product-status">No disponible</span>}
            </div>
        </div>
    );
};

export default ProductCard;
