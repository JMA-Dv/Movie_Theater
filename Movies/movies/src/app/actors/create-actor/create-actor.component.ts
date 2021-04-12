import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges(actor: Actor){
    console.log('this is in create actor',actor);
  }

}
