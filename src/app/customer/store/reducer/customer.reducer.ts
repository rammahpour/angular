import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as CustomerActions from '../action/customer.actions';


export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];

}

export const initialState: CustomerState = {
  customers: []
};


export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.CustomerSucceeded, (state: CustomerState, { customer })  => {
    debugger;
    return ({
      ...state,
      customers: [...state.customers, customer]
    })
  })
);

export function reducer(state: CustomerState | undefined, action: Action): any {
    return customerReducer(state, action);
  }
