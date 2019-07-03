import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

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
