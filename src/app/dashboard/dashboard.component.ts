import { Component, OnInit } from '@angular/core';
import { IWeather } from '../models/weather';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { WeatherService } from '../weather.service';
import { map } from 'rxjs/operators';
import { MyEvent } from '../models/events';
// import { Events } from '../models/events'

@Component({
  selector: 'appdashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  //searchTerm$ = new Subject<string>();
  searchTerm$ = new BehaviorSubject('');
  weatherData$: Observable<IWeather[]> = of([]);
  name = 'raminnn';
  constructor(private _ws: WeatherService) { }
  title = 'test';


  ramin: MyEvent;

  ngOnInit(): void {
    // this.weatherData$ = this._ws.LoadData().pipe(
    //   map(s => s.filter(s => s.country.toLocaleLowerCase() != null))
    // )
    this.weatherData$ = this._ws.search(this.searchTerm$);
//this.ramin.
  }

  changeNote(name) {
    this.title = name;
  }

  myClick($event) {
   // console.log($event);
  }

}
