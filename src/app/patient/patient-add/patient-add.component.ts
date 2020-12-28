import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Patient } from 'src/app/models/patient';
import { addPatient } from '../store/action/patient.actions';
import { PatientState } from '../store/reducer/patient.reducer';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  constructor(private store: Store<PatientState>) {


   }

  ngOnInit(): void {
  }
  addPatient(patientName: string): void {

    const patient = new Patient();
    patient.name = patientName;
    this.store.dispatch(addPatient(patient));
  }

}
