import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'ss', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '404', component: NotFoundComponent },

  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},

   { path: 'mdashboard', loadChildren: () => import('./mdashboard/mdashboard.module').then(m => m.MdashboardModule)},

];//loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
