import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [{
  path:'',
  component: OrderListComponent,
},
{
  path:'product',
  component: OrderListComponent,
  children: [
    {
        path: 'ramin',
        component: OrderpageComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
