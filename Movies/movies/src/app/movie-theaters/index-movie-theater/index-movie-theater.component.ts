import { Component, OnInit } from '@angular/core';
import { MovieTheaterDTO } from 'src/app/models/movie-theaters.model';

import { MovieTheaterService } from 'src/app/services/movie-theater.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.scss']
})
export class IndexMovieTheaterComponent implements OnInit {

  movieTheaters: MovieTheaterDTO[];
  columnsToDisplay: string[] = ['name','actions'];
  constructor(private theaterService: MovieTheaterService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    this.theaterService.getAllMovieTheaters().subscribe((response)=>{
      this.movieTheaters = response;
    })
  }
  deleteMovieTheaters(theaterId: number){
    this.theaterService.deleteMovieTheater(theaterId).subscribe(()=> this.loadData());
  }

}
