import React, { useState } from 'react';
import '../styles/newProduct.css';

const NewProduct: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [category, setCategory] = useState('');
    const [availability, setAvailability] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !description || !image || !price || !category || !availability) {
            setError('Por favor completa todos los campos.');
            return;
        }

        setError('');
        console.log('Nuevo producto publicado:', {
            title,
            description,
            image,
            price,
            category,
            availability,
        });

        // Aquí puedes hacer una llamada POST a tu backend
        // Ej: axios.post('/api/productos', {...})
    };

    return (
        <main className="new-product-page">
            <form className="new-product-form" onSubmit={handleSubmit}>
                <h1>Publicar artículo</h1>

                <label htmlFor="title">Título</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej: Calculadora Casio FX-991ES"
                    required
                />

                <label htmlFor="description">Descripción</label>
                <textarea
                    id="description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe el estado del artículo, condiciones, etc."
                    required
                />

                <label htmlFor="image">URL de imagen</label>
                <input
                    id="image"
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://..."
                    required
                />

                <label htmlFor="price">Precio por día (COP)</label>
                <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />

                <label htmlFor="category">Categoría</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Seleccione una</option>
                    <option value="calculadora">Calculadora</option>
                    <option value="bata">Bata</option>
                    <option value="libro">Libro</option>
                    <option value="otros">Otros</option>
                </select>

                <label htmlFor="availability">Disponibilidad (rango de fechas o días)</label>
                <input
                    id="availability"
                    type="text"
                    placeholder="Ej: Lunes a viernes - Julio"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    required
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Publicar</button>
            </form>
        </main>
    );
};

export default NewProduct;
