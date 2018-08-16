import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import * as firebase from 'firebase';

import {Observable} from 'rxjs';

import {Quote} from '../data-models/models';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', {validators: [Validators.required]}),
    icon: new FormControl('', {validators: [Validators.required]}),
    thought: new FormControl('', {validators: [Validators.required]})
  }, {updateOn: 'submit'});

  constructor(private angularFirestore: AngularFirestore, private authService: AuthService) {
  }

  ngOnInit() {
  }
}
