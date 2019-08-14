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

  activeOrders: boolean = true;
  stopOrders: boolean = false;
  filledOrders: boolean = false;
  allOrders: boolean = false;
  balance: string;
  model = new OrderExecution();
  error: string = null;
  status: number = null;
  orderSide: string = null;
  orderType = {
    buy: 1,
    sell: 2,
    stopBuy: 3,
    stopSell: 4
  }
  columnDefs = [
    { headerName: 'Id', field: 'id', hide: true },
    { headerName: 'Symbol', field: 'symbol', width: 75 },
    { headerName: 'Side', field: 'side', width: 75 },
    { headerName: 'Quantity', field: 'orderQty', width: 100, editable: true },
    { headerName: 'Price', field: 'price', width: 100, editable: true },
    { headerName: 'Stop Px', field: 'stopPx', width: 100, editable: true },
    { headerName: 'Order Type', field: 'ordType', width: 150 },
    { headerName: 'Status', field: 'ordStatus', width: 75 },
    { headerName: 'Transact Time', field: 'timeIn', width: 150 }
  ];

  columnDefs2 = [
    { headerName: 'Symbol', field: 'currency', width: 75 },
    { headerName: 'Quantity', field: 'openingQty', width: 100 },
    { headerName: 'Avg Price', field: 'avgCostPrice', width: 100 },
    { headerName: 'Liquidation Price', field: 'bankruptPrice', width: 100 },
    { headerName: 'Break Even', field: 'breakEvenPrice', width: 100 },
    { headerName: 'Unrealised PnL', field: 'unrealisedPnL', width: 200 }
  ];
  rowData2: any[];
  gridApi2: any;
  rowSelection = 'single';
  orderHistory: OrderExecution[];
  rowData: OrderExecution[];
  private gridApi: any;
  private gridColumnApi: any;
  selectedRow: any;

  constructor(private bitmexService: BitmexService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.bitmexService.getBalance()
      .subscribe((data) => { console.log(data); });
    this.bitmexService.getPositions();

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.bitmexService.loadOrders()
      .subscribe((items) => {
        this.orderHistory = items;
        this.rowData = this.orderHistory.filter((order) => { return order.ordStatus == 'New' })
      });

  }

  onGridReady2(params) {
    this.gridApi2 = params.api;
    this.bitmexService.getPositions()
      .subscribe((x: any[]) => {
        this.rowData2 = x;
      })
  }

  onCellValueChanged(params) {
    if (params.oldValue != params.newValue && params.data.ordStatus == 'New') {
      this.bitmexService.ammendOrder(this.rowData.filter((order) => { return order.id == params.data.id; })[0])
        .subscribe((message) => {
          this.setStatusMessage(message);
        });
    }
  }

  onCancelOrder() {
    this.bitmexService.cancelOrder(this.selectedRow['id'])
      .subscribe((message: any) => {
        if (message.status == 200) {
          this.status = 200;
          this.error = 'Order was successfully canceled';
        } else {
          this.status = 400;
          this.error = 'Order failed to cancel.';
        }
      });
  }

  updateGrid(orderId, message) {
    this.orderHistory.forEach((order) => {
      if (orderId == order.id) {

      }
    })
  }

  onSelectionChanged() {
    this.selectedRow = this.gridApi.getSelectedRows();
    console.log(this.selectedRow[0]);
  }

  setStatusMessage(message) {
    if (message.status == 200) {
      this.status = 200;
      if (message.body.stopPx == null) {
        this.error = message.body.side + ' order ammended to ' + message.body.price;
      } else if (message.body.stopPx !== null) {
        this.error = message.body.side + ' Stop ammended to ' + message.body.stopPx;
      } else {
        this.status = 400;
        this.error = 'Order submission failed.';
      }
    }

  }

  orderClick(side: string) {
    this.model.side = side;
  }

  onSubmit() {
    //  this.bitmexService.createOrder(this.model);
    console.log(this.model);
  }

  clearFormValues() {
    this.model.price = null;
    this.model.stopPx = null;
  }

  closeAlert() {
    this.error = null;
  }

  showActiveOrders(filter: string) {
    this.selectedRow = null;
    this.rowData = this.orderHistory.filter((order) => { return order.ordStatus == 'New' })
    this.filterGrid(filter);
  }

  showAllOrders(filter: string) {
    this.selectedRow = null;
    this.rowData = this.orderHistory;
    this.filterGrid(filter);
  }

  showFilledOrders(filter: string) {
    this.selectedRow = null;
    this.rowData = this.orderHistory.filter((order) => { return order.ordStatus == 'Filled' && order.execInst == null });
    this.filterGrid(filter);
  }

  showStopOrders(filter: string) {
    this.selectedRow = null;
    this.rowData = this.orderHistory.filter((order) => { return order.ordStatus == 'New' && order.stopPx !== null });
    this.filterGrid(filter);
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

  filterGrid(filter: string) {
    switch (filter) {
      case 'active':
        this.activeOrders = true;
        this.stopOrders = false;
        this.filledOrders = false;
        this.allOrders = false;
        break;
      case 'stop':
        this.activeOrders = false;
        this.stopOrders = true;
        this.filledOrders = false;
        this.allOrders = false;
        break;
      case 'filled':
        this.activeOrders = false;
        this.stopOrders = false;
        this.filledOrders = true;
        this.allOrders = false;
        break;
      case 'all':
        this.activeOrders = false;
        this.stopOrders = false;
        this.filledOrders = false;
        this.allOrders = true;
        break;
    }
  }


}


