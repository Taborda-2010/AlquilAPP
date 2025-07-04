import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    pricePerDay: number;
    category: string;
    available: boolean;
}

interface ProductListProps {
    products: Product[];
    onProductClick: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    pricePerDay={product.pricePerDay}
                    category={product.category}
                    available={product.available}
                    onClick={() => onProductClick(product.id)}
                />
            ))}
        </div>
    );
};

export default ProductList;
