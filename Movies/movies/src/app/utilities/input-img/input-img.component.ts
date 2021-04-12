import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from 'src/app/services/sheet.service';
import { toBase64 } from '../img.utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  imageBase:string;
  sheetBase:Sheet = new Sheet();

  @Input()
  urlCurrentImg:string;

  @Output()
  onImageSelected = new EventEmitter<File>();
  constructor(private sheetService: SheetService) { }

  ngOnInit(): void {
  }

  change(event){
    if(event.target.files.length > 0){
      let file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase = value);
      
      this.onImageSelected.emit(file);
      this.urlCurrentImg = null;
    }

  }

  changeSheet(event){
    if(event.target.files.length > 0 && event.target.files !== undefined){
      let file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.sheetBase.Content = value).
      then(()=>
      this.sheetService.postSheet(this.sheetBase).subscribe(()=>{
        console.log("si jalo el  post")
        },error =>  console.log(error)));
      console.log(this.sheetBase.Content);
      

      
      
      
      
    }
  }

}
