export type TClient = 'CLIENT';
export type TAdmin = 'ADMIN';
export type Trole = TClient | TAdmin;

export interface IUser {
	id: number;
	username: string;
	password: string;
	role: Trole;
	city: string;
	country: string;
	email: string;
	phone: string;
	balance: number;
}

export interface IRequestUser extends Omit<IUser, 'id'> {}

export interface IClient extends Omit<IUser, 'role'> {
	role: TClient;
}

export interface IRequestClient extends Omit<IRequestUser, 'role'> {
	role: TClient;
}

export interface IAdmin extends Omit<IUser, 'role'> {
	role: TAdmin;
}
export interface IRequestAdmin extends Omit<IRequestUser, 'role'> {
	role: TAdmin;
}
