import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeng.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TaskComponent } from './task/task.component';
import { WorkOrderComponent } from './workorder/workorder.component';
import { VendorComponent } from './vendor/vendor.component';
import { StatisticComponent } from './statistic/statistic.component';


const routes: Routes = [
  { path: '', component: DashBoardComponent, pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
  { path: 'workorder', component: WorkOrderComponent },
  { path: 'vendor', component: VendorComponent }
];

@NgModule({
  declarations: [
    NavMenuComponent,
    DashBoardComponent,
    TaskComponent,
    WorkOrderComponent,
    VendorComponent,
    StatisticComponent
  ],
  imports: [
    PrimeNgModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule,
      PrimeNgModule,
      NavMenuComponent,
      DashBoardComponent,
      TaskComponent,
      WorkOrderComponent,
      CommonModule,
      VendorComponent,
      StatisticComponent
    ]
})

export class AppRoutingModule { }
