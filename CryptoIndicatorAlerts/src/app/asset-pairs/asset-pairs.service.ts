import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetPair } from './asset-pair.model';
import { Response } from 'selenium-webdriver/http';


@Injectable()
export class AssetPairsService {

  constructor(private httpClient: HttpClient) { }

  getAssetPairs() {
    return this.httpClient.get('/api/binancepairs', {
      observe: 'body',
      responseType: 'json'
    })
    .pipe(map(
      (response: any[]) => {
        const assetList = [];
        for (let item of response) {
          assetList.push(new AssetPair(String(item).split("BTC")[0], 'BTC'));
        }
        return assetList;
      }))     
      
  }
}
