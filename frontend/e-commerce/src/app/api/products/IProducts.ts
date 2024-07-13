import { ICategory } from '../categories/ICategories';

export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	stock: number;
	discount: number;
	category: ICategory;
}

export interface IRequestProduct extends Omit<IProduct, 'id' | 'category'> {
	categoryId: number;
}
