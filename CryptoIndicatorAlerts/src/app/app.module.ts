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
import { WebsocketService } from './asset-pairs/websocket.service';
import { FilterPipe } from './asset-pairs/filter.pipe';
import { SelectedFilterPipe } from './asset-pairs/selected-filter.pipe';
import { AssetDetailComponent } from './asset-pairs/asset-detail/asset-detail.component';
import { AssetEditComponent } from './asset-pairs/asset-edit/asset-edit.component';
import { BitmexComponent } from './bitmex/bitmex.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/assetpairs', pathMatch: 'full' },
  { path: 'assetpairs/view', component: AssetPairsComponent },
  { path: 'detail/:id', component: AssetDetailComponent },
  { path: 'edit/:id', component: AssetEditComponent },
  { path: 'assetpairs', component: AssetPairsComponent },
  { path: 'bitmex', component: BitmexComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    AssetPairsComponent,
    AssetListComponent,
    HeaderComponent,
    FilterPipe,
    SelectedFilterPipe,
    AssetDetailComponent,
    AssetEditComponent,
    BitmexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AssetPairsService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
