// src/services/authService.ts

interface User {
    email: string;
    token: string;
}

const mockToken = 'mock-jwt-token';

export const authService = {
    login: async (email: string, password: string): Promise<User> => {
        // Simula retraso de red
        await delay(500);

        if (!email.endsWith('@unal.edu.co')) {
            throw new Error('Solo se permiten correos institucionales (@unal.edu.co)');
        }

        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }

        // Simula éxito
        return { email, token: mockToken };
    },

    register: async (email: string, password: string): Promise<User> => {
        await delay(500);

        if (!email.endsWith('@unal.edu.co')) {
            throw new Error('Solo se permiten correos institucionales (@unal.edu.co)');
        }

        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }

        // Simula éxito
        return { email, token: mockToken };
    },

    logout: (): void => {
        // Aquí puedes limpiar el almacenamiento local o de sesión
        console.log('Usuario desconectado');
    },
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
