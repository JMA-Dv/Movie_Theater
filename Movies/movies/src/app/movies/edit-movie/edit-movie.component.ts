import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieDTO } from 'src/app/models/movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movieModel: MovieDTO = {title:'spider', inTheaters:false,
   summary:'somethjihg',
   releaseDate:new Date(),
   trailer:'ASLSLS', poster:'https://m.media-amazon.com/images/M/MV5BNmY5YzA4OTQtOTQzZS00NDZmLTlhNzQtNzk5NTIyZWE2ZjVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }

  constructor(private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      
    })
  }
  savechanges(movie: Movie):void{


  }

}
