import { NgModule } from '@angular/core';
import { ButtonModule, GrowlModule, InputTextModule, DropdownModule, CalendarModule, PanelModule, SidebarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    ButtonModule,
    GrowlModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PanelModule,
    SidebarModule
  ],
  exports: [
    ButtonModule,
    GrowlModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PanelModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
