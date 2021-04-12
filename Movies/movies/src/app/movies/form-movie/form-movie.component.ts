import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie, MovieDTO } from 'src/app/models/movie.model';
import { MultipleSelector } from 'src/app/models/multiple-selector.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit {

  movieForm:FormGroup;

  @Input()
  movieModel:MovieDTO;

  @Output()
  onSaveChanges = new EventEmitter<Movie>();


  nonSelectedGenres: MultipleSelector[] = [
    {key:1, value:'Actio'},
    {key:2, value:'Sad'},
    {key:3, value:'Thiller'}
  ]
  selectedGenres: MultipleSelector[] = [];

  nonSelectedMovieTheaters: MultipleSelector[] = [
    {key:1, value:'Cinepolis'},
    {key:2, value:'CineMex'},
    {key:3, value:'CineMax'}
  ];
  selectedMovieTheaters: MultipleSelector[] = [];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title:['',{
        validators:[Validators.required]
      }],
      summary:'',
      inTheaters:false,
      trailer:'',
      releaseDate:'',
      poster:'',
      genreId:'',
      movieTheatersId:''
    });
    if(this.movieModel !== undefined){
      this.movieForm.patchValue(this.movieModel);
    }
  }
  savechanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.movieForm.get('genreId').setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.movieForm.get('movieTheatersId').setValue(movieTheatersIds);
    this.onSaveChanges.emit(this.movieForm.value);
  }
  onImageSelected(file: File){
    this.movieForm.get('poster').setValue(file);
  }
  changeMarkdown(content: string){
    this.movieForm.get('summary').setValue(content);

  }

}
