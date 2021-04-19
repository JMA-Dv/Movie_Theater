import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieTheater, MovieTheaterDTO } from '../models/movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {
  private apiUrl = environment.apiURL + '/movieTheater';

  constructor(private http: HttpClient) { }
  
  public getAllMovieTheaters():Observable<MovieTheaterDTO[]>{
    return this.http.get<MovieTheaterDTO[]>(this.apiUrl);

  }

  getMovieTheatherById(theaterId: number):Observable<MovieTheaterDTO>{
    return this.http.get<MovieTheaterDTO>(`${this.apiUrl}/${theaterId}`);
  }

  public createMovieTheater(theaterDTO: MovieTheater){
    return this.http.post(this.apiUrl,theaterDTO);
  }

  public updateMovieTheater(theaterId:number, movieTheater: MovieTheater){
    return this.http.put(`${this.apiUrl}/${theaterId}`,movieTheater);
    

  }
  public deleteMovieTheater(theaterId: number){
    return this.http.delete(`${this.apiUrl}/${theaterId}`);
  }
}
