import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() { }
  messages: string[] = [
    'Initial message, there is not new Story'
  ];

  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
  decline() {
    this.messages.pop();
  }
  log() {
    console.log('Messages:  ' + this.messages)
  }
}
