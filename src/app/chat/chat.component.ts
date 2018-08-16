import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import * as firebase from 'firebase';

import {Observable} from 'rxjs';

import {Quote} from '../data-models/models';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  thoughtsCollections: AngularFirestoreCollection<Quote>;
  thoughts: Observable<Quote[]>;
  user: any;

  form = new FormGroup({
    title: new FormControl('', {validators: [Validators.required]}),
    icon: new FormControl('', {validators: [Validators.required]}),
    thought: new FormControl('', {validators: [Validators.required]})
  }, {updateOn: 'submit'});

  constructor(private angularFirestore: AngularFirestore, private authService: AuthService) {
  }

  ngOnInit() {
    this.thoughtsCollections = this.angularFirestore.collection('thoughts');
    this.thoughts = this.thoughtsCollections.valueChanges();

    this.user = this.authService.authState;
  }

  addMessage(): void {
    if (this.form.status) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      const newCuote: Quote = {
        author: this.user.displayName,
        timestamp: timestamp,
        title: this.form.get('title').value.trim(),
        icon: this.form.get('icon').value.trim(),
        content: this.form.get('thought').value.trim()
      };

      this.thoughtsCollections.add(newCuote);
    }
  }

}
