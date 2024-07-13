import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NavbarComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	showNavbar: boolean;

	constructor() {
		this.showNavbar = false;
	}

	openNavbar() {
		this.showNavbar = true;
	}

	closeNavBar() {
		this.showNavbar = false;
	}
}
