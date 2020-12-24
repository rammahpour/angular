import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit {


  @Output() open: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

   // this.open.emit('ramin');
  }

  clickHere(){
    this.open.emit('ramin');

  }

}
