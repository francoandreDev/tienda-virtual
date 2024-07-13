import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'round',
	standalone: true,
})
export class RoundPipe implements PipeTransform {
	transform(value: number): string {
		if (isNaN(value)) return '';
		return value.toFixed(2);
	}
}
