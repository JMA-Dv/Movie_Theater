import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieTheater } from 'src/app/models/movie-theaters.model';
import { CoordinateMap } from 'src/app/utilities/map/coordinate';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.scss']
})
export class MovieTheaterFormComponent implements OnInit {
  theaterForm: FormGroup;

  @Input()  
  movieTheaterModel: MovieTheater;

  @Output()
  onSaveChanges = new EventEmitter<MovieTheater>();

  initialCoordinates: CoordinateMap[] = [];

  constructor(private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.theaterForm = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      longitude:['',{
        Validators:[Validators.required]
      }],
      latitude:['',{
        Validators:[Validators.required]
      }] 
    })
    if(this.movieTheaterModel !== undefined){
      this.theaterForm.patchValue(this.movieTheaterModel);
      this.initialCoordinates.push({latitude:this.movieTheaterModel.latitude, longitude:this.movieTheaterModel.longitude});

    }
  }
  saveChances(): void{
    this.onSaveChanges.emit(this.theaterForm.value);
  }

  onSelectedLocation(coordinates: CoordinateMap) {
    this.theaterForm.patchValue(coordinates);
  }

}
