import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { WeatherComponent } from '../weather/weather.component';

import { BasicDirective } from '../basic-directive'; // just added


@NgModule({
  declarations: [WeatherComponent, BasicDirective],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    WeatherComponent, BasicDirective
  ]
})
export class ShareModule { }
