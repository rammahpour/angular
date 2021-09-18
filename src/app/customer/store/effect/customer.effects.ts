
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer';
import { MyshareComponent } from 'src/app/share/myshare/myshare.component';
import { WeatherService } from 'src/app/weather.service';
import * as fromCustomer from '../action/customer.actions';
import { CustomerState } from '../reducer/customer.reducer';
// import * as ToDoActions from './todo.action';
// import ToDo from './todo.model';

@Injectable()
export class CustomerEffects {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private action$: Actions, private _WeatherService: WeatherService
    ,private _store: Store<CustomerState>) { }

  private ApiURL: string = 'https://localhost:44308/api/ToDo';

  // GetToDos$: Observable<Action> = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(fromCustomer.addCustomer),
  //     filter(s => !!s),
  //     tap(s => {
  //       debugger;
  //       // this._snackBar.openFromComponent(MyshareComponent, {
  //       //   duration: 5000,
  //       // });
  //       // this._snackBar.open('message', 'action', {
  //       //   duration: 2000,
  //       // });
  //     }),
  //     switchMap(action =>
  //       of(action).pipe(
  //         switchMap(() => this._WeatherService.LoadData('iran').pipe(
  //     //    filter(s=>!!s),
  //           map((data: any[]) => {
  //             return fromCustomer.CustomerSucceeded(action.customer)
  //             catchError((error: Error) => {
  //               return of(fromCustomer.CustomerFailed());
  //             })
  //           }
  //           )
  //         ))
  //       )
  //     )
  //   )

  // )


  // SuccessToDoGet$: Observable<Action> = createEffect(() => this.action$.pipe(
  //   ofType(fromCustomer.CustomerSucceeded),
  //   tap(s => {
  //     this._snackBar.open('message', 'action', {
  //       duration: 2000,
  //     });
  //   })
  // ),
  //   { dispatch: false }
  // )


  //CustomerEntered
  searchStream$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(fromCustomer.CustomerEntered),
    tap(s=>{
      debugger;
    }),
  //  filter(({ query }) => !!query),
    switchMap(({ query }) => {
    //  debugger;

        return this._WeatherService.LoadData2(query).pipe(
      //    tap(s=>console.log(s, s)),
            map(results => fromCustomer.loadComplete(results)),
            catchError(() => of(fromCustomer.loadComplete([]))),
        );
    })
));


showNotification$: Observable<Action> = createEffect(() => this.action$.pipe(
  ofType(fromCustomer.loadComplete),
  filter(({ payload }) => payload.results.length  == 1),
  // filter((action)=> action.payload.results.length === 1),
  tap(() => {
    this._snackBar.open('message', 'action', {
      duration: 2000,
    });
  }),
  //map(fromCustomer.CustomerSucceeded(new Customer()))
  //tap(() => this._store.dispatch(fromCustomer.CustomerSucceeded(new Customer())))
),
{ dispatch: false }
)

//CustomerSucceeded

  // )
  // GetToDos$: Observable<Action> = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(fromCustomer.addCustomer),
  //     tap(s => {
  //       debugger;
  //       console.log('s', s)
  //     }),
  //     mergeMap(action =>
  //       this.http.get(this.ApiURL).pipe(
  //         map((data: any[]) => {
  //           return null
  //           catchError((error: Error) => {
  //             return of(null);
  //           })
  //         })
  //       )
  //     )
  //   )

  // )

  //   GetToDos$: Observable<Action> = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(addCustomer),
  //     tap(s => {
  //       debugger;
  //       console.log('s', s)
  //     }),
  //     map(action => addCustomer(action.customer))
  //   )

  // )

}
