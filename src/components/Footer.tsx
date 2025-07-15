import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} AlquilApp UNAL. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="/#términos">Términos</a>
                    <a href="/#privacidad">Privacidad</a>
                    <a href="/#contacto">Contacto</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
