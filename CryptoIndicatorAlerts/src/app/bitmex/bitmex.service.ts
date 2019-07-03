import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderExecution } from './order.model';

@Injectable()
export class BitmexService implements OnDestroy {
  private dataStore: OrderExecution[];

  constructor(private httpClient: HttpClient) {

  }

  loadOrders() {
    this.httpClient.get('/api/orders', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe((data: OrderExecution[]) => {

      })
  }

  ngOnDestroy() {

  }
}
