// src/services/reservationService.ts

export interface Reservation {
    id: string;
    productId: string;
    productName: string;
    renterEmail: string;
    fromDate: string;
    toDate: string;
}

let mockReservations: Reservation[] = [
    {
        id: '1',
        productId: '2',
        productName: 'Bicicleta',
        renterEmail: 'juan@unal.edu.co',
        fromDate: '2025-07-10',
        toDate: '2025-07-12',
    },
];

export const reservationService = {
    getReservations: async (): Promise<Reservation[]> => {
        await delay(300);
        return mockReservations;
    },

    addReservation: async (reservation: Omit<Reservation, 'id'>): Promise<Reservation> => {
        await delay(300);
        const newReservation: Reservation = {
            ...reservation,
            id: Date.now().toString(),
        };
        mockReservations.push(newReservation);
        console.log('Reserva agregada:', newReservation);
        return newReservation;
    },

    removeReservation: async (id: string): Promise<void> => {
        await delay(200);
        mockReservations = mockReservations.filter((r) => r.id !== id);
        console.log(`Reserva ${id} eliminada`);
    },

    clearReservations: async (): Promise<void> => {
        await delay(200);
        mockReservations = [];
        console.log('Reservas limpiadas');
    },
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
