import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: FullLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
