import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, ReplaySubject, Subscription, timer } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Currency } from '../currency';

@Component({
  selector: 'app-pepper',
  templateUrl: './pepper.component.html',
  styleUrls: ['./pepper.component.scss']
})
export class PepperComponent implements OnInit {
  dataSource = new PepperDataSource([]);
  dataSourceFX = new PepperDataSource([]);
  dataSourceCommodities = new PepperDataSource([]);
  dataSourceCryptos = new PepperDataSource([]);
  dataSourceIndices = new PepperDataSource([]);
  dataSourceShares = new PepperDataSource([]);
  dataSourceETFs = new PepperDataSource([]);
  
  timerSubscription: Subscription;

  same = "new";

  pepper$!: Observable<any>;
  pepperList: Currency[] = [];

  constructor(
    private service: HttpService
  ) {
    this.timerSubscription = timer(0, 750).pipe(
      map(() => {
        this.loadData();
        this.dataSource.setData(this.pepperList);
        this.dataSourceFX.setData(this.pepperList.filter(pepper => pepper.name == "AUDUSD" || pepper.name == "GBPUSD" || pepper.name == "USDCAD" || pepper.name == "USDJPY" || pepper.name == "USDCHF"));
        this.dataSourceCommodities.setData(this.pepperList.filter(pepper => pepper.name == "XAUUSD" || pepper.name == "XAGUSD" || pepper.name == "SpotCrude" || pepper.name == "NatGas" || pepper.name == "Wheat"));
        this.dataSourceCryptos.setData(this.pepperList.filter(pepper => pepper.name == "Bitcoin" || pepper.name == "Ethereum" || pepper.name == "ADAUSD" || pepper.name == "XRPUSD" || pepper.name == "DOGEUSD"));
        this.dataSourceIndices.setData(this.pepperList.filter(pepper => pepper.name == "NAS100" || pepper.name == "GER40" || pepper.name == "US30" || pepper.name == "AUS200" || pepper.name == "HK50"));
        this.dataSourceShares.setData(this.pepperList.filter(pepper => pepper.name == "Tesla_Inc_(TSLA.O)" || pepper.name == "Twitter_Inc_(TWTR.N)" || pepper.name == "Alibaba_Group_(BABA.N)" || pepper.name == "Apple_Inc_(AAPL.O)" || pepper.name == "Commonwealth_Bank_(CBA.AX)"));
        this.dataSourceETFs.setData(this.pepperList.filter(pepper => pepper.name == "Global_Uranium_ETF_(URA.P)" || pepper.name == "ARK_Innovation_ETF_(ARKK.P)" || pepper.name == "Lithium_ETF_(LIT.P)" || pepper.name == "India_50_ETF_(INDY.O)" || pepper.name == "Gold_Miners_ETF_(GDX.P)"));
      })
    ).subscribe();
  }

  ngOnInit(): void {
    this.firstLoadData();
  }

  firstLoadData(): void{
    this.pepper$ = this.service.listPepper()
    .pipe(
      catchError(error => {
        console.log('Erro ao carregar cursos.');
        return of();
      })
    );
    this.pepper$.subscribe(data => {
      for( let it in data ) {
        data[it].spread = data[it].ask - data[it].bid;
        let pepperCurrency: Currency = {
          name: it,
          bid: data[it].bid,
          ask: data[it].ask,
          spread: data[it].spread,
          bidClass: this.same,
          askClass: this.same,
          spreadClass: this.same
        }
        this.pepperList.push(pepperCurrency);
      }
    });
  }

  loadData(): void {
    this.pepper$ = this.service.listPepper()
    .pipe(
      catchError(error => {
        console.log('Erro ao carregar cursos.');
        return of();
      })
    );
    this.pepper$.subscribe(data => {
      let i = 0;
      for( let it in data ) {
        data[it].spread = data[it].ask - data[it].bid;
        if(this.pepperList[i].ask != data[it].ask || this.pepperList[i].askClass != "same") {
          if(this.pepperList[i].ask == data[it].ask)
            this.pepperList[i].askClass = this.same;
          else if(data[it].ask > this.pepperList[i].ask)
            this.pepperList[i].askClass = "up";
          else if(data[it].ask < this.pepperList[i].ask)
            this.pepperList[i].askClass = "down";

          this.pepperList[i].ask = data[it].ask;
        }
        if(this.pepperList[i].bid != data[it].bid || this.pepperList[i].bidClass != "same") {
          if(this.pepperList[i].bid == data[it].bid)
            this.pepperList[i].bidClass = this.same;
          else if(data[it].bid > this.pepperList[i].bid)
            this.pepperList[i].bidClass = "up";
          else if(data[it].bid < this.pepperList[i].bid)
            this.pepperList[i].bidClass = "down";

          this.pepperList[i].bid = data[it].bid;
        }
        if(this.pepperList[i].spread != data[it].spread || this.pepperList[i].spreadClass != "same") {
          if(this.pepperList[i].spread == data[it].spread)
            this.pepperList[i].spreadClass = this.same;
          else if(data[it].spread > this.pepperList[i].spread)
            this.pepperList[i].spreadClass = "up";
          else if(data[it].spread < this.pepperList[i].spread)
            this.pepperList[i].spreadClass = "down";
      
          this.pepperList[i].spread = data[it].ask - data[it].bid;
        }
        i++;
      }
      this.same = "same";
    });
  }

}

class PepperDataSource extends DataSource<Currency> {
  private _dataStream = new ReplaySubject<Currency[]>();

  constructor(initialData: Currency[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Currency[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Currency[]) {
    this._dataStream.next(data);
  }
}