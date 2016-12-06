import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';  
import { IndexComponent } from './index/index.component';  

const routes: Routes = [  
    { path: 'index', component: IndexComponent },
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MemoryCardGameRoutingModule { }
