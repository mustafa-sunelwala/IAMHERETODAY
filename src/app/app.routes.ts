import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { LocationComponent } from './admin/location';
import { DashboardComponent } from './dashboard';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'dashboard', component: DashboardComponent }
];
