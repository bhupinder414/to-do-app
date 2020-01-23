import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Output() titleCreated=new EventEmitter();

  title:string;
  content:string;

  onAddTitle()
  {
    const post = {Title: this.title, Content: this.content};
    console.log(post);
    this.titleCreated.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }

}