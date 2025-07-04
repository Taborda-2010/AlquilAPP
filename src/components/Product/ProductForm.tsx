import React, { useState } from 'react';
import './ProductForm.css';

interface ProductFormProps {
    onSubmit: (product: any) => void; // Puedes tipar mejor según tu modelo
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [state, setState] = useState('');
    const [pricePerDay, setPricePerDay] = useState<number | ''>('');
    const [available, setAvailable] = useState(true);
    const [meetingPoint, setMeetingPoint] = useState('');
    const [conditions, setConditions] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !pricePerDay || !meetingPoint) {
            alert('Por favor completa los campos obligatorios.');
            return;
        }

        const newProduct = {
            name,
            imageUrl,
            state,
            pricePerDay,
            available,
            meetingPoint,
            conditions,
        };

        onSubmit(newProduct);
        alert('Producto publicado con éxito');
        // Limpiar formulario
        setName('');
        setImageUrl('');
        setState('');
        setPricePerDay('');
        setAvailable(true);
        setMeetingPoint('');
        setConditions('');
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h3>Publicar producto</h3>

            <label>Nombre *</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: Calculadora científica"
                required
            />

            <label>URL de imagen</label>
            <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="http://..."
            />

            <label>Estado</label>
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Ej: Como nueva, poco uso"
            />

            <label>Precio por día (COP) *</label>
            <input
                type="number"
                value={pricePerDay}
                onChange={(e) => setPricePerDay(Number(e.target.value))}
                placeholder="5000"
                required
            />

            <label>Punto de encuentro *</label>
            <input
                type="text"
                value={meetingPoint}
                onChange={(e) => setMeetingPoint(e.target.value)}
                placeholder="Ej: Biblioteca Central"
                required
            />

            <label>Condiciones de uso</label>
            <textarea
                value={conditions}
                onChange={(e) => setConditions(e.target.value)}
                placeholder="Ej: No prestar a terceros, devolución el mismo día"
            />

            <div className="available-toggle">
                <label>Disponible</label>
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </div>

            <button type="submit">Publicar</button>
        </form>
    );
};

export default ProductForm;
