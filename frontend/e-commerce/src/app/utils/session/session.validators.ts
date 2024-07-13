import { isRequestUser } from '../../api/users/users.validation';
import { IRequestSession, ISession } from './ISession';
import { TokenGeneratorService } from './token.generator.service';

export function isSession(obj: any): obj is ISession {
	return (
		typeof obj === 'object' &&
		typeof obj.id === 'number' &&
		typeof obj.token === 'string' &&
		typeof obj.user === 'object' &&
		typeof obj.user.id === 'number' &&
		typeof obj.user.username === 'string' &&
		typeof obj.user.role === 'string'
	);
}

export const isRequestSession = (obj: any): obj is IRequestSession =>
	isRequestUser(obj) as boolean;

export function sessionToRequestSession(obj: ISession): IRequestSession {
	const tokenGenerator = new TokenGeneratorService();
	return {
        id: obj.id,
		token: tokenGenerator.generateToken(obj),
		user: {
			id: obj.id,
			username: obj.username,
			role: obj.role,
		},
	};
}

export function requestSessionToSession(obj: IRequestSession): ISession {
	const tokenGenerator = new TokenGeneratorService();
	const user: ISession = tokenGenerator.validateToken(
		obj.token
	) as ISession;

	return user;
}
