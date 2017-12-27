import { Routes } from '@angular/router';
import { HomeComponent} from './home';
import { LoginLocationComponent} from './loginLocation';
import { LocationComponent } from 'app/admin/location';


export const ROUTES: Routes = [
  { path: '',      component: LoginLocationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loginLocation', component: LoginLocationComponent },
  { path: 'location', component: LocationComponent }
];
