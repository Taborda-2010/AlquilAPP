import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


export const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
            path="/product/:id"
            element={
                <ProductDetail
                    product={{
                        id: '1',
                        name: 'Producto de prueba',
                        imageUrl: '/example.jpg',
                        pricePerDay: 5000,
                        category: 'Herramientas',
                        available: true,
                        state: 'Como nuevo',
                        meetingPoint: 'Biblioteca Central',
                        conditions: 'Usar con cuidado',
                    }}
                />
            }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
);
