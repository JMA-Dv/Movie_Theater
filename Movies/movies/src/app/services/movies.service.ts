import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviePostGetDTO } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiURL = environment.apiURL + '/movie';
  constructor(private http: HttpClient) { }

  public postGet():Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }
}
