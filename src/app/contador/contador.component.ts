import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: `contador.component.html`
})
export class ContadorComponent{
  title = 'myFirstApp';
  contador : number=10;
  base: number=5;

  agregate(value:number){
    this.contador+=value;
  }
}