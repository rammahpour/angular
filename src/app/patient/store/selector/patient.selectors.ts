import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPatient from '../reducer/patient.reducer';

export const selectCustomerState = createFeatureSelector<fromPatient.PatientState>(
  fromPatient.patientFeatureKey,
);
export const selectPatients = createSelector(
  selectCustomerState,
  (state: fromPatient.PatientState) => state.patients
);