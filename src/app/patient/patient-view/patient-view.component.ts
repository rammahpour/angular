import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { PatientState } from '../store/reducer/patient.reducer';
import { selectPatients } from '../store/selector/patient.selectors';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {
  patients$: Observable<Customer[]>;
  constructor(private store: Store<PatientState>) {
    this.patients$ = this.store.pipe(select(selectPatients));
   }

  ngOnInit(): void {
  }

}
