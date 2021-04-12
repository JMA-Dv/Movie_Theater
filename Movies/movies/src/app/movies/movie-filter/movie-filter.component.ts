import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  form: FormGroup;

  genres = [{id:1,name:'Drama'},{id:2,name:'Action'}]
  movies = [
    {title:'Sponge bob',poster:'https://img.europapress.es/fotoweb/fotonoticia_20210202144523_420.jpg'},
    {title:'Justice league', poster:'https://img.europapress.es/fotoweb/fotonoticia_20210202144523_420.jpg'},
    {title:'Dora', poster:'https://img.europapress.es/fotoweb/fotonoticia_20210202144523_420.jpg'}
  ];
  originalMovies = this.movies;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      genreId:0,
      upcomingReleases:false,
      inTheaters:false
    })
    this.form.valueChanges.subscribe((response)=>{
      this.movies = this.originalMovies;
      this.filterMovies(response);
    })
  }
  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1)
    }
  }
  clearForm(){
    this.form.reset();
    
  }

}
