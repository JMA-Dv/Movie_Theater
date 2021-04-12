import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  moviesInTheatersM;
  moviesFuturesReleases;
  
  ngOnInit(): void {
    this.moviesInTheatersM = [
      {
      title: 'Spide',
      releaseDate: new Date(),
      price: 1200,
      poster:'https://img.europapress.es/fotoweb/fotonoticia_20210202144523_420.jpg'
    },
    {
      title: 'End war',
      releaseDate: new Date('2016-11-16'),
      price: 1200,
      poster:'https://img.europapress.es/fotoweb/fotonoticia_20210202144523_420.jpg'
    }];
  
     this.moviesFuturesReleases = [];
  }
}
