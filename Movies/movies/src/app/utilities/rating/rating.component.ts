import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  selectedRate:number = 0;
  @Input()
  maxRating:number = 5;
  maxRatingArray = [];
  @Output()
  onRating:EventEmitter<number> = new EventEmitter<number>();
  previousRate:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray =  Array(this.maxRating).fill(0);
  }
  handleMouseEnter(index:number){
    this.selectedRate = index + 1;

  }
  handleMouseLeave(){
    if(this.previousRate!==0){
      this.selectedRate = this.previousRate;
    }else{

      this.selectedRate = 0;
    }
  }
  rate(index:number){

    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
