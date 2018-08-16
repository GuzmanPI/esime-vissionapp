import {Component} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public angularFireAuth: AngularFireAuth) {
  }

  login() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }
}
