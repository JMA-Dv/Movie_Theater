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
