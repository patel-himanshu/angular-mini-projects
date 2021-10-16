import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from "./collections/collections.component";
import { MarketComponent } from "./market/market.component";

const routes: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'collection', component: CollectionsComponent },
  { path: 'marketplace', component: MarketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
