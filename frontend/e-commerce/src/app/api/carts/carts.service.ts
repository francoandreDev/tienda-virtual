import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart, IRequestCart } from './ICarts';
import { cartToRequestCart, isCart, isRequestCart } from './carts.validation';

class CartService {
	private baseUrl: string = 'http://localhost:8882/api/v1/carros';

	constructor(private httpClient: HttpClient) {}

	protected get_carts(): Observable<ICart[]> {
		return this.httpClient.get<ICart[]>(this.baseUrl);
	}

	protected get_cart_by_id(id: number): Observable<ICart> {
		return this.httpClient.get<ICart>(`${this.baseUrl}/${id}`);
	}

	protected get_cart_by_user_id(id: number): Observable<ICart[]> {
		return this.httpClient.get<ICart[]>(`${this.baseUrl}/user/${id}`);
	}

	protected add_to_cart(cartItem: IRequestCart): Observable<ICart> {
		return this.httpClient.post<ICart>(this.baseUrl, cartItem);
	}

	protected update_cart(
		id: number,
		cartItem: IRequestCart
	): Observable<ICart> {
		return this.httpClient.put<ICart>(`${this.baseUrl}/${id}`, cartItem);
	}

	protected delete_cart_by_id(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
	}
}

@Injectable({
	providedIn: 'root',
})
export class CartsServices extends CartService {
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getAllCarts(): Observable<ICart[]> {
		const observableCarts: Observable<ICart[]> = this.get_carts();
		return observableCarts;
	}

	getCartById(id: number): Observable<ICart> {
		const observableCart: Observable<ICart> = this.get_cart_by_id(id);
		return observableCart;
	}

	newCart(cart: IRequestCart | ICart): Observable<ICart> {
		let reqCart: IRequestCart;
		if (isCart(cart)) {
			reqCart = cartToRequestCart(cart);
		} else if (isRequestCart(cart)) {
			reqCart = cart;
		} else {
			throw new Error(
				'Tipo de dato inválido mientras se intentaba crear el carrito'
			);
		}
		const observableNewCart: Observable<ICart> = this.add_to_cart(reqCart);

		return observableNewCart;
	}

	updateCartOrder(id: number, cart: IRequestCart | ICart): Observable<ICart> {
		let updateCart: IRequestCart;
		if (isCart(cart)) {
			updateCart = cartToRequestCart(cart);
		} else if (isRequestCart(cart)) {
			updateCart = cart;
		} else {
			throw new Error(
				'Tipo de dato inválido mientras se intentaba actualizar el carrito'
			);
		}

		const observableUpdateCart: Observable<ICart> = this.update_cart(
			id,
			updateCart
		);
		return observableUpdateCart;
	}

	deleteCartById(id: number): Observable<void> {
		const observableDeleteCart: Observable<void> =
			this.delete_cart_by_id(id);
		return observableDeleteCart;
	}
}
