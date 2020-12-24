import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";


@Injectable({
  providedIn: 'root'
})
export class WeatherSearchService {

  constructor() { }

  // search(terms: Observable<string>) {
  //   return terms.pipe(
  //     debounceTime(400),
  //     distinctUntilChanged(),
  //     switchMap(term => this.searchEntries(term)));

  // }
  // searchEntries(term: string): any {
  //   throw new Error("Method not implemented.");
  // }
}
