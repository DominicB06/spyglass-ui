import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';

import { GoalCardComponent } from './goal-card/goal-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
