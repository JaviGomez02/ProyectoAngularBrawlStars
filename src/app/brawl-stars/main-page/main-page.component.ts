import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { }
  nuevo={
    name:'',
    health:0
  }

  personajes=[
    {name: 'Shelly', health: 3600},
    {name: 'Nita', health: 3800},
    {name: 'Colt', health: 2800},
    {name: 'Leon', health: 3200},
    {name: 'El primo', health: 4000},
    {name: 'Tick', health: 1200}
  ]

}
