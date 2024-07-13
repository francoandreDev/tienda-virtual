import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from '../../api/orders/IOrders';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IProduct } from '../../api/products/IProducts';
import { IUser } from '../../api/users/IUsers';
import { OrdersServices } from '../../api/orders/orders.service';
import { ProductsServices } from '../../api/products/product.service';
import { UsersServices } from '../../api/users/users.service';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-orders',
	standalone: true,
	imports: [CommonModule, FormsModule, BackButtonComponent],
	templateUrl: './admin-orders.component.html',
	styleUrl: './admin-orders.component.scss',
})
export class AdminOrdersComponent {
	orders: IOrder[] = [];
	users: IUser[] = [];
	products: IProduct[] = [];
	newOrder: IOrder = {} as IOrder;
	showForm: boolean = false;
	showEditForm: boolean = false;
	currentOrder: IOrder = {} as IOrder;

	constructor(
		private router: Router,
		private sessionService: SessionService,
		private ordersServices: OrdersServices,
		private usersServices: UsersServices,
		private productsServices: ProductsServices
	) {
		if (
			!sessionService.checkLoginExists() ||
			!sessionService.checkAdmin()
		) {
			this.redirectToHome();
		}
	}

	ngOnInit(): void {
		this.fetchOrders();
		this.fetchUsers();
		this.fetchProducts();
	}
	redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
	}

	fetchOrders(): void {
		let tempOrders = this.orders;
		try {
			this.orders = this.ordersServices.getAllOrders();
		} catch (e: any) {
			this.orders = tempOrders;
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

	fetchProducts(): void {
		let tempProducts = this.products;
		try {
			this.products = this.productsServices.getAllProducts();
		} catch (e: any) {
			this.products = tempProducts;
		}
	}

	addOrder(): void {
		this.showForm = !this.showForm;
	}

	addNewOrder(form: NgForm): void {
		if (form.valid) {
			let tempOrder: IOrder = this.newOrder;
			try {
				this.ordersServices.newOrder(this.newOrder);
				this.showForm = false;
				this.newOrder = {} as IOrder;
			} catch (e: any) {
				this.showForm = true;
				this.newOrder = tempOrder;
			} finally {
				this.fetchOrders();
			}
		}
	}

	deleteOrder(id: number): void {
		if (confirm('¿Está seguro de que desea eliminar esta orden?')) {
			try {
				this.ordersServices.deleteOrder(id);
			} finally {
				this.fetchOrders();
			}
		}
	}

	editOrder(order: IOrder): void {
		this.currentOrder = { ...order };
		this.showEditForm = true;
	}

	updateOrder(): void {
		if (this.currentOrder) {
			const id = this.currentOrder.id;
			let tempOrder = this.currentOrder;
			try {
				this.ordersServices.updateOrder(id, this.currentOrder);
				this.showEditForm = false;
				this.currentOrder = {} as IOrder;
			} catch (e: any) {
				this.showEditForm = true;
				this.currentOrder = tempOrder;
			} finally {
				this.fetchOrders();
			}
		}
	}

	cancelEdit(): void {
		this.showEditForm = false;
		this.currentOrder = {} as IOrder;
	}

	private resetNewOrder(): void {
		this.newOrder = {} as IOrder;
	}
}
