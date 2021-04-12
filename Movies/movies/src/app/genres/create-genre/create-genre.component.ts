import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';
import { parseWebAPIErrors } from 'src/app/utilities/parse-errors.utilis';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  errors: string[] = [];
  
  constructor(private router: Router,private genreService: GenreService  ) { }

  ngOnInit(): void {

  }

  saveChanges(genreDto: Genre){
   this.genreService.create(genreDto).subscribe(()=>{

     this.router.navigate(['/genres'])
   }, error =>  this.errors = parseWebAPIErrors(error));

  }
  
}
