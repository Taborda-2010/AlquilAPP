import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './router';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthProvider';
import './styles/globals.css';
import './styles/variables.css';
import './App.css';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="app">
                    <AppRoutes />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
