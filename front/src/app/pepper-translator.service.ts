import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { PepperApiClientService } from './pepper-api-client.service';

const PEPPER_URL = 'https://live-pricing.pepperstone.com/quotes?symbols=EURUSD,XAUUSD,NAS100,Bitcoin,Tesla_Inc_(TSLA.O),AUDUSD,GBPUSD,USDCAD,USDJPY,USDCHF,XAGUSD,SpotCrude,NatGas,Wheat,GER40,US30,AUS200,HK50,Twitter_Inc_(TWTR.N),Alibaba_Group_(BABA.N),Apple_Inc_(AAPL.O),Commonwealth_Bank_(CBA.AX),Global_Uranium_ETF_(URA.P),ARK_Innovation_ETF_(ARKK.P),Lithium_ETF_(LIT.P),India_50_ETF_(INDY.O),Gold_Miners_ETF_(GDX.P)';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable({
  providedIn: 'root'
})
export class PepperTranslatorService {
  public messages?: Subject<Message>;

  constructor(wscService: PepperApiClientService) {
    this.messages = <Subject<Message>>(
      wscService.connect(PEPPER_URL).pipe(map((response: MessageEvent): Message => {
        let content = JSON.parse(response.data);
        return {
          user: content.user,
          messageContent: content.messageContent,
        }
      }))
    );
  }
}
