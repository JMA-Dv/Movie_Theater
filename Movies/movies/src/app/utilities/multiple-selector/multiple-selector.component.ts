import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelector } from 'src/app/models/multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  @Input()
  selectedItem :MultipleSelector[] = []

  @Input()
  nonSelectedItem :MultipleSelector[] = []


  constructor() { }

  ngOnInit(): void {
  }
  selectAll(){
    this.selectedItem.push(...this.nonSelectedItem);
    this.nonSelectedItem = [];

  }
  deSelectAll(){
    this.nonSelectedItem.push(...this.selectedItem);
    this.selectedItem = [];

  }

  select(item: MultipleSelector, index: number){
    this.selectedItem.push(item);
    this.nonSelectedItem.splice(index,1);

  }
  deSelect(item: MultipleSelector, index: number){
    this.nonSelectedItem.push(item);
    this.selectedItem.splice(index,1);

  }

}
