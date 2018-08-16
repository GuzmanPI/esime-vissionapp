import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.authenticated && next.routeConfig.path !== 'home') {
      return true;
    }

    return this.authService.appUserObservable()
      .pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          if (!loggedIn && next.routeConfig.path !== 'home') {
            this.router.navigate(['/home']);
          }
        })
      );
  }
}
