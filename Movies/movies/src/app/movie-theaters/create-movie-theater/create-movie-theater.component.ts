import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheater } from 'src/app/models/movie-theaters.model';
import { MovieTheaterService } from 'src/app/services/movie-theater.service';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.scss']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private theaterService: MovieTheaterService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveChanges(movieTheater: MovieTheater){
    console.log(movieTheater);
    this.theaterService.createMovieTheater(movieTheater).subscribe(()=> this.router.navigate(["/movietheaters"]));
    
    
  }

}
