export type Producto = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    img: string;
};

export const productos: Producto[] = [
    {
        id: 4,
        name: "Labial Vino Elegante",
        price: 13.99,
        stock: 60,
        description: "Labial en tono vino para un look sofisticado.",
        img: "labial-vino-elegante.jpg",
    },
    {
        id: 10,
        name: "Labial Rojo Carmesí",
        price: 15.99,
        stock: 55,
        description: "Labial de color rojo carmesí con un acabado cremoso.",
        img: "labial-rojo-carmesi.webp",
    },
    {
        id: 2,
        name: "Labial Rosa Suave",
        price: 10.99,
        stock: 150,
        description: "Labial con textura suave y un tono rosa natural.",
        img: "labial-rosa-suave.jpg",
    },
    {
        id: 8,
        name: "Labial Fucsia Radiante",
        price: 11.49,
        stock: 130,
        description: "Labial de color fucsia brillante que destaca.",
        img: "labial-fucsia-radiante.webp",
    },
    {
        id: 9,
        name: "Labial Durazno Sutil",
        price: 10.99,
        stock: 110,
        description: "Labial en tono durazno para un look natural.",
        img: "labial-durazno-sutil.webp",
    },
    {
        id: 1,
        name: "Labial Rojo Intenso",
        price: 12.99,
        stock: 100,
        description: "Labial de larga duración con un color rojo vibrante.",
        img: "labial-rojo-intenso.jpeg",
    },
    {
        id: 5,
        name: "Labial Coral Vibrante",
        price: 9.99,
        stock: 120,
        description: "Labial con un color coral perfecto para el verano.",
        img: "labial-coral-vibrante.png",
    },
    {
        id: 11,
        name: "Labial Rosa Fucsia",
        price: 11.99,
        stock: 95,
        description: "Labial en tono rosa fucsia con brillo duradero.",
        img: "labial-rosa-fucsia.jpg",
    },
    {
        id: 3,
        name: "Labial Nude Clásico",
        price: 11.99,
        stock: 80,
        description: "Labial nude que combina con cualquier look.",
        img: "labial-nude-clasico.webp",
    },
];
