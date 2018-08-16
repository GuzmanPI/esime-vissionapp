import {Component, OnInit} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

import {HomeData} from './home.data';
import {Technology} from '../data-models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private homeData = new HomeData();
  technologies: Technology[];

  constructor(public angularFireAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.technologies = this.homeData.technologies;
  }

  login() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
