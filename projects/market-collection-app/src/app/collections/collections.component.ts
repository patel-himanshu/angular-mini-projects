import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collectedItems: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectedItems = this.collectableService.getCollection();
  }

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
  }
}
