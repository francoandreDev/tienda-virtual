import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkComponent } from '../link/link.component';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [LinkComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
	showAdmin = false;
	constructor(
		private router: Router,
		private sessionService: SessionService
	) {
		if (
			typeof window !== 'undefined' &&
			typeof sessionStorage !== 'undefined'
		)
			if (sessionService.checkLoginExists()) {
				this.showAdmin = sessionService.checkAdmin();
			}
	}

	goToAdmin(): void {
		this.router.navigate([routesDictionary.admin.route]);
	}
	logout(): void {
		this.sessionService.logout();
		window.location.href = '/';
	}
}
