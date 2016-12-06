import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';  

const routes: Routes = [  
    { path: 'index', component: GameComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MemoryCardGameRoutingModule { }
