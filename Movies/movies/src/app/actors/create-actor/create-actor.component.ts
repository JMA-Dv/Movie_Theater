import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  constructor(private actorService: ActorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveChanges(actor: Actor){
    this.actorService.createActor(actor).subscribe(()=>{
      this.router.navigate(["/actors"]);
    });
  }

}
