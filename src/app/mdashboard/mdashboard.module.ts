import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdashboardRoutingModule } from './mdashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';


@NgModule({
  declarations: [DashboardListComponent],
  imports: [
    CommonModule,
    MdashboardRoutingModule
  ]
})
export class MdashboardModule { }
