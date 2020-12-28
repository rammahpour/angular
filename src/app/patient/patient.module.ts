import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { patientFeatureKey, reducer } from './store/reducer/patient.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [PatientViewComponent, PatientAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(patientFeatureKey, reducer),
  ],
  exports : [
    PatientViewComponent, PatientAddComponent
  ]
})
export class PatientModule { }
