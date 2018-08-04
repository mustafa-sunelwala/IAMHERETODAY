import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { LocationComponent } from './admin/location';
import { DashboardComponent } from './dashboard';
import { PaginationComponent } from './pagination/pagination.component.ts';
import { MichaelComponent } from './michael/michael.component.ts';
import { UserComponent } from './admin/user'
import { ParentComponent } from './parentcomponent/parentcomponent.component.ts';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'michaelpagination', component: MichaelComponent },
  { path: 'user', component: UserComponent },
  { path: 'youtubeparentroute', component: MichaelComponent },
];
