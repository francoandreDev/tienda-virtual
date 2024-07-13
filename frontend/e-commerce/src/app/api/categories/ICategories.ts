export interface ICategory {
	id: number;
	name: string;
}

export interface IRequestCategory extends Omit<ICategory, 'id'> {}
