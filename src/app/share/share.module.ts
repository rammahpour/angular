import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { WeatherComponent } from '../weather/weather.component';
import {MatInputModule} from '@angular/material/input';

import { BasicDirective } from '../basic-directive'; // just added
import { MyshareComponent } from './myshare/myshare.component';
// import { ChildComponent } from '../child/child.component';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MycardsComponent } from './mycards/mycards.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [WeatherComponent, MyshareComponent, BasicDirective, MycardsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ShareRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  exports: [
    WeatherComponent, MatInputModule, BasicDirective, MycardsComponent, MyshareComponent, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, FlexLayoutModule, MatSnackBarModule
  ]
})
export class ShareModule { }
