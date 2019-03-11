import { Component, OnInit } from '@angular/core';
import { AssetPairsService } from '../asset-pairs.service';
import { AssetPair } from '../asset-pair.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-assets',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assetList: AssetPair[];
  filteredList: any[];
  personalList = [];
  itemPosition: number;
  selectedAsset: number;

  constructor(private assetPairsService: AssetPairsService) { }

  ngOnInit() {
    this.assetPairsService
      .getAssetPairs()
      .subscribe((response) =>
      {
        this.assetList = response;
        this.filteredList = this.assetList.map((x) => { return x.baseName })
        //for (let item of this.assetList) {
        //  this.filteredList.push(item.baseName);
        //}
      });
  }

  addToTrack(event) {
    this.personalList.push(event.target.innerText);
  }

  onRemove() {
    this.personalList.splice(this.itemPosition, 1);
  }

  setIndex(index) {
    this.itemPosition = index;
  }

  onSelect(index) {
    this.selectedAsset = index;
    this.personalList.push(this.filteredList[index]);
  }

}
