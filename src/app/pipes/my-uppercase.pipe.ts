import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myuppercase'
})
export class MyUpperCasePipe implements PipeTransform {
    
    transform( value: string, toUpper: boolean = true ):string {
        return (toUpper) 
            ? value.toUpperCase() 
            : value.toLowerCase(); 
        //lo que retornemos sera como se vea la 
        //info proveida al pipe
    }

}