import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, IRequestCategory } from './ICategories';
import {
	categoryToRequestCategory,
	isCategory,
	isRequestCategory,
} from './categories.validation';

class CategoriesService {
	private baseUrl: string = 'http://localhost:8882/api/v1/categorias';

	constructor(private httpClient: HttpClient) {}

	protected get_categories(): Observable<ICategory[]> {
		return this.httpClient.get<ICategory[]>(this.baseUrl);
	}

	protected get_category_by_id(id: number): Observable<ICategory> {
		return this.httpClient.get<ICategory>(`${this.baseUrl}/${id}`);
	}

	protected post_category(category: IRequestCategory): Observable<ICategory> {
		return this.httpClient.post<ICategory>(this.baseUrl, category);
	}

	protected put_category(
		id: number,
		category: IRequestCategory
	): Observable<ICategory> {
		return this.httpClient.put<ICategory>(
			`${this.baseUrl}/${id}`,
			category
		);
	}

	protected delete_category(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
	}
}

@Injectable({
	providedIn: 'root',
})
export class CategoriesServices extends CategoriesService {
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getAllCategories(): Observable<ICategory[]> {
		const observableCategories: Observable<ICategory[]> =
			this.get_categories();
		return observableCategories;
	}

	getCategoryById(id: number): Observable<ICategory> {
		const observableCategory: Observable<ICategory> =
			this.get_category_by_id(id);
		return observableCategory;
	}

	newCategory(category: IRequestCategory | ICategory): Observable<ICategory> {
		let reqCategory: IRequestCategory;
		if (isCategory(category)) {
			reqCategory = categoryToRequestCategory(category);
		} else if (isRequestCategory(category)) {
			reqCategory = category;
		} else {
			throw new Error('Error al crear categoría');
		}

		const observableCategory: Observable<ICategory> =
			this.post_category(reqCategory);
		return observableCategory;
	}

	updateCategory(
		id: number,
		category: IRequestCategory | ICategory
	): Observable<ICategory> {
		let reqCategory: IRequestCategory;
		if (isCategory(category)) {
			reqCategory = categoryToRequestCategory(category);
		} else if (isRequestCategory(category)) {
			reqCategory = category;
		} else {
			throw new Error('Error al actualizar categoría');
		}

		const observableCategory: Observable<ICategory> = this.put_category(
			id,
			reqCategory
		);
		return observableCategory;
	}

	deleteCategory(id: number): Observable<void> {
		const observableDeleteCategory: Observable<void> =
			this.delete_category(id);
		return observableDeleteCategory;
	}
}
