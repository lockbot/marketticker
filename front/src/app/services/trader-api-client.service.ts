import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { ApiClientService } from './api-client.service';

const TRADER_WEBSOCKET_URL = 'wss://marketdata.tradermade.com/feedadv';

export interface SentOnOpenMessage {
  userKey: string,
  symbol: string
}

export interface RecieveMessage {
  symbol: string,
  ts: string,
  bid: number,
  ask: number,
  mid: number
}

@Injectable({
  providedIn: 'root'
})
export class TraderApiClientService {
  public handshake?: Subject<RecieveMessage>;

  constructor(wscService: ApiClientService) {
    this.handshake = <Subject<RecieveMessage>>(
      wscService.connect(TRADER_WEBSOCKET_URL).pipe(map((response: MessageEvent) => {
        let content = JSON.parse(response.data);
        return {
          symbol: content.symbol,
          ts: content.ts,
          bid: content.bid,
          ask: content.ask,
          mid: content.mid
        }
      }))
    );
  }
}
