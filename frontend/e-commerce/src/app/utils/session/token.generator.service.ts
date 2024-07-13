import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { environment } from '../../../environment/environment';

@Injectable({
	providedIn: 'root',
})
export class TokenGeneratorService {
	private secretKey = environment.secretKey;

	constructor() {}

	generateToken(data: any): string {
		const dataString = JSON.stringify(data);
		return CryptoJS.AES.encrypt(dataString, this.secretKey).toString();
	}

	validateToken(token: string): any {
		try {
			const bytes = CryptoJS.AES.decrypt(token, this.secretKey);
			const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
			return JSON.parse(decryptedData);
		} catch (e) {
			console.error('Token validation error:', e);
			return null;
		}
	}
}
