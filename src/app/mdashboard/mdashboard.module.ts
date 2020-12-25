import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdashboardRoutingModule } from './mdashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { ShareModule } from '../share/share.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [
    CommonModule,
    MdashboardRoutingModule,
    ShareModule,
    MatTabsModule,
    // MatCardModule
  ]
})
export class MdashboardModule { }
