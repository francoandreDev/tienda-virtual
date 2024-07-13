import { isCategory } from "../categories/categories.validation";
import { IProduct, IRequestProduct } from "./IProducts";

export function isProduct(obj: any): obj is IProduct {
	return (
		typeof obj === 'object' &&
		typeof obj.id === 'number' &&
		typeof obj.name === 'string' &&
		typeof obj.description === 'string' &&
		typeof obj.price === 'number' &&
		typeof obj.image === 'string' &&
		typeof obj.stock === 'number' &&
		typeof obj.discount === 'number' &&
		isCategory(obj.category)
	);
}

export function isRequestProduct(obj: any): obj is IRequestProduct {
	return (
		typeof obj === 'object' &&
		typeof obj.name === 'string' &&
		typeof obj.description === 'string' &&
		typeof obj.price === 'number' &&
		typeof obj.image === 'string' &&
		typeof obj.stock === 'number' &&
		typeof obj.discount === 'number' &&
		typeof obj.categoryId === 'number'
	);
}

export function productToRequestProduct(product: IProduct): IRequestProduct {
    return {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        discount: product.discount,
        image: product.image,
        categoryId: product.category.id,
    };
}
