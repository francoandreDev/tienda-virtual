import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IRequestProduct } from './IProducts';
import {
	isProduct,
	isRequestProduct,
	productToRequestProduct,
} from './products.validation';

class ProductsService {
	private baseUrl: string = 'http://localhost:8882/api/v1/productos';

	constructor(private httpClient: HttpClient) {}

	protected get_products(): Observable<IProduct[]> {
		return this.httpClient.get<IProduct[]>(this.baseUrl);
	}

	protected get_product_by_id(id: number): Observable<IProduct> {
		return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
	}

	protected post_product(product: IRequestProduct): Observable<IProduct> {
		return this.httpClient.post<IProduct>(this.baseUrl, product);
	}

	protected put_product(
		id: number,
		product: IRequestProduct
	): Observable<IProduct> {
		return this.httpClient.put<IProduct>(`${this.baseUrl}/${id}`, product);
	}

	protected delete_product(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
	}
}

@Injectable({
	providedIn: 'root',
})
export class ProductsServices extends ProductsService {
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getAllProducts(): Observable<IProduct[]> {
		const observableProducts: Observable<IProduct[]> = this.get_products();
		return observableProducts;
	}

	getProductsByCategoryId(id: number): Observable<IProduct[]> {
		const observableProductsByCategory: Observable<IProduct[]> =
			this.get_products().pipe(
				map((products: IProduct[]) =>
					products.filter(
						(product: IProduct) => product.category.id === id
					)
				)
			);

		return observableProductsByCategory;
	}

	getProductById(id: number): Observable<IProduct> {
		const observableProduct = this.get_product_by_id(id);
		return observableProduct;
	}

	newProduct(product: IRequestProduct | IProduct): Observable<IProduct> {
		let reqProduct: IRequestProduct;
		if (isProduct(product)) {
			reqProduct = productToRequestProduct(product);
		} else if (isRequestProduct(product)) {
			reqProduct = product;
		} else {
			throw new Error('El objeto no es un producto no se pudo crear');
		}
		const observableProduct: Observable<IProduct> =
			this.post_product(reqProduct);
		return observableProduct;
	}

	updateProduct(
		id: number,
		product: IRequestProduct | IProduct
	): Observable<IProduct> {
		let reqProduct: IRequestProduct;
		if (isProduct(product)) {
			reqProduct = productToRequestProduct(product);
		} else if (isRequestProduct(product)) {
			reqProduct = product;
		} else {
			throw new Error('El objeto no es un producto no se pudo crear');
		}

		const observableProduct: Observable<IProduct> = this.put_product(
			id,
			reqProduct
		);

		return observableProduct;
	}

	deleteProduct(id: number): Observable<void> {
		const observableDeleteProduct: Observable<void> =
			this.delete_product(id);
		return observableDeleteProduct;
	}
}
