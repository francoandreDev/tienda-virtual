import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IOrder } from '../../api/orders/IOrders';
import { IUser } from '../../api/users/IUsers';
import { OrdersServices } from '../../api/orders/orders.service';
import { RoundPipe } from '../../utils/money/round.pipe';
import { routesDictionary } from '../../utils/routes/dictionary';
import { SessionService } from '../../utils/session/session.service';

@Component({
	selector: 'app-order-history',
	standalone: true,
	imports: [BackButtonComponent, CommonModule, RoundPipe],
	templateUrl: './order-history.component.html',
	styleUrl: './order-history.component.scss',
})
export class OrderHistoryComponent {
	orders: IOrder[] = [];
	user: IUser = {} as IUser;

	constructor(
		private router: Router,
		private sessionService: SessionService,
		private ordersServices: OrdersServices
	) {
		if (!this.sessionService.checkLoginExists()) this.redirectToLogin();
	}

	ngOnInit(): void {
		this.getUser();
		if (this.user) this.fetchOrders(this.user.id);
	}

	fetchOrders(userId: number): void {
		let tempOrders = this.orders;
		const actions: object = {
			next: (orders: IOrder[]) =>
				this.actionNextFetchOrders.bind(this, orders),
			error: this.actionErrorFetchOrders.bind(this, tempOrders),
		};
		this.ordersServices.getAllOrdersByUserId(userId).subscribe(actions);
	}

	private redirectToLogin(msg?: string): void {
		if (typeof msg === 'string' && msg !== '') alert(msg);
		this.router.navigate([routesDictionary.login.route]);
	}

	private getUser() {
		let tempUser = this.user
		this.user = this.sessionService.getSessionAsUser() || tempUser
	}

	private actionNextFetchOrders(orders: IOrder[]): void {
		this.orders = orders;
	}

	private actionErrorFetchOrders(tempOrders: IOrder[] = []): void {
		this.orders = tempOrders;
	}
}
