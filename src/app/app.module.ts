import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { DashboardComponent } from './dashboard';

import { LocationComponent } from 'app/admin/location';
import { LoginComponent } from './login';
import { UserComponent } from './admin/user'

import { HomeService } from './home/home.service';
import { LoginService } from './login/login.service';
import { DashboardService } from './dashboard/dashboard.service';
import { PaginationService } from './pagination/pagination.service';
import { LocationService } from './admin/location/location.service';
import { UserService } from './admin/user/user.service';

import { FilterPipe } from './shared/filter.pipe';

import '../styles/styles.scss';
import '../styles/headings.css';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MichaelComponent } from './michael/michael.component'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { LoaderComponent } from './shared/loader/loader.component';
//import { ParentComponentComponent } from './parent-component/parent-component.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  HomeService,
  LoginService,
  DashboardService,
  LocationService,
  UserService,
  PaginationService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void 
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LocationComponent,
    LoginComponent,
    DashboardComponent,
    FilterPipe,
    UserComponent,
    PaginationComponent,
    MichaelComponent,
    TableComponent,
    TableRowComponent,
    LoaderComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule ,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
