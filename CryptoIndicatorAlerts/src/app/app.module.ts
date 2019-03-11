import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AssetListComponent } from './asset-pairs/asset-list/asset-list.component';
import { HeaderComponent } from './core/header/header.component';
import { AssetPairsService } from './asset-pairs/asset-pairs.service';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AssetPairsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
