import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IWeather } from './models/weather';
import { debounceTime, distinctUntilChanged, switchMap, filter, tap, map, delay } from 'rxjs/operators';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  LoadFakeData() : any {

      this.http.get('https://api.mocki.io/v1/78affc09').subscribe(s=>{
debugger;
console.log(s);
      });
  }

  LoadData(country: string): Observable<IWeather[]> {

    //this.LoadFakeData();
    //this.getData();
    //return this.http.get('https://jsonplaceholder.typicode.com/users');

    const temperatures = [{
      country: 'Iran',
      Temperature: 37
    },
    {
      country: 'US',
      Temperature: 39
    }];

    return of(temperatures).pipe(
      delay(1000),
      map(s => s.filter(s => !!country ? s.country.toLocaleLowerCase() === country : s)
      //   {
      //   if (!!country) {
      //     return s.country.toLocaleLowerCase() === country;
      //   } else {
      //     return s;
      //   }
      // }

      //)
      )
    );
  }

  LoadData2(country: string): Observable<Customer[]> {

    //this.LoadFakeData();
    //this.getData();
    //return this.http.get('https://jsonplaceholder.typicode.com/users');

    const temperatures = [{
      name: 'Iran'
    },
    {
      name: 'US'
    }];

    return of(temperatures).pipe(
      delay(1000),
      map(s => s.filter(s => !!country ? s.name.toLocaleLowerCase() === country : s)
      //   {
      //   if (!!country) {
      //     return s.country.toLocaleLowerCase() === country;
      //   } else {
      //     return s;
      //   }
      // }

      //)
      )
    );
  }

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(s => this.LoadData(s)));
  }

  getData() {

    // const headers = new HttpHeaders({ 'x-rapidapi-key': 'luacNSGgDXaohDM8kmldverdNXol1yPk' })
    // this.http.get('https://jsonplaceholder.typicode.com/users/1', {
    //   headers,
    // })
    // .subscribe(response => console.log('Got the Response as: ', response));


    const param = new HttpParams({ fromObject: { aaa: '1', bbb: '222' } });
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-key', 'luacNSGgDXaohDM8kmldverdNXol1yPk');
    headers = headers.set('x-rapidapi-host', 'community-open-weather-map.p.rapidapi.com');
    this.http.get('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html', { headers })
      .subscribe(s => {
        // console.log('s', s);
      })
    // const obj = {aaa: '1', bbb: '222'};
    // this.http.get('test', { params: obj}).subscribe();
  }



  // getEvents() {

  //   let myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');
  //   let myParams = new URLSearchParams();
  //   myParams.append('id', '123');
  //   let options = new HttpHeaders({ headers: myHeaders, params: myParams });
  //   return this.http.get('this.url', options)

  // }
  // searchEntries(term: string): any {
  //   throw new Error("Method not implemented.");
  // }
}
