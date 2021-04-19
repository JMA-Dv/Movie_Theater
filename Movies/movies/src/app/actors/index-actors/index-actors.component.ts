import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { _MatTabGroupBase } from '@angular/material/tabs';
import { ActorDTO } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.scss']
})
export class IndexActorsComponent implements OnInit {

  actors: ActorDTO[];
  columnsToDisplay:string[] = ['name','actions'];
  totalAmountOfRecords;
  currentPage:number = 1;
  pageSize:number = 5;
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.actorService.getAllActors(this.currentPage,this.pageSize).subscribe((response: HttpResponse<ActorDTO[]>)=>{
      this.actors = response.body;
      
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      console.log(this.totalAmountOfRecords);

    })
  }
  deleteActors(actorId: number){
    this.actorService.deleteActor(actorId).subscribe(()=>{
      this.loadData();
    });

  }
  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

}
