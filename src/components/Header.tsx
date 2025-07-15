import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    AlquilApp UNAL
                </Link>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/">Inicio</Link>
                    <Link to="/catalog">Catálogo</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/NewProduct" className="new-product-link">Publicar Producto</Link>
                    <Link to="/login" className="login-btn">Login</Link>
                </nav>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
