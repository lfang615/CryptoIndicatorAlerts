import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AssetPairsComponent } from './asset-pairs/asset-pairs.component';
import { AssetListComponent } from './asset-pairs/asset-list/asset-list.component';
import { HeaderComponent } from './core/header/header.component';
import { AssetPairsService } from './asset-pairs/asset-pairs.service';
import { WebsocketService } from './asset-pairs/websocket.service';
import { BitmexService } from './bitmex/bitmex.service';
import { FilterPipe } from './asset-pairs/filter.pipe';
import { SelectedFilterPipe } from './asset-pairs/selected-filter.pipe';
import { AssetDetailComponent } from './asset-pairs/asset-detail/asset-detail.component';
import { AssetEditComponent } from './asset-pairs/asset-edit/asset-edit.component';
import { BitmexComponent } from './bitmex/bitmex.component';
import { AlertComponent } from './shared/alert/alert.component';
import { AgGridModule } from 'ag-grid-angular';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/assetpairs', pathMatch: 'full' },
  { path: 'assetpairs/view', component: AssetPairsComponent },
  { path: 'detail/:id', component: AssetDetailComponent },
  { path: 'edit/:id', component: AssetEditComponent },
  { path: 'assetpairs', component: AssetPairsComponent },
  { path: 'bitmex', component: BitmexComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent}
  
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
    BitmexComponent,
    AlertComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents(null),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt');
        }
      }
    })
  ],
  providers: [AssetPairsService, WebsocketService, BitmexService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
