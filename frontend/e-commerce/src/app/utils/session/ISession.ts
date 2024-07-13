import { IUser, Trole } from '../../api/users/IUsers';

export interface ISession extends IUser {}

export interface IRequestSession {
	id: number;
	token: string;
	user: {
		id: number;
		username: string;
		role: Trole;
	};
}
