import { IProduct, ISearchCriteria } from "./typeProducts";

export function filterProducts(
    products: IProduct[],
    criteria: ISearchCriteria
): IProduct[] {
    return products.filter((product) => {
        if (criteria.id !== undefined && product.id !== criteria.id)
            return false;
        if (
            criteria.name !== undefined &&
            !product.name.toLowerCase().includes(criteria.name.toLowerCase())
        )
            return false;
        if (criteria.price !== undefined && product.price !== criteria.price)
            return false;
        if (
            criteria.minPrice !== undefined &&
            product.price < criteria.minPrice
        )
            return false;
        if (
            criteria.maxPrice !== undefined &&
            product.price > criteria.maxPrice
        )
            return false;
        if (criteria.stock !== undefined && product.stock !== criteria.stock)
            return false;
        if (
            criteria.minStock !== undefined &&
            product.stock < criteria.minStock
        )
            return false;
        if (
            criteria.maxStock !== undefined &&
            product.stock > criteria.maxStock
        )
            return false;
        if (
            criteria.isBestSeller !== undefined &&
            product.isBestSeller !== criteria.isBestSeller
        )
            return false;
        if (
            criteria.isNewArrival !== undefined &&
            product.isNewArrival !== criteria.isNewArrival
        )
            return false;
        return true;
    });
}

export const products: IProduct[] = [
    {
        id: 1,
        name: "Labial Rojo Intenso",
        price: 12.99,
        stock: 100,
        description: "Labial de larga duración con un color rojo vibrante.",
        img: "labial-rojo-intenso.jpeg",
        isBestSeller: true,
        isNewArrival: true,
    },
    {
        id: 2,
        name: "Labial Rosa Suave",
        price: 10.99,
        stock: 150,
        description: "Labial con textura suave y un tono rosa natural.",
        img: "labial-rosa-suave.jpg",
        isBestSeller: true,
        isNewArrival: false,
    },
    {
        id: 3,
        name: "Labial Nude Clásico",
        price: 11.99,
        stock: 80,
        description: "Labial nude que combina con cualquier look.",
        img: "labial-nude-clasico.webp",
        isBestSeller: false,
        isNewArrival: true,
    },
    {
        id: 4,
        name: "Labial Vino Elegante",
        price: 13.99,
        stock: 60,
        description: "Labial en tono vino para un look sofisticado.",
        img: "labial-vino-elegante.jpg",
        isBestSeller: false,
        isNewArrival: false,
    },
    {
        id: 5,
        name: "Labial Coral Vibrante",
        price: 9.99,
        stock: 120,
        description: "Labial con un color coral perfecto para el verano.",
        img: "labial-coral-vibrante.png",
        isBestSeller: true,
        isNewArrival: true,
    },
    {
        id: 6,
        name: "Labial Marrón Chocolate",
        price: 14.99,
        stock: 90,
        description: "Labial en tono marrón oscuro con acabado mate.",
        img: "labial-marron-chocolate.jpeg",
        isBestSeller: true,
        isNewArrival: false,
    },
    {
        id: 7,
        name: "Labial Lila Delicado",
        price: 12.49,
        stock: 70,
        description: "Labial en tono lila suave para un look fresco.",
        img: "labial-lila-delicado.webp",
        isBestSeller: false,
        isNewArrival: true,
    },
    {
        id: 8,
        name: "Labial Fucsia Radiante",
        price: 11.49,
        stock: 130,
        description: "Labial de color fucsia brillante que destaca.",
        img: "labial-fucsia-radiante.jpg",
        isBestSeller: false,
        isNewArrival: false,
    },
    {
        id: 9,
        name: "Labial Durazno Sutil",
        price: 10.99,
        stock: 110,
        description: "Labial en tono durazno para un look natural.",
        img: "labial-durazno-sutil.webp",
        isBestSeller: true,
        isNewArrival: true,
    },
    {
        id: 10,
        name: "Labial Rojo Carmesí",
        price: 15.99,
        stock: 55,
        description: "Labial de color rojo carmesí con un acabado cremoso.",
        img: "labial-rojo-carmesi.webp",
        isBestSeller: true,
        isNewArrival: false,
    },
    {
        id: 11,
        name: "Labial Rosa Fucsia",
        price: 11.99,
        stock: 95,
        description: "Labial en tono rosa fucsia con brillo duradero.",
        img: "labial-rosa-fucsia.jpg",
        isBestSeller: false,
        isNewArrival: true,
    },
    {
        id: 12,
        name: "Labial Melocotón Cremoso",
        price: 13.99,
        stock: 65,
        description: "Labial cremoso en tono melocotón con hidratación extra.",
        img: "labial-melocoton-cremoso.jpg",
        isBestSeller: false,
        isNewArrival: false,
    },
    {
        id: 13,
        name: "Labial Morado Intenso",
        price: 14.49,
        stock: 85,
        description: "Labial en tono morado intenso con acabado mate.",
        img: "labial-morado-intenso.avif",
        isBestSeller: true,
        isNewArrival: true,
    },
    {
        id: 14,
        name: "Labial Beige Natural",
        price: 9.99,
        stock: 140,
        description: "Labial en tono beige natural para uso diario.",
        img: "labial-beige-natural.jpeg",
        isBestSeller: true,
        isNewArrival: false,
    },
    {
        id: 15,
        name: "Labial Terracota",
        price: 12.99,
        stock: 75,
        description: "Labial en tono terracota con un toque de brillo.",
        img: "labial-terracota.jpeg",
        isBestSeller: false,
        isNewArrival: true,
    },
];
