import { Injectable } from '@angular/core';
import * as Rj from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiClientService {

  constructor() { }

  private subject?: Rj.Subject<MessageEvent>;

  public connect(url: any): Rj.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected To: ' + url);
    }
    return this.subject;
  }

  private create(url: any): Rj.Subject<MessageEvent> {
    let wsc = new WebSocket(url);

    let observable = new Rj.Observable((obs: Rj.Observer<MessageEvent>) => {
      wsc.onmessage = obs.next.bind(obs);
      wsc.onerror = obs.error.bind(obs);
      wsc.onclose = obs.complete.bind(obs);
      return wsc.close.bind(wsc);
    });
    let observer = {
      next: (data: Object) => {
        if (wsc.readyState === WebSocket.OPEN) {
          wsc.send(JSON.stringify(data));
        }
      }
    }
    return Rj.Subject.create(observer, observable);
  }
}
