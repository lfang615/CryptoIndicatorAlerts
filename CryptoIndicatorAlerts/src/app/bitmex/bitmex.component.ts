import { Component, OnInit } from '@angular/core';
import { BitmexService } from './bitmex.service';
import { OrderExecution } from './order.model';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bitmex',
  templateUrl: './bitmex.component.html',
  styleUrls: ['./bitmex.component.css']
})
export class BitmexComponent implements OnInit {
  mktOrderSelect: boolean = true;
  lmtOrderSelect: boolean = false;
  stopMktSelect: boolean = false;
  stopLmtSelect: boolean = false;
  profitLmtSelect: boolean = false;
  trailStopSelect: boolean = false;
  model = new OrderExecution();
  //orderList: OrderExecution[];
  columnDefs = [
    {headerName: 'Id', field: 'id', hide: true},
    { headerName: 'Symbol', field: 'symbol', width: 75 },
    { headerName: 'Side', field: 'side', width: 75 },
    { headerName: 'Quantity', field: 'orderQty', width: 100 },
    { headerName: 'Price', field: 'price', width: 100, editable: true, filter: true },
    { headerName: 'Order Type', field: 'ordType', width: 150 },
    {headerName: 'Status', field: 'ordStatus', width: 75},
    { headerName: 'Transact Time', field: 'timeIn', width: 150 }
  ];
  rowData: OrderExecution[];
 
  constructor(private bitmexService: BitmexService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //this.bitmexService.orderList.subscribe((items) => {
    //  this.orderList = items;
    //});

    this.bitmexService.loadOrders()
      .subscribe((items) => {
        this.rowData = items;
      });

  }

  onCellValueChanged(params) {
    if (params.oldValue != params.newValue && params.data.ordStatus == 'open') {

    }
  }

  onSubmit() {
    this.bitmexService.createOrder(this.model);
    console.log(this.model.orderQty);
  }

  clearFormValues() {
    this.model.price = null;
    this.model.stopPx = null;
  }

  changeOrderForm(formView: string) {
    this.clearFormValues();

    switch (formView) {
      case "market":
        this.mktOrderSelect = true;
        this.lmtOrderSelect = false;
        this.stopMktSelect = false;
        this.stopLmtSelect = false;
        this.profitLmtSelect = false;
        this.trailStopSelect = false;
        break;
      case "limit":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = true;
        this.stopMktSelect = false;
        this.stopLmtSelect = false;
        this.profitLmtSelect = false;
        this.trailStopSelect = false;
        break;
      case "stop":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = false;
        this.stopMktSelect = true;
        this.stopLmtSelect = false;
        this.profitLmtSelect = false;
        this.trailStopSelect = false;
        break;
      case "stopLmt":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = false;
        this.stopMktSelect = false;
        this.stopLmtSelect = true;
        this.profitLmtSelect = false;
        this.trailStopSelect = false;
        break;
      case "profitLmt":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = false;
        this.stopMktSelect = false;
        this.stopLmtSelect = false;
        this.profitLmtSelect = true;
        this.trailStopSelect = false;
        break;
      case "trailStop":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = false;
        this.stopMktSelect = false;
        this.stopLmtSelect = false;
        this.profitLmtSelect = false;
        this.trailStopSelect = true;
        break;
    }
  }

  
}


