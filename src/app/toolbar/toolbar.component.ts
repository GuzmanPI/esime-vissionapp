import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable, Subscription} from 'rxjs';

import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  user: any;
  userSubscription: Subscription;

  constructor(public authService: AuthService, private router: Router, public angularFireAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.appUserObservable().subscribe(user => {
      this.user = user;
    });
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  signOut() {
    this.angularFireAuth.auth.signOut()
      .then(() => {
        this.router.navigateByUrl('/');
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
