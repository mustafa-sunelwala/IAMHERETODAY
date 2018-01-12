import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

describe(`Login Component`, () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ LoginComponent ],
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
        LoginService
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('test getUser Method', () => {
    spyOn(comp.loginService, "getUsers").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.getUsers();
    comp.loginService.getUsers().subscribe((data) => {
        expect(typeof data).toBe('object');
    });
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

  it('test login Method', () => {
      comp.user = 'ioio';
      comp.location = 'klkl';
    spyOn(comp.loginService, "addLocation").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next([]);
        }
        observer.complete();
      }));
      
    comp.login();
    comp.loginService.addLocation({}).subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

  it('test login Method validation', () => {
    comp.user = '';
    comp.location = '';  
    comp.login();
    expect(typeof comp.errorMsg).toBe('string');
  });
});
