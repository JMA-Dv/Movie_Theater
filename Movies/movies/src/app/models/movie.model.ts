import { Genre } from "./genre.model";
import { MovieTheaterDTO } from "./movie-theaters.model";

//front
export class Movie{
    title:string;
    summary:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate: Date;
    poster:File;
    genreId: number[];
    movieTheatersId:number;
}

export class MovieDTO{
    title:string;
    summary:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate: Date;
    poster:string;
}
export class MoviePostGetDTO{
    genre: Genre[];
    movieTheaters: MovieTheaterDTO[];
}