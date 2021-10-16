import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables: Collectable[] = [
        {description: 'Dennis Ivy', tags: ['Django', 'YouTube']},
        {description: 'Django for Beginners, by William S. Vincent', tags: ['Django', 'Book']},
        {description: 'Django for APIs, by William S. Vincent', tags: ['Django', 'Book']},
        {description: 'Django for Professionals, by William S. Vincent', tags: ['Django', 'Book']},
    ];

    private collection: Collectable[] = [];
    
    getCollectable() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }

    addToCollection(item: Collectable) {
        if (this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}