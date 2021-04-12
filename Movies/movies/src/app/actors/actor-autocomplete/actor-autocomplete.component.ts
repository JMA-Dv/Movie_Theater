import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actor-autocomplete',
  templateUrl: './actor-autocomplete.component.html',
  styleUrls: ['./actor-autocomplete.component.scss']
})
export class ActorAutocompleteComponent implements OnInit {
  actorGroup: FormGroup;
  
  selectedActors = [];
  actors = [
    {name:'Tomm Holland', picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {name:'Keanu', picture: 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg'},
    {name:'Lauren ash', picture: 'https://m.media-amazon.com/images/M/MV5BNjk3MjE0ODA3N15BMl5BanBnXkFtZTcwNzY3MDg0Nw@@._V1_UY317_CR91,0,214,317_AL_.jpg'},

  ]
  originalActors = this.actors;
  colomnsToDisplay = ['picture','name','character','actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.actorGroup = this.formBuilder.group({
      actorName:['']
    })
    ;

    this.actorGroup.get('actorName').valueChanges.subscribe((value)=>{
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor=> actor.name.indexOf(value) !== -1)
    })

  }
  optionSelected(event: MatAutocompleteSelectedEvent):void{
      console.log(event.option.value);
      this.selectedActors.push(event.option.value);

      this.actorGroup.get('actorName').patchValue('');
      if(this.table !== undefined){
        //TODO: make validation of  not choosing same actor
        this.table.renderRows();
      }
  }
  remove(actor){
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index,1);
    this.table.renderRows();

  }
  dropped(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors,previousIndex,event.currentIndex);
    this.table.renderRows()
  }

}
