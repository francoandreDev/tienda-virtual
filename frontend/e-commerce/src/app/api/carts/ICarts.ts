import { IUser } from '../users/IUsers';

export interface ICart {
	id: number;
	user: IUser;
}

export interface IRequestCart extends Omit<ICart, 'id' | 'user'> {
	userId: number;
}
