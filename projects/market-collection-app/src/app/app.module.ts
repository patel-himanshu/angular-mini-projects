import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectableService } from './shared/collectable.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
