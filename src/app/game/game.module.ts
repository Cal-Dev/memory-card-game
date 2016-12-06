import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    GameComponent
  ],
  declarations: [
    GameComponent,
    CardComponent
  ],
  providers: [
    HttpModule
  ]
})
export class GameModule { }
