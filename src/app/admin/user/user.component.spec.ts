import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs';
import { UserComponent } from './user.component';
import { LoginService } from '../../login/login.service';
import { UserService } from './user.service';
import { FilterPipe } from '../../shared/filter.pipe';

describe(`User Component`, () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, FilterPipe ],
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
        UserService
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
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

  it('test addUser Method', () => {
    comp.user = 'Mustafa';  
    spyOn(comp.userService, "addUser").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next({status: '1'});
        }
        observer.complete();
      }));
      
    comp.addUser();
    comp.userService.addUser({}).subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

  it('test addUser Method validation', () => {
    comp.user = '';  
    comp.addUser();
    expect(typeof comp.errorMsg).toBe('string');
  });

  it('test deleteUser Method', () => {
    spyOn(comp.userService, "deleteUser").and.returnValue(Observable.create(observer => {
        if (this.error) {
          observer.error(new Error('error'))
        } else {
          observer.next({status: '1'});
        }
        observer.complete();
      }));
      
    comp.deleteUser('1');
    comp.userService.deleteUser({}).subscribe((data) => {
        expect(typeof data).toBe('object');
    });
  });

});
