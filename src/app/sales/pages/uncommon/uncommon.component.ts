import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [
  ]
})
export class UncommonComponent  {

  //i18nSelect
  name: string = 'Jessica';
  gender: string = 'female';

  testPipeMap = {
    'female': 'This is a female name.',
    'male': 'This is a male name.'
  };

  //i18nPlural
  testPipeArr: string[] = [
    'Maria', 
    'Erika', 
    'Hector',
    'Adrian'
  ];

  testPipePluralMap = {
    '=0':'There is no elements on the array.',
    '=1':'There is 1 element on the array.',
    'other': 'There is # elements on the array.'
  }

  //KeyValue
  testPerson = {
    name: 'Jessica',
    age: 28,
    address: 'Córdoba, Argentina'
  }

  //JSON
  testJsonArr = [
    {
      name: 'Maria',
      age: 54
    },
    {
      name: 'Hector',
      age: 60
    },
    {
      name: 'Erika',
      age: 31
    }
  ]

  //Async
  testObservable = interval(1000); //Observavle que va a emitir valores numericos

  testPromise = new Promise( (resolve, reject) => {
    setTimeout(
      () => {
        resolve( 'End of promise...' );
      }, 3500
    );
  });

  changePerson(){
    if (this.name != 'Maria') {
      this.name = 'Maria';
      this.gender = 'female';
    } else {
      this.name = 'Adrian';
      this.gender = 'male';
    }
  }

  deletePerson(){
    if (this.testPipeArr.length > 0) {
      this.testPipeArr.shift();
    } else {
      return;
    }
  }
}
