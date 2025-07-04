import { createContext } from 'react';

interface AuthUser {
    email: string;
    isAdmin: boolean;
}

interface AuthContextType {
    user: AuthUser | null;
    login: (email: string, isAdmin: boolean) => void;
    logout: () => void;
}

// ✅ Crea y exporta el contexto
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
