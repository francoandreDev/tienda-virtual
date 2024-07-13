import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../api/categories/ICategories';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { CategoriesServices } from '../../api/categories/categories.service';
import { UsersServices } from '../../api/users/users.service';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-categories',
	standalone: true,
	imports: [CommonModule, FormsModule, BackButtonComponent],
	templateUrl: './admin-categories.component.html',
	styleUrl: './admin-categories.component.scss',
})
export class AdminCategoriesComponent {
	showForm: boolean = false;
	showEditForm: boolean = false;
	categories: ICategory[] = [];
	newCategoryName: string = '';
	currentCategory: ICategory = {} as ICategory;

	constructor(
		private router: Router,
		private sessionService: SessionService,
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
	}

	redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
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
		this.showEditForm = false;
		this.currentCategory = {} as ICategory;
	}

	addCategory(): void {
		this.showForm = !this.showForm;
	}

	addNewCategory(form: NgForm): void {
		if (form.valid) {
			let tempName = this.newCategoryName;
			try {
				this.categoriesServices.newCategory(this.currentCategory);
				this.showForm = false;
				this.newCategoryName = '';
			} catch (e: any) {
				this.showForm = true;
				this.newCategoryName = tempName;
			} finally {
				this.fetchCategories();
			}
		}
	}

	deleteCategory(id: number): void {
		if (confirm('¿Está seguro de que desea eliminar esta categoría?')) {
			try {
				this.categoriesServices.deleteCategory(id);
			} finally {
				this.fetchCategories();
			}
		}
	}

	editCategory(category: ICategory): void {
		this.currentCategory = { ...category };
		this.showEditForm = true;
	}

	updateCategory(): void {
		if (this.currentCategory) {
			const id: number = this.currentCategory.id;
			let tempCategory = this.currentCategory;
			try {
				this.categoriesServices.updateCategory(
					id,
					this.currentCategory
				);
				this.showEditForm = false;
				this.currentCategory = {} as ICategory;
			} catch (e: any) {
				this.showEditForm = true;
				this.currentCategory = tempCategory;
			} finally {
				this.fetchCategories();
			}
		}
	}
}
