import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stock'
})
export class StockPipe implements PipeTransform {
    
    transform( value: boolean ) : string {
        return ( value ) 
            ? 'en stock'
            : 'sin stock';
    }

}