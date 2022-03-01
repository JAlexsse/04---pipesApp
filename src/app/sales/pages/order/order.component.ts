import { Component } from '@angular/core';
import { Color, Product } from 'src/app/interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  //my uppercase pipe
  testString: string = 'Just some test text.'
  toUpper: boolean = true;
  format: string = 'testString | myuppercase';
  textButton: string = 'To Lower';

  //orderby
  orderButton: string = '';

  //table
  products: Product[] = [
    {
      name: 'Shoes',
      value: 456.32,
      color: Color.green,
      stock: true
    },
    {
      name: 'Face cream',
      value: 36.67,
      color: Color.white,
      stock: false
    },
    {
      name: 'Sunglasses',
      value: 780.23,
      color: Color.black,
      stock: true
    },
    {
      name: 'Soap',
      value: 6.13,
      color: Color.purple,
      stock: false
    }
  ];

  changeUsageOfPipe(){
    if (this.toUpper) {
      this.toUpper = false;
      this.format = 'testString | myuppercase:false';
      this.textButton = 'To Upper';
    } else {
      this.toUpper = true;
      this.format = 'testString | myuppercase';
      this.textButton = 'To Lower';
    }
  }

  changeValueButton( value: string ):void {
    this.orderButton = value;
  }
}
