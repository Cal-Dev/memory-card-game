import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { MemoryCardGameRoutingModule } from './app.routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GameModule,
    MemoryCardGameRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
