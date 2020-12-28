import { Action, createReducer, on } from '@ngrx/store';
import { Patient } from 'src/app/models/patient';
import * as PatientActions from '../action/patient.actions';


export const patientFeatureKey = 'patient';

export interface PatientState {
  patients: Patient[];

}

export const initialState: PatientState = {
  patients: []
};


export const patientReducer = createReducer(
  initialState,
  on(PatientActions.addPatient,
    (state: PatientState, { patient }) =>
    ({
      ...state,
      patients: [...state.patients, patient]
    }))

    );


    export function reducer(state: PatientState | undefined, action: Action): any {

        return patientReducer(state, action);

      }