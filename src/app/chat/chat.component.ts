import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagesCollections: AngularFirestoreCollection<any>;
  messages: Observable<any[]>;
  newMessage: string;

  form = new FormGroup({
    title: new FormControl('', {validators: [Validators.required]}),
    comment: new FormControl('', {validators: [Validators.required]})
  }, {updateOn: 'submit'});

  constructor(private angularFirestore: AngularFirestore) {
  }

  ngOnInit() {
    this.messagesCollections = this.angularFirestore.collection('messages');
    this.messages = this.messagesCollections.valueChanges();
  }

  addMessage(): void {
    this.messagesCollections.add({title: this.form.get('title').value.trim(), comment: this.form.get('comment').value.trim()});
  }

}
