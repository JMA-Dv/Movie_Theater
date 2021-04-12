import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.scss']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe((genres)=>{
      console.log(genres);
    })
  }

}
