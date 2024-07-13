import { ICart, IRequestCart } from './ICarts';

export function isCart(obj: any): obj is ICart {
	return obj && typeof obj === 'object' && 'id' in obj && 'user' in obj;
}

export function isRequestCart(obj: any): obj is IRequestCart {
	return obj && typeof obj === 'object' && 'userId' in obj;
}

export function cartToRequestCart(cart: ICart): IRequestCart {
	return {
		userId: cart.user.id,
	};
}
