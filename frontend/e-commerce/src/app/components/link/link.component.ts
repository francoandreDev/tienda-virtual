import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector: 'app-link',
	standalone: true,
	imports: [],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
})
export class LinkComponent {
	@Input() text: string = '';
	@Input() route: string = '';

	constructor(private router: Router) {}

	navigate(event: Event): void {
		event.preventDefault();
		if (this.route) {
			this.router.navigate([this.route]);
		}
	}
}
