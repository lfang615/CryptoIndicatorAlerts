import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetPair } from './asset-pair.model';
import { Response } from 'selenium-webdriver/http';
import { Settings } from './settings.model';

@Injectable()
export class SettingsService {

  private _settingsList: BehaviorSubject<Settings[]>;
  private dataStore: Settings[];

  constructor(private httpClient: HttpClient) {
    this.dataStore = [];
    this._settingsList = <BehaviorSubject<Settings[]>>new BehaviorSubject([]);
  }

  loadAllSettings() {
    this.httpClient.get('api/settings', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe((data: Settings[]) => {
        this.dataStore = data;
        this._settingsList.next(Object.assign([], this.dataStore));
      })
  }

  saveAssetSetting(id: number) {
    this.httpClient.put('api/createsetting/' + id, {

    })
      .subscribe((data: Settings) => {

      })
  }

  //updateAssetSetting(id: number) {
  //  this.httpClient.post('api/updatesetting/', {

  //  })
  //  .subscribe()
  //}
}
