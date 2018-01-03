import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term, findIn): any {
      
        if(findIn == 'location'){
            return term 
            ? items.filter(item => item.location_id.name.indexOf(term) !== -1)
            : items;
        }else{
            return term 
            ? items.filter(item => item.name.indexOf(term) !== -1)
            : items;
        }
    }
}