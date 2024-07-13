import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { IUser } from '../../api/users/IUsers';
import { UsersServices } from '../../api/users/users.service';
import { SessionService } from '../../utils/session/session.service';
import { routesDictionary } from '../../utils/routes/dictionary';

@Component({
	selector: 'app-admin-users',
	standalone: true,
	imports: [CommonModule, FormsModule, BackButtonComponent],
	templateUrl: './admin-users.component.html',
	styleUrl: './admin-users.component.scss',
})
export class AdminUsersComponent {
	users: IUser[] = [];
	newUser: IUser = {} as IUser;
	showForm: boolean = false;
	showEditForm: boolean = false;
	currentUser: IUser = {} as IUser;

	constructor(
		private router: Router,
		private usersServices: UsersServices,
		private sessionService: SessionService
	) {
		if (
			!sessionService.checkLoginExists() ||
			!sessionService.checkAdmin()
		) {
			this.redirectToHome();
		}
	}

	ngOnInit(): void {
		this.fetchUsers();
		console.log(this.users);
	}

	private redirectToHome(): void {
		alert('Necesita ser un administrador para acceder');
		this.router.navigate([routesDictionary.home.route]);
	}

	private fetchUsers(): void {
		let tempUsers = this.users;
		const actions: object = {
			next: (users: IUser[]) => this.actionNextFetchUsers.bind(this, users),
			error: () => this.actionErrorFetchUsers.bind(this, tempUsers),
		};
		this.usersServices.getAllUsers().subscribe(actions);
	}

	private actionNextFetchUsers(users: IUser[]): void {
		this.users = users;
	}

	private actionErrorFetchUsers(tempUsers: IUser[]): void {
		alert('Error al obtener usuarios');
		this.users = tempUsers
	}

	addUser(): void {
		this.showForm = !this.showForm;
	}

	addNewUser(form: NgForm): void {
		if (form.valid) {
			let tempUsers = this.newUser;
			try {
				this.usersServices.newUser(this.newUser);
				this.showForm = false;
				this.newUser = {} as IUser;
			} catch (e: any) {
				this.showForm = true;
				this.newUser = tempUsers;
			} finally {
				this.fetchUsers();
			}
		}
	}

	deleteUser(id: number): void {
		if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
			try {
				this.usersServices.deleteUser(id);
			} finally {
				this.fetchUsers();
			}
		}
	}

	editUser(user: IUser): void {
		this.currentUser = { ...user };
		this.showEditForm = true;
	}

	updateUser(): void {
		if (this.currentUser) {
			const index = this.currentUser.id;
			let tempUsers = this.currentUser;
			try {
				this.usersServices.updateUser(index, this.currentUser);
				this.showEditForm = false;
				this.currentUser = {} as IUser;
			} catch (e: any) {
				this.showEditForm = true;
				this.currentUser = tempUsers;
			} finally {
				this.fetchUsers();
			}
		}
	}

	cancelEdit(): void {
		this.showEditForm = false;
		this.currentUser = {} as IUser;
	}
}
