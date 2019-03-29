import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable()
export class WebsocketService {
  private volumeSubject1D: Subject<any>;
  private volumeSubject4H: Subject<any>;
  private volumeSubject1H: Subject<any>;
  private volumeSubject15M: Subject<any>;
  private priceSubject: Subject<any>;

  private wsPrice: any;
  private wsVolume1D: any;
  private wsVolume4H: any;
  private wsVolume1H: any;
  private wsVolume15M: any;

  connectPrice(symbol: string): Subject<MessageEvent> {
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
            console.log('on open WS' + symbol + 'price stream & 24HR Vol');
          }
        }
      };

      this.priceSubject = Subject.create(observer, observable);
      return this.priceSubject;
    }
  }

  connectVolume1D(symbol: string): Subject<MessageEvent> {
    this.wsVolume1D = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1d');

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.wsVolume1D.onopen = () => { console.log('on open Ws' + symbol + '1D vol stream'); }
        this.wsVolume1D.onmessage = obs.next.bind(obs);
        this.wsVolume1D.onerror = obs.error.bind(obs);
        this.wsVolume1D.onclose = obs.complete.bind(obs);
        return this.wsVolume1D.close.bind(this.wsVolume1D);
      });

    let observer = {
      next: (data: Object) => {
        
      }
    }

    this.volumeSubject1D = Subject.create(observer, observable);
    return this.volumeSubject1D;
  }

  connectVolume4H(symbol: string): Subject<MessageEvent> {
    this.wsVolume4H = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_4h');

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.wsVolume4H.onopen = () => { console.log('on open Ws' + symbol + '4H vol stream'); }
        this.wsVolume4H.onmessage = obs.next.bind(obs);
        this.wsVolume4H.onerror = obs.error.bind(obs);
        this.wsVolume4H.onclose = obs.complete.bind(obs);
        return this.wsVolume4H.close.bind(this.wsVolume4H);
      });

    let observer = {
      next: (data: Object) => {
        
      }
    }

    this.volumeSubject4H = Subject.create(observer, observable);
    return this.volumeSubject4H;
  }

  connectVolume1H(symbol: string): Subject<MessageEvent> {
    this.wsVolume1H = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_1h');

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.wsVolume1H.onopen = () => { console.log('on open Ws' + symbol + '1H vol stream'); }
        this.wsVolume1H.onmessage = obs.next.bind(obs);
        this.wsVolume1H.onerror = obs.error.bind(obs);
        this.wsVolume1H.onclose = obs.complete.bind(obs);
        return this.wsVolume1H.close.bind(this.wsVolume1H);
      });

    let observer = {
      next: (data: Object) => {
        
      }
    }

    this.volumeSubject1H = Subject.create(observer, observable);
    return this.volumeSubject1H;
  }

  connectVolume15M(symbol: string): Subject<MessageEvent> {
    this.wsVolume15M = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@kline_15m');

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.wsVolume15M.onopen = () => { console.log('on open Ws' + symbol + '15M vol stream'); }
        this.wsVolume15M.onmessage = obs.next.bind(obs);
        this.wsVolume15M.onerror = obs.error.bind(obs);
        this.wsVolume15M.onclose = obs.complete.bind(obs);
        return this.wsVolume15M.close.bind(this.wsVolume15M);
      });

    let observer = {
      next: (data: Object) => {
        
      }
    }

    this.volumeSubject15M = Subject.create(observer, observable);
    return this.volumeSubject15M;
  }
  close() {
    console.log('on closing WS');
    this.wsPrice.close();
    this.wsVolume1D.close();
    this.wsVolume4H.close();
    this.wsVolume1H.close();
    this.wsVolume15M.close();
    this.priceSubject = null;
    this.volumeSubject1D = null;
    this.volumeSubject4H = null;
    this.volumeSubject1H = null;
    this.volumeSubject15M = null;
  }


}
