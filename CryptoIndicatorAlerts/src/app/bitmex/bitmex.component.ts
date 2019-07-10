import { Component, OnInit } from '@angular/core';
import { BitmexService } from './bitmex.service';
import { OrderExecution } from './order.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  orderList: OrderExecution[];


  constructor(private bitmexService: BitmexService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.bitmexService.orderList.subscribe((items) => {
      this.orderList = items;
    });

    this.bitmexService.loadOrders();

  }

  changeOrderForm(formView: string) {
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
