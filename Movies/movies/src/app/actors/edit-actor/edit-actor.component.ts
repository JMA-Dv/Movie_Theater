import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor, ActorDTO } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {

  actorModel: ActorDTO;
  constructor(private  activatedRoute: ActivatedRoute,
    private actorService: ActorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.actorService.getActorById(params.id).subscribe(
        (actor=> this.actorModel = actor));
    })
  }
  saveChanges(actor: Actor){
    console.log(actor);

    this.actorService.updateActor(this.actorModel.id, actor).subscribe(()=>{
      this.router.navigate(["/actors"]);
    })
  }

}
