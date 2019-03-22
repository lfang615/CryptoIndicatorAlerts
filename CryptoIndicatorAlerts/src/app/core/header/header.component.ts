import { Component, OnInit } from '@angular/core';
import { AssetPairsService } from 'src/app/asset-pairs/asset-pairs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  saveVisible = false;
  constructor(private assetPairsService: AssetPairsService) { }

  ngOnInit() {
    this.assetPairsService.selectionChange
      .subscribe((response) => {
        this.saveVisible = true;
      })
  }

}
