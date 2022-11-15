import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor() { }
  @Input() nuevo: Character={
    name:'',
    health:0
  }

  @Input() personajes: Character[]=[]

  addCharacter(){
    let objeto={
      name: this.nuevo.name,
      health: this.nuevo.health
    }
    this.personajes.push(objeto);
  }
}
