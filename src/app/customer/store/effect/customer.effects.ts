
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { MyshareComponent } from 'src/app/share/myshare/myshare.component';
import { WeatherService } from 'src/app/weather.service';
import * as fromCustomer from '../action/customer.actions';
// import * as ToDoActions from './todo.action';
// import ToDo from './todo.model';

@Injectable()
export class CustomerEffects {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private action$: Actions, private _WeatherService: WeatherService) { }

  private ApiURL: string = 'https://localhost:44308/api/ToDo';

  GetToDos$: Observable<Action> = createEffect(() =>
  this.action$.pipe(
    ofType(fromCustomer.addCustomer),
    filter(s=>!!s),
    tap(s => {
      // this._snackBar.openFromComponent(MyshareComponent, {
      //   duration: 5000,
      // });
      // this._snackBar.open('message', 'action', {
      //   duration: 2000,
      // });
    }),
    switchMap(action =>
      this._WeatherService.LoadData('iran').pipe(
        map((data: any[]) => {

          debugger;
          return fromCustomer.CustomerSucceeded(action.customer)
          catchError((error: Error) => {
            return of(fromCustomer.CustomerFailed());
          })
        })
      )
    )
  )

)


SuccessToDoGet$: Observable<Action> = createEffect(() =>
this.action$.pipe(
  ofType(fromCustomer.CustomerSucceeded),
  tap(s => {
    this._snackBar.open('message', 'action', {
      duration: 2000,
    });
  })
),
{ dispatch: false }
)

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
