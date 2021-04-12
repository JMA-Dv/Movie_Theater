import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.scss']
})
export class FormGenreComponent implements OnInit {

  @Input()
  movieGenre:Genre;

  form: FormGroup;

  @Output()
  onSaveChanges:EventEmitter<Genre> = new EventEmitter<Genre>();

  constructor(private router: Router,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators:[Validators.required,Validators.minLength(3),firstLetterUppercase()]
      }]
    })
    if(this.movieGenre !== undefined){
      this.form.patchValue(this.movieGenre);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
    

  }
  getErrorFieldName(): string{
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'The name field is required'
    }
    if(field.hasError('minLength')){
      return 'The minimum length is 3'
    }
    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
    

    return ''
  }

}
