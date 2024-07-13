import { Observable, filter, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdmin, IClient, IRequestUser, IUser } from './IUsers';
import {
	isAdmin,
	isClient,
	isRequestClient,
	userToRequestUser,
} from './users.validation';

class UsersService {
	private baseUrl: string = 'http://localhost:8882/api/v1/usuarios';

	constructor(private httpClient: HttpClient) {}

	protected get_users(): Observable<IUser[]> {
		return this.httpClient.get<IUser[]>(this.baseUrl);
	}

	protected get_user_by_id(id: number): Observable<IUser> {
		return this.httpClient.get<IUser>(`${this.baseUrl}/${id}`);
	}

	protected post_users(user: IRequestUser): Observable<IUser> {
		return this.httpClient.post<IUser>(this.baseUrl, user);
	}

	protected put_user(id: number, user: IRequestUser): Observable<IUser> {
		return this.httpClient.put<IUser>(`${this.baseUrl}/${id}`, user);
	}

	protected delete_user(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
	}
}

@Injectable({
	providedIn: 'root',
})
export class UsersServices extends UsersService {
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getAllUsers(): Observable<IUser[]> {
		const observableUsers: Observable<IUser[]> = this.get_users();
		return observableUsers;
	}

	getAllClients(): Observable<IClient[]> {
		const observableClients: Observable<IClient[]> = this.get_users().pipe(
			map((users: IUser[]) => {
				return users.filter((user: IUser) => isClient(user));
			})
		) as Observable<IClient[]>;

		return observableClients;
	}

	getAllAdmins(): Observable<IAdmin[]> {
		const observableAdmins: Observable<IAdmin[]> = this.get_users().pipe(
			map((users: IUser[]) => {
				return users.filter((user: IUser) => isAdmin(user));
			})
		) as Observable<IAdmin[]>;

		return observableAdmins;
	}

	getUserById(id: number): Observable<IUser> {
		const observableUser: Observable<IUser> = this.get_user_by_id(id);
		return observableUser;
	}

	getClientById(id: number): Observable<IClient> {
		const observableClient: Observable<IClient> = this.get_user_by_id(
			id
		).pipe(filter((user: IUser) => isClient(user))) as Observable<IClient>;

		return observableClient;
	}

	getAdminById(id: number): Observable<IAdmin> {
		const observableAdmin: Observable<IAdmin> = this.get_user_by_id(
			id
		).pipe(filter((user: IUser) => isAdmin(user))) as Observable<IAdmin>;
		return observableAdmin;
	}

	newUser(user: IRequestUser | IUser): Observable<IUser> {
		let newUser: IRequestUser;
		if (isClient(user)) {
			newUser = userToRequestUser(user as IUser);
		} else if (isRequestClient(user)) {
			newUser = user;
		} else {
			throw new Error(
				'Tipo de dato inválido mientras se intentaba crear el usuario'
			);
		}
		const observableNewUser: Observable<IUser> = this.post_users(newUser);
		return observableNewUser;
	}

	updateUser(id: number, user: IRequestUser | IUser): Observable<IUser> {
		let updateUser: IRequestUser;
		if (isClient(user)) {
			updateUser = userToRequestUser(user as IUser);
		} else if (isRequestClient(user)) {
			updateUser = user;
		} else {
			throw new Error(
				'Tipo de dato inválido mientras se intentaba actualizar el usuario'
			);
		}
		const observableUpdateUser: Observable<IUser> = this.put_user(
			id,
			updateUser
		);
		return observableUpdateUser;
	}

	deleteUser(id: number): Observable<void> {
		const observableDeleteUser: Observable<void> = this.delete_user(id);
		return observableDeleteUser;
	}
}
