import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  text: string = 'AnGuLaR pIpEs';
  date: Date = new Date();

}
