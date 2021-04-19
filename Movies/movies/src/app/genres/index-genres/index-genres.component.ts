import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { AlertsService } from 'src/app/services/alerts.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.scss']
})
export class IndexGenresComponent implements OnInit {

  genres: Genre[];
  columnsToDisplay = ['name','actions'];
   
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.loadGenres();
  }
  loadGenres():void{
    this.genreService.getAll().subscribe((genres)=>{
      this.genres = genres;
      console.log(genres);
    })
  }

  deleteGenres(genreId: number):void{
    this.genreService.deleteGenre(genreId).subscribe(()=>{
      
      this.loadGenres();
    })

  }


}
