import { CardPosition } from '../enums/card-position.enum';

export class Card {
    id: number;
    pairId: number;
    position: CardPosition;
    first: boolean;
    name: string;
    frontImage: string;
    backImage: string;
    isFound: boolean;
    color: string;

    constructor(id: number, first: boolean, frontImage: string, color: string) {
        this.id = id;
        this.first = first;
        this.frontImage = frontImage;
        this.backImage = "assets/metalic.jpg";
        this.name = `Card ${this.id}`;
        this.position = CardPosition.Back;
        this.isFound = false;
        this.color = color;
    }
}
