import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  contador : number=10;
  base: number=5;

  agregate(value:number){
    this.contador+=value;
  }



}
