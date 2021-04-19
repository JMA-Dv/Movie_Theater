import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiURL = environment.apiURL+ '/genre';

  constructor(private http: HttpClient) { }
  
  getAll():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.apiURL);
  }
  getGenreById(genreId: number):Observable<Genre>{
    return this.http.get<Genre>(`${this.apiURL}/${genreId}`);
  }

  
  edit(genreId: number, genre: Genre){
    return this.http.put(`${this.apiURL}/${genreId}`,genre);

  }
  create(genre: Genre){
    return this.http.post(this.apiURL,genre);
  }
  deleteGenre(genreId: number){
    return this.http.delete(`${this.apiURL}/${genreId}`);
  }
}
