import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { WeatherComponent } from '../weather/weather.component';

import { BasicDirective } from '../basic-directive'; // just added
import { MyshareComponent } from './myshare/myshare.component';
// import { ChildComponent } from '../child/child.component';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WeatherComponent, MyshareComponent, BasicDirective],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    WeatherComponent, BasicDirective, MyshareComponent, MatCardModule, MatButtonModule, MatIconModule, FlexLayoutModule
  ]
})
export class ShareModule { }
