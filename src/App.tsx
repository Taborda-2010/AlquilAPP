import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes globales
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import NewProduct from './pages/NewProduct';
import Chat from './pages/Chat';

// Estilos globales (si tienes uno)
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />

                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/new-product" element={<NewProduct />} />
                        <Route path="/chat/:productId" element={<Chat />} />
                        <Route path="/NewProduct" element={<NewProduct />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
