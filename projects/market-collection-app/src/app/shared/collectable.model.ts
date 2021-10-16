export class Collectable {
    description: string;
    tags: string[];

    constructor(description: string, tags: string[]) {
        this.description = description;
        this.tags = tags;
    }
}