import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IOrder } from '../../api/orders/IOrders';
import { IUser } from '../../api/users/IUsers';
import { OrdersServices } from '../../api/orders/orders.service';
import { RoundPipe } from '../../utils/money/round.pipe';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-shopping-cart',
	standalone: true,
	imports: [BackButtonComponent, CommonModule, RoundPipe],
	templateUrl: './shopping-cart.component.html',
	styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
	orders: IOrder[] = [];
	user: IUser = {} as IUser;

	constructor(
		private router: Router,
		private sessionServices: SessionService,
		private ordersServices: OrdersServices
	) {
		if (this.sessionServices.checkLoginExists())
			this.redirectToLogin('Debe iniciar sesión');
	}

	ngOnInit(): void {
		if (this.user) this.fetchOrders(this.user.id);
	}

	fetchOrders(userId: number, orders: IOrder[] = []): void {
		const actions: object = {
			next: (orders: IOrder[]) =>
				this.actionNextFetchOrders.bind(this, orders),
			error: () => this.actionErrorFetchOrders.bind(this),
		};

		this.ordersServices.getAllOrdersByUserId(userId).subscribe(actions);
	}

	private redirectToLogin(msg?: string): void {
		if (typeof msg === 'string' && msg !== '') alert(msg);
		this.router.navigate([routesDictionary.login.route]);
	}

	private actionNextFetchOrders(orders: IOrder[]): void {
		this.orders = orders;
	}

	private actionErrorFetchOrders(): void {
		alert('Error al obtener pedidos');
	}
}
