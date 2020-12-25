import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { WeatherComponent } from '../weather/weather.component';

import { BasicDirective } from '../basic-directive'; // just added
import { MyshareComponent } from './myshare/myshare.component';
// import { ChildComponent } from '../child/child.component';


@NgModule({
  declarations: [WeatherComponent, MyshareComponent, BasicDirective],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    WeatherComponent, BasicDirective, MyshareComponent
  ]
})
export class ShareModule { }
