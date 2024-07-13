import { IProduct } from '../products/IProducts';
import { IUser } from '../users/IUsers';

export type TStatusOrder = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export interface IOrder {
	id: number;
	date: string;
	quantity: number;
	price: number;
	status: TStatusOrder;
	user: IUser;
	product: IProduct;
}

export interface IRequestOrder extends Omit<IOrder, 'id' | 'user' | 'product'> {
	userId: number;
	productId: number;
}
