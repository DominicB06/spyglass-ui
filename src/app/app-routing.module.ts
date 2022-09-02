import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalCardComponent } from './goal-card/goal-card.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path: '', redirectTo: '/home', pathMatch: 'full'
},{
  path:'goals', component: GoalCardComponent,
},{
  path:'home', component: HomePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
