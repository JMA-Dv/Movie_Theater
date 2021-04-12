import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTheater } from 'src/app/models/movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  movieTheaterModel: MovieTheater = {name: 'somewhere',
  latitude:22.148610426316303,
  longitude:-100.9083938598633};
   
  constructor(private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      
    })
  }
  saveChanges(movieTheaters: MovieTheater):void{

  }

}
