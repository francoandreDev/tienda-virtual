import { ICategory, IRequestCategory } from './ICategories';

export function isCategory(obj: any): obj is ICategory {
	return (
		typeof obj === 'object' &&
		typeof obj.id === 'number' &&
		typeof obj.name === 'string'
	);
}

export function isRequestCategory(obj: any): obj is IRequestCategory {
	return typeof obj === 'object' && typeof obj.name === 'string';
}

export function categoryToRequestCategory(
	category: ICategory
): IRequestCategory {
	return {
		name: category.name,
	};
}
