import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit {

  actorForm: FormGroup;

  @Input()
  actorModel: Actor;

  @Output()
  onSaveChanges = new EventEmitter<Actor>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.actorForm = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      dateOfBirth:'',
      picture:'',
      biography:''
      
    })
    if(this.actorModel  !== undefined){
      this.actorForm.patchValue(this.actorModel);
    }
  }
  saveChanges(){
    this.onSaveChanges.emit(this.actorForm.value);
  }
  onImageSelected(image){
    this.actorForm.get('picture').setValue(image);
  }
  changeMarkdown(content:string){
    this.actorForm.get('biography').setValue(content);

  }

}
