import {
	IUser,
	IRequestUser,
	IClient,
	IRequestClient,
	IAdmin,
	IRequestAdmin,
	TClient,
	TAdmin
} from './IUsers';

export function isUser(obj: any): obj is IUser {
	return (
		typeof obj === 'object' &&
		typeof obj.id === 'number' &&
		typeof obj.username === 'string' &&
		typeof obj.password === 'string' &&
		(obj.role === 'CLIENT' || obj.role === 'ADMIN') &&
		typeof obj.city === 'string' &&
		typeof obj.country === 'string' &&
		typeof obj.email === 'string' &&
		typeof obj.phone === 'string' &&
		typeof obj.balance === 'number'
	);
}

export function isRequestUser(obj: any): obj is IRequestUser {
	return (
		typeof obj === 'object' &&
		typeof obj.username === 'string' &&
		typeof obj.password === 'string' &&
		(obj.role === 'CLIENT' || obj.role === 'ADMIN') &&
		typeof obj.city === 'string' &&
		typeof obj.country === 'string' &&
		typeof obj.email === 'string' &&
		typeof obj.phone === 'string' &&
		typeof obj.balance === 'number'
	);
}

export function isClient(obj: any): obj is IClient {
	return isUser(obj) && obj.role === 'CLIENT';
}

export function isRequestClient(obj: any): obj is IRequestClient {
	return isRequestUser(obj) && obj.role === 'CLIENT';
}

export function isAdmin(obj: any): obj is IAdmin {
	return isUser(obj) && obj.role === 'ADMIN';
}

export function isRequestAdmin(obj: any): obj is IRequestAdmin {
	return isRequestUser(obj) && obj.role === 'ADMIN';
}

export function userToRequestUser(user: IUser): IRequestUser {
	return {
		username: user.username,
		email: user.email,
		password: user.password,
		role: user.role,
		city: user.city,
		country: user.country,
		phone: user.phone,
		balance: user.balance,
	};
}
