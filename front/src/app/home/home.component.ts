import { Component, OnInit } from '@angular/core';
import { PepperTranslatorService } from '../pepper-translator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private chatService: PepperTranslatorService) {
    chatService.messages?.subscribe((msg) => {
      console.log('Response recieved from websocket: ' + msg);
    });
  }

  private message = {
    user: 'Husnain',
    messageContent: 'Hello World!',
  };

  sendMessage() {
    console.log('new message from the client: ', this.message);
    this.chatService.messages?.next(this.message);
    this.message.messageContent = '';
  }

}
