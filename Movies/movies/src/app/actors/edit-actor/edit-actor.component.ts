import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor, ActorDTO } from 'src/app/models/actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {

  actorModel: Actor = {name: 'Algo', dateOfBirth: new Date(),
  picture:'https://image.shutterstock.com/image-photo/los-angeles-jan-16-andrew-260nw-75151687.jpg',
  biography:'Default', }
  constructor(private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      alert(result.id);
    })
  }
  saveChanges(actor: Actor){
    console.log(actor);
  }

}
