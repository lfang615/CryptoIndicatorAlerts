import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable()
export class WebsocketService {
  private volumeSubject: Subject<any>;
  private priceSubject: Subject<any>;

  private wsPrice: any;
  private wsVolume: any;

  public connectPrice(symbol: string): Subject<MessageEvent> {
    if (!this.priceSubject) {
      this.wsPrice = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1d');

      let observable = Observable.create(
        (obs: Observer<MessageEvent>) => {
          this.wsPrice.onmessage = obs.next.bind(obs);
          this.wsPrice.onerror = obs.error.bind(obs);
          this.wsPrice.onclose = obs.complete.bind(obs);
          return this.wsPrice.close.bind(this.wsPrice);
        });

      let observer = {
        next: (data: Object) => {
          if (this.wsPrice.readyState == WebSocket.OPEN) {
            console.log('on open WS');
          }
        }
      };

      return Subject.create(observer, observable);
    }
  }

  public close() {
    console.log('on closing WS');
    this.wsPrice.close();
    this.priceSubject = null;
  }

  
}
