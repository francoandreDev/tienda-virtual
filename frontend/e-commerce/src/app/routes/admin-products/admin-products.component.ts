import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../api/products/IProducts';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { CategoriesServices } from '../../api/categories/categories.service';
import { ICategory } from '../../api/categories/ICategories';
import { ProductsServices } from '../../api/products/product.service';
import { UsersServices } from '../../api/users/users.service';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-products',
	standalone: true,
	imports: [CommonModule, FormsModule, BackButtonComponent],
	templateUrl: './admin-products.component.html',
	styleUrl: './admin-products.component.scss',
})
export class AdminProductsComponent {
	showForm: boolean = false;
	showEditForm: boolean = false;
	products: IProduct[] = [];
	categories: ICategory[] = [];
	newProduct: IProduct = {} as IProduct;
	currentProduct: IProduct = {} as IProduct;

	constructor(
		private router: Router,
		private sessionService: SessionService,
		private productsServices: ProductsServices,
		private categoriesServices: CategoriesServices
	) {
		if (
			!sessionService.checkLoginExists() ||
			!sessionService.checkAdmin()
		) {
			this.redirectToHome();
		}
	}

	ngOnInit(): void {
		this.fetchCategories();
		this.fetchProducts();
	}

	redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
	}

	fetchProducts(): void {
		let tempProducts = this.products;
		try {
			this.products = this.productsServices.getAllProducts();
		} catch (e: any) {
			this.products = tempProducts;
		}
	}

	fetchCategories(): void {
		let tempCategories = this.categories;
		try {
			this.categories = this.categoriesServices.getAllCategories();
		} catch (e: any) {
			this.categories = tempCategories;
		}
	}

	cancelButton(): void {
		this.showForm = false;
		this.currentProduct = {} as IProduct;
	}

	addProduct(): void {
		this.showForm = !this.showForm;
	}

	addNewProduct(form: NgForm): void {
		if (form.valid) {
			let tempProduct = this.newProduct;
			try {
				this.productsServices.newProduct(this.newProduct);
				this.showForm = false;
				this.newProduct = {} as IProduct;
			} catch (e: any) {
				this.showForm = true;
				this.newProduct = tempProduct;
			} finally {
				this.fetchProducts();
			}
		}
	}

	deleteProduct(id: number): void {
		if (confirm('¿Está seguro de que desea eliminar este producto?')) {
			try {
				this.productsServices.deleteProduct(id);
			} finally {
				this.fetchProducts();
			}
		}
	}

	editProduct(product: IProduct): void {
		this.currentProduct = { ...product };
		this.showEditForm = true;
	}

	updateProduct(): void {
		if (this.currentProduct) {
			const id: number = this.currentProduct.id;
			let tempProduct = this.currentProduct;
			try {
				this.productsServices.updateProduct(id, this.currentProduct);
				this.showEditForm = false;
				this.currentProduct = {} as IProduct;
			} catch (e: any) {
				this.showEditForm = true;
				this.currentProduct = tempProduct;
			} finally {
				this.fetchProducts();
			}
		}
	}
}
