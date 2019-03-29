import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { AssetPair } from '../asset-pair.model';
import { AssetPairsService } from '../asset-pairs.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
  asset: AssetPair;
  constructor(private assetPairsService: AssetPairsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //let id = +this.route.snapshot.paramMap.get('id');

    ////  this.route.params
    ////    .subscribe(
    ////      (params: Params) => {
    ////        this.id = +params['id'];
    ////      }
    ////    );

    //this.assetPairsService.getItem(id)
    //  .pipe(map((x: AssetPair) => {
    //    return new AssetPair(x.id, x.BaseName, x.QuoteName, x.isSelected)
    //  }))
    //  .subscribe((response) => {
    //    this.asset = response;
    //    console.log(this.asset.baseName)
    //  })
  }

}
