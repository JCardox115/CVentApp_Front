import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterByPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any {
        if (!items) { return []; }
        if (!value || value.length === 0) { return items; }

        if (isNumber(value)) {
            return items.filter(it => it[field] === value);
        } else {
            if (value === 'null') {
                return items.filter(it => it[field] === null);
            }

            return items.filter(it =>
                it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
        }
    }
}
