import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IWeather } from '../models/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  @Input() myWeather$: Observable<IWeather[]>;
  constructor() { }

  ngOnInit(): void {


// this.myWeather$.subscribe(s=>{

// console.log('s', s);
// //debugger;
// });

  }

}
