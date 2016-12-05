import { CardPosition } from '../enums/card-position.enum';

export class Card {
    id: number;
    position: CardPosition;
    first: boolean;
    name: string;
    frontImage: string;
    backImage: string;

    constructor(id: number, first: boolean, frontImage: string) {
        this.id = id;
        this.first = first;
        this.frontImage = frontImage;
        this.backImage = "assets/card-back.png";
        this.name = `Card ${this.id}`;
        this.position = CardPosition.Back;
    }
}
