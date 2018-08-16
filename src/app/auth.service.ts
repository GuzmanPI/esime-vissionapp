import {Injectable, OnDestroy} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';

import {Observable, Subscription} from 'rxjs';

import {User} from './data-models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private authStateSubscription: Subscription;
  authState: User = null;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.authStateSubscription = this.angularFireAuth.authState.subscribe((authState: any | null) => {
      this.authState = authState;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // returns an observable of the current logged user
  appUserObservable(): Observable<any | null> {
    return this.angularFireAuth.authState;
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
