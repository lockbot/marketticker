import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { FixerApiClientService } from './fixer-api-client.service';

const WEBSOCKET_URL = 'wss://echo.websocket.org/';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable({
  providedIn: 'root'
})
export class FixerTranslatorService {
  public messages?: Subject<Message>;

  constructor(wscService: FixerApiClientService) {
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
