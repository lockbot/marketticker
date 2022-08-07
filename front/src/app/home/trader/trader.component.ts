import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { TraderApiClientService } from 'src/app/services/trader-api-client.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss'],
  providers: [ApiClientService, TraderApiClientService]
})
export class TraderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
