import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {
  @Output()
  changeMarkdown = new EventEmitter<string>();

  @Input()
  markdownContent:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
