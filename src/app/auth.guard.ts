import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _ws: WeatherService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


    return this._ws.LoadData('iran').pipe(
      map(e => {
        //
        // this.router.navigate(['/login']);
         return true;
      }),
      catchError(error => of(false))
      // this.router.navigate(['/login']);
    );
  }
}
