import { Component, OnInit } from '@angular/core';
import { IWeather } from '../models/weather';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { WeatherService } from '../weather.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MyEvent } from '../models/events';
import { Store } from '@ngrx/store';
import * as customerActions from '../customer/store/action/customer.actions';
import { selectCustomers } from '../customer/store/selector/customer.selectors';
import { Customer } from '../models/customer';
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
  CusData$: Observable<Customer[]> = of([]);

  name = 'raminnn';
  constructor(private _ws: WeatherService, private store: Store) { }
  title = 'test';


  ramin: MyEvent;

  ngOnInit(): void {
    // this.weatherData$ = this._ws.LoadData().pipe(
    //   map(s => s.filter(s => s.country.toLocaleLowerCase() != null))
    // )

    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged()).subscribe(s => {
        debugger;
        return this.store.dispatch(customerActions.CustomerEntered(s));
      })
     //this.weatherData$ = this._ws.search(this.searchTerm$); // uncomment
    //  this._ws.search(this.searchTerm$).subscribe(s=>{

    //   console.log('ssss', s);
    //   return s;
    //  })
    //this.ramin.


    this.CusData$ = this.store.select(selectCustomers);
  }

  changeNote(name) {
    this.title = name;
  }

  myClick($event) {
    // console.log($event);
  }

}
