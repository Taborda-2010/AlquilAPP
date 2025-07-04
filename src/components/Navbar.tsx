import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Alquilapp UNAL</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Catálogo
                    </NavLink>
                </li>

                {user && (
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Perfil
                        </NavLink>
                    </li>
                )}

                {user && user.isAdmin && (
                    <li>
                        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Admin
                        </NavLink>
                    </li>
                )}

                {!user ? (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Sign in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Sign up
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <li>
                        <button className="signout-button" onClick={logout}>
                            Sign out
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
