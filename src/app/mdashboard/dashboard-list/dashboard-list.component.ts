import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../models/weather';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { WeatherService } from '../../weather.service';
import { map } from 'rxjs/operators';
import { MyEvent } from '../../models/events';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  title: string;
  ngOnInit(): void {

  }

  // changeNote(name) {
  //   this.title = name;
  // }




}
