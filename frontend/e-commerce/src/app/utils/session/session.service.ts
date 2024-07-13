import { Injectable } from '@angular/core';
import { isAdmin, isClient } from '../../api/users/users.validation';
import { ISession } from './ISession';
import { IUser } from '../../api/users/IUsers';

@Injectable({
	providedIn: 'root',
})
export class SessionService {
	constructor() {}
	checkLoginExists(): boolean {
		const user = sessionStorage.getItem('user');

		if (!user || user === null) return false;

		return Boolean(JSON.parse(user));
	}

	checkAdmin(): boolean {
		if (this.checkLoginExists() === false) return false;

		const user = sessionStorage.getItem('user') || '';

		return isAdmin(JSON.parse(user));
	}

	checkClient(): boolean {
		if (this.checkLoginExists() === false) return false;

		const user = sessionStorage.getItem('user') || '';

		return isClient(JSON.parse(user));
	}

	saveLogin(user: IUser | ISession): void {
		sessionStorage.setItem('user', JSON.stringify(user));
	}

	getSessionAsUser(): IUser | null {
		return JSON.parse(sessionStorage.getItem('user') || '') as IUser | null;
	}

	logout(): void {
		sessionStorage.removeItem('user');
	}
}
