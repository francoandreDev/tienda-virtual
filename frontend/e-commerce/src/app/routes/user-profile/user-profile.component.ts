import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IUser } from '../../api/users/IUsers';
import { UsersServices } from '../../api/users/users.service';
import { isUser } from '../../api/users/users.validation';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-user-profile',
	standalone: true,
	imports: [BackButtonComponent],
	templateUrl: './user-profile.component.html',
	styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
	currentUser: IUser = {} as IUser;

	constructor(private router: Router, private userServices: UsersServices) {
		this.getUser();
	}

	getUser(): void {
		if (!sessionStorage.getItem('user'))
			this.redirectToLogin('No ha iniciado sesión aún');

		const user: string = sessionStorage.getItem('user') || '';

		if (!user) this.redirectToLogin('No se pudo obtener usuario');

		const userParsed: IUser = JSON.parse(user);

		if (!isUser(userParsed))
			this.redirectToLogin('No ha iniciado sesión con una cuenta válida');

		const actions: object = {
			next: (user: IUser) => this.actionNextGetUser.bind(this, user),
			error: () => this.actionErrorGetUser.bind(this),
		};

		this.userServices.getUserById(userParsed.id).subscribe(actions);
	}

	private redirectToLogin(msg?: string): void {
		if (typeof msg === 'string' && msg !== '') alert(msg);
		this.router.navigate([routesDictionary.login.route]);
	}

	private actionNextGetUser(user: IUser): void {
		this.currentUser = user;
	}

	private actionErrorGetUser(): void {
		alert('Error al obtener usuario');
	}
}
