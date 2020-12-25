import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
//Material Section
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import {MatSidenavModule} from'@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {MatTabsModule} from '@angular/material/tabs';

import { MatMenuModule } from '@angular/material/menu';


import { NotFoundComponent } from './not-found/not-found.component';
import { ShareModule } from './share/share.module';
// import { BasicDirective } from './basic-directive';
// import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatIconModule,
    MatSidenavModule,
    ShareModule,
    // FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
