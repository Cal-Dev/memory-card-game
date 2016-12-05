import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { CardPosition } from './enums/card-position.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cards: Card[];
  size: number;
  constructor() { }

  ngOnInit() {
    this.size = 18;

    this.cards = new Array<Card>();
    let first = false;
    for(let i = 1; i <= this.size; i++) {
      let card = new Card(i, first, "http://placehold.it/250x300");
      this.cards.push(card);
    }
  }

}
