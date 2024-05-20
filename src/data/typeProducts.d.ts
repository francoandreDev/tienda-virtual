export interface IProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    img: string;
    isBestSeller: boolean;
    isNewArrival: boolean;
}

export interface ISearchCriteria {
    id?: number;
    name?: string;
    price?: number;
    minPrice?: number;
    maxPrice?: number;
    stock?: number;
    minStock?: number;
    maxStock?: number;
    isBestSeller?: boolean;
    isNewArrival?: boolean;
}


