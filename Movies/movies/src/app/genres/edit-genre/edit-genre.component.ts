import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
export class EditGenreComponent implements OnInit {

  movieGenre: Genre;
  constructor(private  activatedRoute: ActivatedRoute,
    private genreService: GenreService,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      this.genreService.getGenreById(result.id).subscribe((genre)=>{
        this.movieGenre = genre;
      })
    })
  }

  saveChanges(genre: Genre){
    this.genreService.edit(this.movieGenre.id,genre).subscribe(()=>{
      this.router.navigate(["/genre"]);
    })

  }

}
