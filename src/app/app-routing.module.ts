import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalCardComponent } from './goal-card/goal-card.component';

const routes: Routes = [{
  path:'goals', component: GoalCardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
