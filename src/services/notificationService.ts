// src/services/notificationService.ts

export interface Notification {
    id: string;
    type: 'reserva' | 'recordatorio' | 'calificacion' | 'otro';
    message: string;
    date: string; // ISO o fecha legible
}

const mockNotifications: Notification[] = [
    {
        id: '1',
        type: 'reserva',
        message: 'Tu reserva de la calculadora ha sido confirmada.',
        date: '2025-07-05',
    },
    {
        id: '2',
        type: 'recordatorio',
        message: 'Recuerda devolver la bicicleta mañana.',
        date: '2025-07-04',
    },
    {
        id: '3',
        type: 'calificacion',
        message: 'Por favor califica al arrendador de tu última reserva.',
        date: '2025-07-03',
    },
];

export const notificationService = {
    getNotifications: async (): Promise<Notification[]> => {
        // Simula retraso de red
        await delay(300);
        return mockNotifications;
    },

    addNotification: async (notification: Notification): Promise<void> => {
        await delay(200);
        mockNotifications.push(notification);
        console.log('Notificación agregada:', notification);
    },

    clearNotifications: async (): Promise<void> => {
        await delay(200);
        mockNotifications.length = 0;
        console.log('Notificaciones limpiadas');
    },
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
