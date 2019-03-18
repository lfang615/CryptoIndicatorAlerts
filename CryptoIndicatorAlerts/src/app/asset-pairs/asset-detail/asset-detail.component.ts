import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AssetPair } from '../asset-pair.model';
import { AssetPairsService } from '../asset-pairs.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  id: number;
  asset: AssetPair;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private assetPairsService: AssetPairsService) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params["id"];
    //this.asset = this.assetPairsService.getItem(this.id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.assetPairsService.getItem(this.id)
            .subscribe((response) => {
              this.asset = response;
            });
        }
    );

  }

  
}
