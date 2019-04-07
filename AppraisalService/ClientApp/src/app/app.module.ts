import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './primeng.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TaskComponent } from './task/task.component';
import { WorkOrderComponent } from './workorder/workorder.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DashBoardComponent,
    TaskComponent,
    WorkOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    RouterModule.forRoot([
      { path: '', component: DashBoardComponent, pathMatch: 'full' },
      { path: 'task', component: TaskComponent },
      { path: 'workorder', component: WorkOrderComponent },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
