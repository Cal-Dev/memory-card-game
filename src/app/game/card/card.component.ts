import { Component, Input } from '@angular/core';
import { Card } from '../models/card';
import { CardPosition } from '../enums/card-position.enum';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;

  constructor() { }  
}
