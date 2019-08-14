import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetPairsService } from 'src/app/asset-pairs/asset-pairs.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  saveVisible = false;
  isLoggedIn = false;
  constructor(private assetPairsService: AssetPairsService,
              private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authservice.isLoggedIn.subscribe(authenticated => {
      this.isLoggedIn = authenticated;
    })
    this.assetPairsService.selectionChange
      .subscribe((response) => {
        this.saveVisible = true;
      })
  }

  onSave() {
    this.assetPairsService.saveItems()
      .subscribe(
        (response) => {
          console.log(response);
        });
  }

  onLogout() {
    this.authservice.logout();
    this.isLoggedIn = false;
    this.router.navigate(['auth']);
  }



}
