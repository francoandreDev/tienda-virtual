import { isProduct } from '../products/products.validation';
import { isUser } from '../users/users.validation';
import { IOrder, IRequestOrder, TStatusOrder } from './IOrders';

const allowedStatuses: TStatusOrder[] = ['pending', 'shipped', 'delivered', 'cancelled'];

export function isOrder(obj: any): obj is IOrder {
	return (
		typeof obj === 'object' &&
		typeof obj.id === 'number' &&
		typeof obj.date === 'string' &&
		typeof obj.quantity === 'number' &&
		typeof obj.price === 'number' &&
		typeof obj.status === 'string' &&
		allowedStatuses.includes(obj.status) &&
		isUser(obj.user) &&
		isProduct(obj.product)
	);
}

export function isRequestOrder(obj: any): obj is IRequestOrder {
	return (
		typeof obj === 'object' &&
		typeof obj.date === 'string' &&
		typeof obj.quantity === 'number' &&
		typeof obj.price === 'number' &&
		typeof obj.status === 'string' &&
		allowedStatuses.includes(obj.status) &&
		typeof obj.userId === 'number' &&
		typeof obj.productId === 'number'
	);
}

export function orderToRequestOrder(order: IOrder): IRequestOrder {
	return {
		userId: order.user.id,
		productId: order.product.id,
		quantity: order.quantity,
		price: order.price,
		date: order.date,
		status: order.status,
	};
}
