import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { CoordinateMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Movies awesome' })
    ],
    zoom: 12,
    center: latLng(22.149957067473906, -100.97598552703859)
  };
  layers: Marker<any>[]= [];

  @Input()
  initialCoordinates: CoordinateMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<CoordinateMap>();

  constructor() { }

  ngOnInit(): void {
    this.layers =  this.initialCoordinates.map(value=>marker([value.latitude,value.longitude]));

  }

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude,longitude});
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
    this.onSelectedLocation.emit({latitude,longitude});

  }

}
