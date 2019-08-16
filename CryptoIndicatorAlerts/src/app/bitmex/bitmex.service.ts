import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.httpClient.get('/api/orders', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (response: any[]) => {
          let orderList = [];
          for (let item of response) {
            orderList.push(new OrderExecution(item.orderID, item.symbol, item.side, item.orderQty, item.price, item.stopPx,
              item.ordType, item.ordStatus, item.execInst, new Date(item.transactTime).toLocaleString()));
          }

          return orderList;
        }))
  }

  ammendOrder(order: OrderExecution): Observable<any> {
    return this.httpClient.put('/api/orders', order, { observe: 'response' });
    //.subscribe((data: any) => { console.log(data); return data; })
  }

  createOrder(order: OrderExecution) {
    return this.httpClient.post<OrderExecution>('/api/orders', order);
  }

  getBalance() {
    return this.httpClient.get("/api/wallet", {
      observe: 'body',
      responseType: 'json'
    });
  }

  getPositions() {
    return this.httpClient.get("/api/positions", {
      observe: 'body',
      responseType: 'json'
    });
    
  }

  cancelOrder(orderId: string) {
    let params = new HttpParams().set("orderId", orderId);
    return this.httpClient.put('/api/orders', { params, observe: 'response' });
  }

  ngOnDestroy() {

  }
}
