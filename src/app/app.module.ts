import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
//Material Section
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import {MatSidenavModule} from'@angular/material/sidenav';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShareModule } from './share/share.module';
// import { BasicDirective } from './basic-directive';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DashboardComponent,
    // WeatherComponent,
    NotFoundComponent,
    // BasicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ShareModule,
    FlexLayoutModule,
    // BasicDirective

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
