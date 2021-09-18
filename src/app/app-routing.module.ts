import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'ss', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: '404', component: NotFoundComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  { path: 'mdashboard', canActivate: [AuthGuard] , loadChildren: () => import('./mdashboard/mdashboard.module').then(m => m.MdashboardModule)},

];//loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
