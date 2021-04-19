import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MultipleSelector } from 'src/app/models/multiple-selector.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  nonSelectedGenres: MultipleSelector[];
  nonSelectedTheaters: MultipleSelector[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response=>{

    })
  }
  saveChanges(movie: Movie):void{
    console.log(movie);

  }

}
