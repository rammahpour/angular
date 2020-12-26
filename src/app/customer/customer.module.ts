import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/effect/customer.effects';



@NgModule({
  declarations: [CustomerAddComponent, CustomerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    // EffectsModule.forFeature([CustomerEffects])
  ],
  exports: [
    CustomerAddComponent, CustomerViewComponent

      ]
})
export class CustomerModule { }
