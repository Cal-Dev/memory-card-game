import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
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
    MainComponent
  ],
  declarations: [
    MainComponent,
    CardComponent
  ],
  providers: [
    HttpModule
  ]
})
export class MainModule { }
