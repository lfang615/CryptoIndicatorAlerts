import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { AssetPair } from '../asset-pair.model';
import { AssetPairsService } from '../asset-pairs.service';
import { Settings } from '../settings.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
  asset: AssetPair;
  timeFrames: string[] = ['5M', '15M', '1H', '4H', '1D', '1W'];

  constructor(private assetPairsService: AssetPairsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.assetPairsService.aseetList.pipe(
      map((items) => { return items.find(item => item.Id === id) }))
      .subscribe((item) => { this.asset = item })


  }

}
