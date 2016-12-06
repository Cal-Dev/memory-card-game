import { Component, OnInit, NgModule } from '@angular/core';
import { Card } from './models/card';
import { CardPosition } from './enums/card-position.enum';
import { Observable, } from "rxjs/Rx";
import { Http, Response } from '@angular/http';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards: Card[];
  size: number;
  icons: string[];
  moves: number;
  colors: string[];
  possibleSizes: number[];
  cardBuffer: Card[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.size = 12;
    this.fillIcons();
    this.fillColors();
    this.fillPossibleSizes();    
  }

  generateClass(): string {
    return `col-lg-${Math.round(12 / (Math.sqrt(this.size)))}`;
  }

  startNewGame() {
    this.moves = 0;
    this.cardBuffer = new Array<Card>();

    this.cards = new Array<Card>();
    let first = true;
    let currentIcon = "";
    let currentColor = "";
    for (let i = 1; i <= this.size; i++) {
      if (first) {
        currentIcon = this.icons[Math.floor(Math.random() * this.icons.length)];
        currentColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      }
      let card = new Card(i, first, currentIcon, currentColor);
      card.pairId = first ? i : i - 1;
      this.cards.push(card);
      first = !first;
    }
    this.shuffle();
  }

  switchPosition(card: Card) {
    if (card && !card.isFound && this.cardBuffer.length !== 2) {
      this.moves++;
      card.position = card.position === CardPosition.Face ? CardPosition.Back : CardPosition.Face;
      this.cardBuffer.push(card);

      if (this.cardBuffer.length === 2) {
        let currentCards = this.cardBuffer;
        this.cardBuffer = new Array<Card>();
        let timer = Observable.timer(800, 50);

        let sub = timer.subscribe(t => {
          if (currentCards) {
            if (this.sameCards(currentCards[0], currentCards[1])) {
              currentCards[0].isFound = true;
              currentCards[1].isFound = true;
            }
            else {
              currentCards[0].position = CardPosition.Back;
              currentCards[1].position = CardPosition.Back;
            }
          }
          currentCards = null;
        });
      }
    }
  }

  isGameCompleted(): boolean {
    return this.cards && this.cards.find(card => !card.isFound) == null;
  }

  sameCards(card1: Card, card2: Card): boolean {
    return card1.pairId === card2.pairId;
  }

  fillIcons() {
    this.getAllIcons().subscribe(res => {
      this.icons = new Array<string>();
      for (let icon of res.json()) {
        this.addIcon(icon);
      }
    });

  }

  fillColors() {
    this.colors = new Array<string>();
    this.getAllColors().subscribe(colors => {
      this.colors = colors.json();
    })
  }

  fillPossibleSizes() {
    this.possibleSizes = new Array<number>();
    this.possibleSizes.push(6);
    this.possibleSizes.push(8);
    this.possibleSizes.push(10);
    this.possibleSizes.push(12);
    this.possibleSizes.push(14);
    this.possibleSizes.push(16);
    this.possibleSizes.push(18);
  }

  addIcon(iconName: string) {
    this.icons.push(`fa ${iconName} fa-6`);
  }

  getAllIcons(): Observable<Response> {
    return this.http.get('assets/icons.json');
  }

  getAllColors(): Observable<Response> {
    return this.http.get('assets/colors.json');
  }

  shuffle() {
    // Fisher-Yates (aka Knuth) Shuffle algorithm
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

}
