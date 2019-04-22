import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetPair } from './asset-pair.model';
import { Response } from 'selenium-webdriver/http';


@Injectable()
export class AssetPairsService implements OnDestroy {
  private _assetList: BehaviorSubject<AssetPair[]>;
  private dataStore: AssetPair[];

  selectionChange = new Subject<AssetPair[]>();

  constructor(private httpClient: HttpClient) {
    this.dataStore = [];
    this._assetList = <BehaviorSubject<AssetPair[]>>new BehaviorSubject([]);
    this.loadAll();
  }

  get aseetList() {
    return this._assetList.asObservable();
  }
  loadAll() {
    this.httpClient.get('/api/binancepairs', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe((data: AssetPair[]) => {
        this.dataStore = data;
        this._assetList.next(Object.assign([], this.dataStore));
      })
      //.pipe(map(
      //  (response: any[]) => {
      //    const assetList = [];
      //    for (let item of response) {
      //      assetList.push(new AssetPair(item.Id, item.BaseName, item.QuoteName, item.IsSelected));
      //    }
      //    this.assetList = assetList;
      //    return this.assetList;
      //  }))

  }

  load(id: number) {
    this.httpClient.get('api/getpair/' + id, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe((data: AssetPair) => {
        this.dataStore.forEach((item, index) => {
          if (item.Id === data.Id) {
            this.dataStore[index] = data;
          }
        })
        this._assetList.next(Object.assign([], this.dataStore));
      });
  }

  onChange(item: AssetPair) {
    let itemIndex = this.dataStore.findIndex((x) => x === item);
    this.dataStore[itemIndex].IsSelected = !this.dataStore[itemIndex].IsSelected;
    //this.assetList.forEach((element, index, arr) => {
    //  (element.baseName === item && element.isSelected == false) ? arr[index].isSelected = true
    //    : arr[index].isSelected = false
    //});

    this.selectionChange.next(this.dataStore.slice());
  }

  getItem(id: number) {
    return this.httpClient.get('api/getpair/' + id, {
      observe: 'body',
      responseType: 'json'
    }).subscribe((item) => { return item;})
    //.pipe(map(
    //  (response: any) => {
    //    return new AssetPair(response.id, response.baseName, response.quoteName, response.isSelected);
    //}));

  }

  getVolume(symbol: string, interval: string) {
    return this.httpClient.get('api/volume/' + symbol + '/' + interval);
  }

  getMA(symbol: string, interval: string, length: string) {
    return this.httpClient.get('api/ma/' + symbol + '/' + interval + '/' + length);
  }

  getRSI(symbol: string, interval: string) {
    return this.httpClient.get('api/rsi/' + symbol + '/' + interval);
  }

  getEMA(symbol: string, interval: string, length: string) {
    return this.httpClient.get('api/ema/' + symbol + '/' + interval + '/' + length);
  }

  saveItems() {
    const header = new HttpHeaders().set('content-type', 'application/json');
    const req = new HttpRequest('PUT', 'api/saveitems', this.dataStore, { headers: header, reportProgress: true });
    return this.httpClient.request(req);
  }

  ngOnDestroy() {
    console.log('destroyed bitch.')
  }
}
