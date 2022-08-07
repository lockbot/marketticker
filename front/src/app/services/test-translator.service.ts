import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { ApiClientService } from './api-client.service';

const WEBSOCKET_URL = 'wss://ws.postman-echo.com/raw';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestTranslatorService {
  public messages?: Subject<Message>;

  constructor(wscService: ApiClientService) {
    this.messages = <Subject<Message>>(
      wscService.connect(WEBSOCKET_URL).pipe(map((response: MessageEvent): Message => {
        let content = JSON.parse(response.data);
        return {
          user: content.user,
          messageContent: content.messageContent,
        }
      }))
    );
  }
}
