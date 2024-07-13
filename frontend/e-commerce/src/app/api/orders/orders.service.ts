import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { IOrder, IRequestOrder } from './IOrders';
import {
	isOrder,
	isRequestOrder,
	orderToRequestOrder,
} from './orders.validation';

class OrdersService {
	private baseUrl: string = 'http://localhost:8882/api/v1/ordenes';

	constructor(private httpClient: HttpClient) {}

	protected get_orders(): Observable<IOrder[]> {
		return this.httpClient.get<IOrder[]>(this.baseUrl);
	}

	protected get_order_by_id(id: number): Observable<IOrder> {
		return this.httpClient.get<IOrder>(`${this.baseUrl}/${id}`);
	}

	protected get_all_orders_by_user_id(id: number): Observable<IOrder[]> {
		return this.httpClient.get<IOrder[]>(`${this.baseUrl}/user/${id}`);
	}

	protected post_order(order: IRequestOrder): Observable<IOrder> {
		return this.httpClient.post<IOrder>(this.baseUrl, order);
	}

	protected put_order(id: number, order: IRequestOrder): Observable<IOrder> {
		return this.httpClient.put<IOrder>(`${this.baseUrl}/${id}`, order);
	}

	protected delete_order(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
	}
}

@Injectable({
	providedIn: 'root',
})
export class OrdersServices extends OrdersService {
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getAllOrders(): Observable<IOrder[]> {
		const observableOrders: Observable<IOrder[]> = this.get_orders();
		return observableOrders;
	}

	getOrderById(id: number): Observable<IOrder> {
		const observableOrder: Observable<IOrder> = this.get_order_by_id(id);
		return observableOrder;
	}

	getOrdersByUserId(id: number): Observable<IOrder[]> {
		const observableOrders: Observable<IOrder[]> =
			this.get_all_orders_by_user_id(id);
		return observableOrders;
	}

	getOrdersInCart(userId: number): Observable<IOrder[]> {
		const observableOrdersInCart: Observable<IOrder[]> =
			this.getAllOrdersByUserId(userId).pipe(
				map((orders: IOrder[]) => {
					return orders.filter(
						(order: IOrder) => order.status === 'pending'
					);
				})
			);

		return observableOrdersInCart;
	}

	getOrdersHistory(userId: number): Observable<IOrder[]> {
		const observableOrdersInHistory: Observable<IOrder[]> =
			this.getAllOrdersByUserId(userId).pipe(
				map((orders: IOrder[]) => {
					return orders.filter(
						(order: IOrder) => order.status !== 'pending'
					);
				})
			);

		return observableOrdersInHistory;
	}

	getAllOrdersByUserId(id: number): Observable<IOrder[]> {
		const observableOrdersByUserId: Observable<IOrder[]> =
			this.get_all_orders_by_user_id(id);
		return observableOrdersByUserId;
	}

	newOrder(order: IRequestOrder | IOrder): Observable<IOrder> {
		let reqOrder: IRequestOrder;

		if (isOrder(order)) {
			reqOrder = orderToRequestOrder(order);
		} else if (isRequestOrder(order)) {
			reqOrder = order;
		} else {
			throw new Error('Error al crear orden, tipo no válido');
		}

		const observableNewOrder: Observable<IOrder> =
			this.post_order(reqOrder);

		return observableNewOrder;
	}

	updateOrder(id: number, order: IOrder | IRequestOrder): Observable<IOrder> {
		let reqOrder: IRequestOrder;

		if (isOrder(order)) {
			reqOrder = orderToRequestOrder(order);
		} else if (isRequestOrder(order)) {
			reqOrder = order;
		} else {
			throw new Error('Error al crear orden, tipo no válido');
		}

		const observableUpdateOrder: Observable<IOrder> = this.put_order(
			id,
			reqOrder
		);

		return observableUpdateOrder;
	}

	deleteOrder(id: number): Observable<void> {
		const observableDeleteOrder: Observable<void> = this.delete_order(id);

		return observableDeleteOrder;
	}
}
