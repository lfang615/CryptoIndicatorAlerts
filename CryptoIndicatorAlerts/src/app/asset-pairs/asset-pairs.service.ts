import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
import { AssetPair } from './asset-pair.model';
import { Response } from 'selenium-webdriver/http';


@Injectable()
export class AssetPairsService {
  assetList: AssetPair[];
 
  selectionChange = new Subject<AssetPair[]>();

  constructor(private httpClient: HttpClient) {
    
  }

  getAssetPairs() {
    return this.httpClient.get('/api/binancepairs', {
      observe: 'body',
      responseType: 'json'
    })
    .pipe(map(
      (response: any[]) => {
        const assetList = [];
        for (let item of response) {
          assetList.push(new AssetPair(item.Id, item.BaseName, item.QuoteName, item.IsSelected));
        }
        this.assetList = assetList;
        return this.assetList;
      }))     
      
  }

  onChange(item: AssetPair) {
    let itemIndex = this.assetList.findIndex((x) => x === item);
    this.assetList[itemIndex].isSelected = !this.assetList[itemIndex].isSelected;
    //this.assetList.forEach((element, index, arr) => {
    //  (element.baseName === item && element.isSelected == false) ? arr[index].isSelected = true
    //    : arr[index].isSelected = false
    //});

    this.selectionChange.next(this.assetList);
  }

  getItem(id: number) {
    return this.httpClient.get('api/getpair/' + id, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (response: any) => {
          return new AssetPair(response.Id, response.BaseName, response.QuoteName, response.IsSelected);
      }));
    
  }
}
