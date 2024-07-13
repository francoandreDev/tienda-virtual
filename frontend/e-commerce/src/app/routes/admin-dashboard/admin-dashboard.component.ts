import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-dashboard',
	standalone: true,
	imports: [
		AdminCategoriesComponent,
		AdminProductsComponent,
		AdminUsersComponent,
	],
	templateUrl: './admin-dashboard.component.html',
	styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
	constructor(
		private router: Router,
		private sessionService: SessionService
	) {
		if (
			!sessionService.checkLoginExists() ||
			!sessionService.checkAdmin()
		) {
			this.redirectToHome();
		}
	}

	redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
	}

	goToAdminUsers(): void {
		this.router.navigate([routesDictionary['admin-users'].route]);
	}

	goToAdminCategories(): void {
		this.router.navigate([routesDictionary['admin-categories'].route]);
	}

	goToAdminProducts(): void {
		this.router.navigate([routesDictionary['admin-products'].route]);
	}

	goToAdminOrders(): void {
		this.router.navigate([routesDictionary['admin-orders'].route]);
	}

	goToAdminCarts(): void {
		this.router.navigate([routesDictionary['admin-carts'].route]);
	}
}
