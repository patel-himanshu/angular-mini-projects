import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  // providers: [CollectableService]
})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectables = this.collectableService.getCollectable();
  }

  onAddToCollection(item: Collectable) {
    this.collectableService.addToCollection(item);
  }

}
