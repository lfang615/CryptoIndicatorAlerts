import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderExecution } from './order.model';

@Injectable()
export class BitmexService implements OnDestroy {
  private dataStore: OrderExecution[];
  private _orderList: BehaviorSubject<OrderExecution[]>;

  constructor(private httpClient: HttpClient) {
    this.dataStore = [];
    this._orderList = <BehaviorSubject<OrderExecution[]>>new BehaviorSubject([]);
    this.loadOrders();
  }

  get orderList() {
    return this._orderList.asObservable();
  }

  loadOrders() {
    this.httpClient.get('/api/orders', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe((data: OrderExecution[]) => {
        this.dataStore = data;
      })
  }

  ngOnDestroy() {

  }
}
