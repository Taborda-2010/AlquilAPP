import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);

    const login = (email: string, isAdmin: boolean) => {
        setUser({ email, isAdmin });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
