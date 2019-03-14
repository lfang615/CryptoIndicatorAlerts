import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AssetPairsComponent } from './asset-pairs/asset-pairs.component';
import { AssetListComponent } from './asset-pairs/asset-list/asset-list.component';
import { HeaderComponent } from './core/header/header.component';
import { AssetPairsService } from './asset-pairs/asset-pairs.service';
import { FilterPipe } from './asset-pairs/filter.pipe';
import { AssetDetailComponent } from './asset-pairs/asset-detail/asset-detail.component';
import { AssetEditComponent } from './asset-pairs/asset-edit/asset-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/assetpairs', pathMatch: 'full'},
  {
    path: 'assetpairs', component: AssetPairsComponent, children: [
      { path: 'detail/:id', component: AssetDetailComponent }
    ]
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    AssetPairsComponent,
    AssetListComponent,
    HeaderComponent,
    FilterPipe,
    AssetDetailComponent,
    AssetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AssetPairsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
