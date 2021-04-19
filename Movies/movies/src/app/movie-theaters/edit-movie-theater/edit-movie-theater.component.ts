import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheater, MovieTheaterDTO } from 'src/app/models/movie-theaters.model';
import { MovieTheaterService } from 'src/app/services/movie-theater.service';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.scss']
})
export class EditMovieTheaterComponent implements OnInit {

  movieTheaterModel: MovieTheaterDTO; 
   
  constructor(private  activatedRoute: ActivatedRoute,
    private movieTheaterService: MovieTheaterService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  saveChanges(movieTheater: MovieTheater):void{
    this.movieTheaterService.updateMovieTheater(this.movieTheaterModel.id,movieTheater)
    .subscribe(()=>this.router.navigate(["/movietheaters"]));

  }
  loadData():void{
    this.activatedRoute.params.subscribe((params)=>{
      this.movieTheaterService.getMovieTheatherById(params.id)
      .subscribe(theater=> this.movieTheaterModel = theater);
      
    });
  } 
  

}
