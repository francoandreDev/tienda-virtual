import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IOrder, IRequestOrder } from '../../api/orders/IOrders';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { CartsServices } from '../../api/carts/carts.service';
import { ICart } from '../../api/carts/ICarts';
import { IUser } from '../../api/users/IUsers';
import { OrdersServices } from '../../api/orders/orders.service';
import { UsersServices } from '../../api/users/users.service';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-carts',
	standalone: true,
	imports: [CommonModule, FormsModule, BackButtonComponent],
	templateUrl: './admin-carts.component.html',
	styleUrls: ['./admin-carts.component.scss'],
})
export class AdminCartsComponent implements OnInit {
	carts: ICart[] = [];
	users: IUser[] = [];
	orders: Record<number, IOrder[]> = {};
	filteredUsers: IUser[] = [];
	newCart: { userId: number } = { userId: 0 };
	currentCart: ICart = {} as ICart;
	currentOrder: IOrder = {} as IOrder;
	showForm: boolean = false;
	showEditForm: boolean = false;
	showEditOrderForm: boolean = false;
	searchTerm: string = '';

	constructor(
		private router: Router,
		private cartsServices: CartsServices,
		private ordersServices: OrdersServices,
		private usersServices: UsersServices,
		private sessionService: SessionService
	) {
		if (
			!sessionService.checkLoginExists() ||
			!sessionService.checkAdmin()
		) {
			this.redirectToHome();
		}
	}

	ngOnInit(): void {
		this.fetchCarts();
		this.fetchUsers();
	}

	redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
	}

	fetchCarts(): void {
		let tempCarts = this.carts;
		try {
			this.carts = this.cartsServices.getAllCarts();
		} catch (e: any) {
			this.carts = tempCarts;
		}
	}

	fetchOrders(userId: number): void {
		let tempOrders = this.orders[userId];
		try {
			this.orders[userId] =
				this.ordersServices.getAllOrdersByUserId(userId);
		} catch (e: any) {
			this.orders[userId] = tempOrders;
		}
	}

	fetchUsers(): void {
		let tempUsers = this.users;
		try {
			this.users = this.usersServices.getAllUsers();
		} catch (e: any) {
			this.users = tempUsers;
		}
	}

	searchUsers(): void {
		this.filteredUsers = this.users.filter((user: IUser) =>
			user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
		);
	}

	editOrder(order: IOrder): void {
		this.currentOrder = { ...order };
		this.showEditOrderForm = true;
	}

	updateOrder(): void {
		if (this.currentOrder) {
			const id: number = this.currentOrder.id;
			let tempOrder = this.currentOrder;
			try {
				this.ordersServices.updateOrder(id, this.currentOrder);
				this.showEditOrderForm = false;
				this.currentOrder = {} as IOrder;
				this.fetchOrders(this.currentCart.user.id);
			} catch (e: any) {
				this.showEditForm = true;
				this.currentOrder = tempOrder;
			}
		}
	}

	deleteOrder(id: number, userId: number): void {
		if (confirm('¿Está seguro de que desea eliminar esta orden?')) {
			try {
				this.ordersServices.deleteOrder(id);
			} finally {
				this.fetchOrders(userId);
			}
		}
	}

	emptyCart(userId: number): void {
		if (confirm('¿Está seguro de que desea vaciar este carrito?')) {
			this.orders[userId].forEach((order: IOrder) => {
				this.ordersServices.deleteOrder(order.id);
				this.fetchOrders(userId);
			});
		}
	}

	cancelCartOrder() {
		this.showEditOrderForm = false;
		this.currentOrder = {} as IOrder;
	}
}
