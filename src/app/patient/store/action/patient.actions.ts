import { createAction, props } from '@ngrx/store';
import { Patient} from '../../../models/patient';
export const addPatient = createAction(
  '[Patient] Add Patient',
  (patient: Patient) => ({patient})
);