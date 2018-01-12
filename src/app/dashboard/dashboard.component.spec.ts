import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { LoginService } from '../login/login.service';
import { DashboardService } from './dashboard.service';
import { FilterPipe } from '../shared/filter.pipe';

describe(`Dashboard Component`, () => {
  let comp: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ DashboardComponent, FilterPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        LoginService,
        DashboardService
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

  it('test getLocations Method', () => {
    spyOn(comp.loginService, "getLocations").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.getLocations();
    comp.loginService.getLocations().subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

  it('test getUserInfo Method', () => {
    spyOn(comp.dashboardService, "getUserInfo").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.getUserInfo();
    comp.dashboardService.getUserInfo('ioio').subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

  it('test getUserLocations Method', () => {
    spyOn(comp.dashboardService, "getUserLocations").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.getUserLocations();
    comp.dashboardService.getUserLocations('ioio').subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

  it('test removeLoginLocation Method', () => {
    spyOn(comp.dashboardService, "removeLoginLocation").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.removeLoginLocation('ioio');
    comp.dashboardService.removeLoginLocation('ioio').subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

});
