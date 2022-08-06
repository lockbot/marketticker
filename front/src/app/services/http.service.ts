import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Currency } from '../home/currency';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly PEPPER_URL = 'https://live-pricing.pepperstone.com/quotes?symbols=EURUSD,XAUUSD,NAS100,Bitcoin,Tesla_Inc_(TSLA.O),AUDUSD,GBPUSD,USDCAD,USDJPY,USDCHF,XAGUSD,SpotCrude,NatGas,Wheat,Ethereum,ADAUSD,XRPUSD,DOGEUSD,GER40,US30,AUS200,HK50,Twitter_Inc_(TWTR.N),Alibaba_Group_(BABA.N),Apple_Inc_(AAPL.O),Commonwealth_Bank_(CBA.AX),Global_Uranium_ETF_(URA.P),ARK_Innovation_ETF_(ARKK.P),Lithium_ETF_(LIT.P),India_50_ETF_(INDY.O),Gold_Miners_ETF_(GDX.P)';

  constructor(private httpClient: HttpClient) { }

  listPepper() {
    return this.httpClient.get(this.PEPPER_URL)
    .pipe(
      first(),
      tap()
    );
  }
}
