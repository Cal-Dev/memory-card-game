import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    CardComponent
  ]
})
export class MainModule { }
