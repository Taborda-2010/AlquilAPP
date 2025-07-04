// src/services/productService.ts

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    pricePerDay: number;
    category: string;
    available: boolean;
    state: string;
    meetingPoint: string;
    conditions: string;
}

let mockProducts: Product[] = [
    {
        id: '1',
        name: 'Calculadora',
        imageUrl: '/calc.jpg',
        pricePerDay: 5000,
        category: 'Herramientas',
        available: true,
        state: 'Como nueva',
        meetingPoint: 'Biblioteca Central',
        conditions: 'Usar con cuidado. Devolver el mismo día.',
    },
    {
        id: '2',
        name: 'Bicicleta',
        imageUrl: '/bike.jpg',
        pricePerDay: 10000,
        category: 'Bicicletas',
        available: false,
        state: 'Buen estado',
        meetingPoint: 'Cafetería Central',
        conditions: 'No prestar a terceros.',
    },
];

export const productService = {
    getProducts: async (): Promise<Product[]> => {
        await delay(300);
        return mockProducts;
    },

    getProductById: async (id: string): Promise<Product | undefined> => {
        await delay(200);
        return mockProducts.find((p) => p.id === id);
    },

    addProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
        await delay(300);
        const newProduct: Product = { ...product, id: Date.now().toString() };
        mockProducts.push(newProduct);
        console.log('Producto agregado:', newProduct);
        return newProduct;
    },

    toggleAvailability: async (id: string): Promise<void> => {
        await delay(200);
        mockProducts = mockProducts.map((p) =>
            p.id === id ? { ...p, available: !p.available } : p
        );
        console.log(`Disponibilidad cambiada para el producto ${id}`);
    },

    clearProducts: async (): Promise<void> => {
        await delay(200);
        mockProducts = [];
        console.log('Productos limpiados');
    },
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
