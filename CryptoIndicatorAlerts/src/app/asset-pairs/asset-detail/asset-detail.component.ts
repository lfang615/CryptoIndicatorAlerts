import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { AssetPair } from '../asset-pair.model';
import { AssetPairsService } from '../asset-pairs.service';
import { WebsocketService } from '../websocket.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit, OnDestroy {
  id: number;
  asset: AssetPair;
  priceBTC: string;
  volAvg1D: string;
  volAvg4H: string;
  volAvg1H: string;
  volAvg15M: string;
  ma1D_1: string;
  ma1D_2: string;
  ma1D_3: string;
  ma4H_1: string;
  ma4H_2: string;
  ma4H_3: string;
  ma1H_1: string;
  ma1H_2: string;
  ma1H_3: string;
  ma15M_1: string;
  ma15M_2: string;
  ma15M_3: string;

  constructor(private route: ActivatedRoute,
              private assetPairsService: AssetPairsService,
              private websocketService: WebsocketService) { }

  ngOnInit() {    
    let id = +this.route.snapshot.paramMap.get('id');

    this.assetPairsService.aseetList.pipe(
      map((items) => { return items.find(item => item.Id === id) }))
      .subscribe((item) => { this.asset = item })

    this.getVolumes();
    this.getMAs();

    this.assetPairsService.load(id);

    //this.assetPairsService.getItem(id)
    //  .pipe(map((x: AssetPair) => {
    //    return new AssetPair(x.id, x.baseName, x.quoteName, x.isSelected)
    //  }))
    //  .subscribe((response) => {
    //    this.asset = response;
    //    console.log(this.asset.baseName)
    //  } 

  }

  getVolumes() {
    this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "1d")
      .subscribe((item: string) => { this.volAvg1D = item; })

    this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "4h")
      .subscribe((item: string) => { this.volAvg4H = item; })

    this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "1h")
      .subscribe((item: string) => { this.volAvg1H = item; })

    this.assetPairsService.getVolume(this.asset.BaseName + this.asset.QuoteName, "15m")
      .subscribe((item: string) => { this.volAvg15M = item; })
  }

  getMAs() {
    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "20")
      .subscribe((item: string) => { this.ma1D_1 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "50")
      .subscribe((item: string) => { this.ma1D_2 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1d", "100")
      .subscribe((item: string) => { this.ma1D_3 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "20")
      .subscribe((item: string) => { this.ma4H_1 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "50")
      .subscribe((item: string) => { this.ma4H_2 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "4h", "100")
      .subscribe((item: string) => { this.ma4H_3 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "20")
      .subscribe((item: string) => { this.ma1H_1 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "50")
      .subscribe((item: string) => { this.ma1H_2 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "1h", "100")
      .subscribe((item: string) => { this.ma1H_3 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "20")
      .subscribe((item: string) => { this.ma15M_1 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "50")
      .subscribe((item: string) => { this.ma15M_2 = item; })

    this.assetPairsService.getMA(this.asset.BaseName + this.asset.QuoteName, "15m", "100")
      .subscribe((item: string) => { this.ma15M_3 = item; })

  }

  connectWsPrice() {
    this.websocketService
      .connectPrice((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }

  connectWsVolume1D() {
    this.websocketService
      .connectVolume1D((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }

  connectWsVolume4H() {
    this.websocketService
      .connectVolume4H((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }

  connectWsVolume1H() {
    this.websocketService
      .connectVolume1H((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }

  connectWsVolume15M() {
    this.websocketService
      .connectVolume15M((String(this.asset.BaseName + this.asset.QuoteName).toLowerCase()))
      .subscribe((response) => {
        this.priceBTC = JSON.parse(response.data)['k']['c'];
      });
  }


  ngOnDestroy() {
    //this.websocketService.close();
  }


}
