import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IUser } from '../../api/users/IUsers';
import { UsersServices } from '../../api/users/users.service';
import { routesDictionary } from '../../utils/routes/dictionary';
import { SessionService } from '../../utils/session/session.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, BackButtonComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	users: IUser[] = [];

	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	constructor(
		private userServices: UsersServices,
		private sessionService: SessionService,
		private router: Router,
		private location: Location
	) {
		this.fetchUser();
	}

	onSubmit(): void {
		const currentUsername = this.loginForm.value.username;
		const currentPassword = this.loginForm.value.password;

		const user: IUser | undefined = this.users.find(
			(user: IUser) =>
				user.username === currentUsername &&
				user.password === currentPassword
		);

		if (user === undefined) return;

		this.saveSession(user);

		this.redirect(user);
	}

	private fetchUser(): void {
		let tempUsers = this.users;
		const actions: object = {
			next: (users: IUser[]) => (this.users = users),
			error: () => (this.users = tempUsers),
		}
		
		this.userServices.getAllUsers().subscribe(actions);

		let userSession = this.sessionService.getSessionAsUser();
		if (userSession === null) return;
		this.redirect(userSession);
	}

	private goBack(): void {
		this.location.back();
	}

	private saveSession(user: IUser): void {
		sessionStorage.setItem('user', JSON.stringify(user));
	}

	private resetForm(): void {
		this.loginForm.reset();
	}

	private redirect(user: IUser): void {
		if (user.role === 'ADMIN') {
			alert('Bienvenido Admin');
			this.router.navigate([routesDictionary.admin.route]);
		} else if (user.role === 'CLIENT') {
			alert('Bienvenido');
			this.goBack();
		}
		else {
			alert('Credenciales incorrectas');
			this.resetForm();
		}
		
	}
}
