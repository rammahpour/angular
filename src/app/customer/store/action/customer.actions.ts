import { createAction, props } from '@ngrx/store';
import {Customer} from '../../../models/customer';


export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({customer})
);

export const CustomerSucceeded = createAction(
  '[Customer] Customer Succeeded',
   (customer: Customer) => ({customer})
);

//CustomerEntered

export const CustomerEntered = createAction(
  '[Customer] Customer Search',
   (query: string) => ({query})
);

export const CustomerFailed = createAction(
  '[Customer] Customer Succeeded'
);

//CustomerFailed