import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AssetPair } from '../asset-pair.model';
import { AssetPairsService } from '../asset-pairs.service';
import { WebsocketService } from '../websocket.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit, OnDestroy {
  id: number;
  asset: AssetPair;
  priceBTC: any;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private assetPairsService: AssetPairsService,
              private websocketService: WebsocketService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
    );

    this.subscription = this.assetPairsService.getItem(this.id)
      .subscribe((response) => {
        this.asset = response;
        this.connectPriceMessage();
      });

  }

  connectPriceMessage() {
    this.websocketService
      .connectPrice((String(this.asset.baseName + this.asset.quoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }

  ngOnDestroy() {
    this.websocketService.close();
  }

  
}
