import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IProduct } from '../../api/products/IProducts';
import { ProductsServices } from '../../api/products/product.service';
import { RoundPipe } from '../../utils/money/round.pipe';
import { BannerComponent } from '../../components/banner/banner.component';
import { OrdersServices } from '../../api/orders/orders.service';
import { IOrder, IRequestOrder } from '../../api/orders/IOrders';
import { IUser } from '../../api/users/IUsers';
import { getCurrentDate } from '../../utils/date/utils';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RoundPipe, BannerComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	products: IProduct[] = [];

	defaultImage: string;

	constructor(
		private router: Router,
		private sessionService: SessionService,
		private productsServices: ProductsServices,
		private ordersServices: OrdersServices
	) {
		this.defaultImage = 'default-image.jpg';
	}

	ngOnInit(): void {
		this.fetchProducts();
	}

	onImageError(event: Event): void {
		const imgElement = event.target as HTMLImageElement;
		imgElement.src = this.defaultImage;
	}

	goToProductDetail(product: IProduct): void {
		this.router.navigate([
			routesDictionary.products.route,
			`/${product.id}`,
		]);
	}

	addToCart(event: Event, product: IProduct): void {
		event.stopPropagation();
		if (
			!this.sessionService.checkLoginExists() ||
			!this.sessionService.getSessionAsUser()
		) {
			this.redirectToLogin(
				'Debe iniciar sesión para agregar productos al carrito'
			);
			return;
		}

		const user = this.sessionService.getSessionAsUser();
		if (user === null) {
			this.redirectToLogin(
				'Debe iniciar sesión para agregar productos al carrito'
			);
			return;
		}

		this.ordersServices.getAllOrdersByUserId(user.id).subscribe({
			next: (res) => {
				this.updateOrCreateOrder(res, user, product);
			},
			error: () => {
				alert('Error obteniendo órdenes del usuario: ' + user);
			},
		});
	}

	private redirectToLogin(msg?: string): void {
		if (typeof msg === 'string' && msg !== '') alert(msg);
		this.router.navigate([routesDictionary.login.route]);
	}

	private fetchProducts(): void {
		let tempProducts = this.products;
		const actions: object = {
			next: (products: IProduct[]) => (this.products = products),
			error: () => (this.products = tempProducts),
		};
		this.productsServices.getAllProducts().subscribe(actions);
	}

	private updateOrCreateOrder(
		orders: IOrder[],
		user: IUser,
		product: IProduct
	): void {
		const flag = this.updateExistingOrder(orders, product);

		if (!flag) {
			const newOrder: IRequestOrder = this.createNewRequestOrder(
				user,
				product
			);
			const actionsNewOrder = {
				next: () => this.actionNextCreateOrder.bind(this),
				error: () => this.actionErrorCreateOrder.bind(this),
			};
			this.ordersServices.newOrder(newOrder).subscribe(actionsNewOrder);
		}
	}

	private updateExistingOrder(orders: IOrder[], product: IProduct): boolean {
		let flag = false;

		for (let order of orders) {
			if (order.product.id == product.id) {
				const actions: object = {
					next: () => this.actionNextUpdateExistingOrder(),
					error: () => this.actionErrorUpdateExistingOrder(),
				};
				this.ordersServices
					.updateOrder(order.id, order)
					.subscribe(actions);
				flag = true;
			}
		}
		return flag;
	}

	private createNewRequestOrder(
		user: IUser,
		product: IProduct
	): IRequestOrder {
		const newOrder: IRequestOrder = {
			userId: user.id,
			productId: product.id,
			quantity: 1,
			price: product.price,
			date: getCurrentDate(),
			status: 'pending',
		};
		return newOrder;
	}

	private actionNextCreateOrder(): void {
		alert('Orden creada con éxito');
	}

	private actionErrorCreateOrder(): void {
		alert('Error al actualizar orden');
	}

	private actionNextUpdateExistingOrder(): void {
		alert('Orden actualizada con éxito');
	}

	private actionErrorUpdateExistingOrder(): void {
		alert('Error al actualizar orden');
	}
}
