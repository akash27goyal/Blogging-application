import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Constants } from '../../constants/constants';
import { AlertService } from '../../services/alert.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [AlertService],
        imports: [
            RouterTestingModule.withRoutes([])
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should navigate to home after successful login', () => {
        const navigateSpy = spyOn(router, 'navigate');
        component.user.userName = Constants.USER_NAME;
        component.user.password = Constants.PASSWORD;
        component.login();
        expect(navigateSpy).toHaveBeenCalledWith(['/home']);
    });

    it('should show alert after wrong credentials', () => {
        const alertSpy = spyOn(window, 'alert');
        component.user.userName = "abc";
        component.user.password = "test";
        component.login();
        expect(alertSpy).toHaveBeenCalledWith('Please enter valid username/password');
    });
});
