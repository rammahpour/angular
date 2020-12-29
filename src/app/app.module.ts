import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'


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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerModule } from './customer/customer.module';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './customer/store/effect/customer.effects';
import { LoginComponent } from './login/login.component';
import { PatientModule } from './patient/patient.module';
// import { BasicDirective } from './basic-directive';
// import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    // CustomerViewComponent,
    // CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerModule,
    PatientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatIconModule,
    MatSidenavModule,
    ShareModule,
    QuillModule.forRoot(),
    // FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CustomerEffects]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
