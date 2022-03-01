import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform( values: Product[], orderBy: string = 'name' ): Product[] {
    
    switch (orderBy) {
      case 'name':
        return values.sort( 
          ( a, b ) => 
          ( a.name > b.name ) ? 1 : -1 
        );
      case 'color':
        return values.sort( 
          ( a, b ) => 
          a.color - b.color
        );
      case 'value':
        return values.sort( 
          ( a, b ) => 
          a.value - b.value
        );
      default:
        return values;
    }

  }

}
