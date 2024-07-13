import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IUser } from '../../api/users/IUsers';
import { UsersServices } from '../../api/users/users.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterOutlet, ReactiveFormsModule, BackButtonComponent],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent {
	registerForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
		email: new FormControl('') || null,
		city: new FormControl('') || null,
		country: new FormControl('') || null,
		phone: new FormControl('') || null,
		balance: new FormControl(0),
	});

	constructor(
		private router: Router,
		private location: Location,
		private userServices: UsersServices
	) {}

	onSubmit(): void {
		const newUser: IUser = this.getNewUser();

		try {
			this.actionOnSubmitTry(newUser);
		} catch (_e: any) {
			this.actionOnSubmitError();
		}
	}

	private getNewUser(): IUser {
		return {
			id: 0,
			username: this.registerForm.value.username?.toString() || '',
			password: this.registerForm.value.password?.toString() || '',
			email: this.registerForm.value.email?.toString() || '',
			city: this.registerForm.value.city?.toString() || '',
			country: this.registerForm.value.country?.toString() || '',
			phone: this.registerForm.value.phone?.toString() || '',
			balance: this.registerForm.value.balance || 0,
			role: 'CLIENT',
		};
	}

	private actionOnSubmitTry(newUser: IUser): void {
		this.userServices.newUser(newUser);
		this.location.back();
	}

	private actionOnSubmitError(): void {
		alert('Error al registrar usuario');
		this.router.navigate([routesDictionary.login.route]);
	}
}
