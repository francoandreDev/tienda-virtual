import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct, IRequestProduct } from '../../api/products/IProducts';
import { IUser } from '../../api/users/IUsers';
import { getCurrentDate } from '../../utils/date/utils';
import { IOrder, IRequestOrder } from '../../api/orders/IOrders';
import { OrdersServices } from '../../api/orders/orders.service';
import { ProductsServices } from '../../api/products/product.service';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { RoundPipe } from '../../utils/money/round.pipe';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [CommonModule, BackButtonComponent, RoundPipe],
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
	index: number = 0;
	order: IOrder = {} as IOrder;
	product: IProduct = {} as IProduct;
	quantity: number = 0;
	stock: number = 0;
	totalPrice: number = 0;

	defaultImage: string;
	constructor(
		private router: Router,
		private productsServices: ProductsServices,
		private ordersServices: OrdersServices
	) {
		this.defaultImage = 'default-image.jpg';
	}

	onImageError(event: Event): void {
		const imgElement = event.target as HTMLImageElement;
		imgElement.src = this.defaultImage;
	}

	ngOnInit(): void {
		this.index = this.getIndexProduct(this.router.url);
		this.getProductById();
	}

	addToCart(): void {
		if (this.quantity <= 0) return;
		const user: IUser = JSON.parse(sessionStorage.getItem('user')!);
		if (!user.id) return;

		const newOrder: IRequestOrder = this.createNewOrder(user);
		let tempOrder = this.order;

		const actionsOrder: object = {
			next: (resOrder: IOrder) =>
				this.actionNextOrderAddToCart.bind(this, resOrder),
			error: () => this.actionErrorOrderAddToCart.bind(this, tempOrder),
		};

		this.ordersServices.newOrder(newOrder).subscribe(actionsOrder);

		const newProduct: IRequestProduct = this.updateProduct();
		let tempProduct = this.product;

		const actionProduct: object = {
			next: (resProduct: IProduct) =>
				this.actionNextProductAddToCart.bind(this, resProduct),
			error: () =>
				this.actionErrorProductAddToCart.bind(this, tempProduct),
		};

		this.productsServices
			.updateProduct(this.product.id, newProduct)
			.subscribe(actionProduct);
		this.resetValues();
	}

	updateQuantity($event: Event): void {
		const value = parseInt((<HTMLInputElement>$event.target).value);
		if (value < this.stock && value >= 0) {
			this.quantity = value;
		} else if (value >= this.stock) {
			this.quantity = this.stock;
		} else {
			this.quantity = 0;
		}

		this.product.stock -= this.quantity;

		this.totalPrice =
			this.product.price * this.quantity * (1 - this.product.discount);
		this.totalPrice = Math.round(this.totalPrice * 100) / 100;
	}


	private getIndexProduct(currentUrl: string): number {
		const endUrl = currentUrl.split('/').pop() || '0';
		return parseInt(endUrl);
	}

	private getProductById(): void {
		let tempProduct: IProduct = this.product;
		const actions: object = {
			next: (product: IProduct) =>
				this.actionNextGetProductById.bind(this, product),
			error: this.actionErrorGetProductById.bind(this, tempProduct),
		};
		this.productsServices.getProductById(this.index).subscribe(actions);
		this.stock = this.product.stock;
	}

	private actionNextGetProductById(product: IProduct): void {
		this.product = product;
	}

	private actionErrorGetProductById(tempProduct: IProduct): void {
		this.product = tempProduct;
	}

	private resetValues(): void {
		this.quantity = 0;
		this.totalPrice = 0;
		this.stock = this.product.stock;
	}

	private createNewOrder(user: IUser): IRequestOrder {
		return {
			userId: user.id,
			productId: this.product.id,
			quantity: this.quantity,
			price: this.totalPrice,
			date: getCurrentDate(),
			status: 'pending',
		};
	}

	private updateProduct(): IRequestProduct {
		return {
			name: this.product.name,
			description: this.product.description,
			price: this.product.price,
			stock: this.product.stock,
			discount: this.product.discount,
			image: this.product.image,
			categoryId: this.product.category.id,
		};
	}

	private actionNextOrderAddToCart(newOrder: IOrder) {
		this.order = newOrder;
	}

	private actionErrorOrderAddToCart(tempOrder: IOrder) {
		this.order = tempOrder;
	}

	private actionNextProductAddToCart(newProduct: IProduct) {
		this.product = newProduct;
	}

	private actionErrorProductAddToCart(tempProduct: IProduct) {
		this.product = tempProduct;
	}
}
