import { Component, OnInit } from '@angular/core';
import { AssetPairsService } from '../asset-pairs.service';
import { AssetPair } from '../asset-pair.model';
import { Subscription } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-assets',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  private subscription: Subscription;
  assetList: AssetPair[];
  socket: any;
  personalList = [];
  itemPosition: number;
  selectedAsset: AssetPair;
  viewSelected = false;
  btnSelected = false;
  showSave = false;
  //columnDefs = [
  //  {headerName: '', field: '', width: 75, hide: true}
  //]

  constructor(private assetPairsService: AssetPairsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //this.assetPairsService
    //  .getAssetPairs()
    //  .subscribe((response) =>
    //  {
    //    this.assetList = response;
    //  });

    this.assetPairsService.aseetList.subscribe((items) => {
      this.assetList = items;
    });
    this.assetPairsService.loadAll();
    this.assetPairsService.selectionChange
      .subscribe((response) => {
        this.assetList = response;
        this.showSave = true;
      });

    this.route.queryParams
      .subscribe((queryParams: Params) => {
        this.viewSelected = queryParams["view"] === "1" ? true : false;
      })
    //this.socket = webSocket('wss://stream.binance.com:9443/ws/bnbbtc@kline_1m');
    //this.socket = webSocket('wss://stream.binance.com:9443/ws/bnbbtc@kline_1m');
    //this.socket.subscribe(
    //  msg => console.log(msg), // Called whenever there is a message from the server.
    //  err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    //  () => console.log('complete') // Called when connection is closed (for whatever reason).
    //);
  }

  addToTrack(asset) {
    if (this.isSelected(asset) === undefined) {
      this.personalList.push(asset);
      this.assetPairsService.onChange(asset);
    } 
    
  }

  removeFromTracking(asset) {
    this.personalList.forEach((value, index, arr) => {

    });
  }

  isSelected(item: AssetPair) {
    let isSelected = this.assetList.find((x) => { return x.BaseName === item.BaseName && x.IsSelected == true });
    return isSelected;
  }

  onRemove() {
    this.personalList.splice(this.itemPosition, 1);
    this.assetPairsService.onChange(this.selectedAsset);
  }

  setIndex(index) {
    this.itemPosition = index;
  }

  onSelectPersonal(asset) {
    this.selectedAsset = asset;
  }

  navigateToDetail(item: AssetPair) {
    this.router.navigate(['detail', item.Id], {relativeTo: this.route});
  }

  onSave() {
    this.assetPairsService.saveItems()
      .subscribe(
      (response) => {
        console.log(response);
      });
  }

}
