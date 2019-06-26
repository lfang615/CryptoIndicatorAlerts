import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitmex',
  templateUrl: './bitmex.component.html',
  styleUrls: ['./bitmex.component.css']
})
export class BitmexComponent implements OnInit {
  mktOrderSelect: boolean = true;
  lmtOrderSelect: boolean = false;
  stopSelect: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  changeOrderForm(formView: string) {
    switch (formView) {
      case "market":
        this.mktOrderSelect = true;
        this.lmtOrderSelect = false;
        this.stopSelect = false;
        break;
      case "limit":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = true;
        this.stopSelect = false;
        break;
      case "stop":
        this.mktOrderSelect = false;
        this.lmtOrderSelect = false;
        this.stopSelect = true;
        break;
    }
  }

}
