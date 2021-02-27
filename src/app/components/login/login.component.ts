import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/constants';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    isCapsLockOn: boolean;
    hidePasswordText = true;
    isShowPasswordLinkVisibility: boolean;

    constructor(private router: Router, private alertService: AlertService) { }

    ngOnInit(): void {
    }

    /*
     * this is used to check whether caps lock is on or not
     */ 
    checkCapsLock(event: any) {
        const pressedKeyCode = event.keyCode ? event.keyCode : event.which;
        const shiftKey = event.shiftKey ? event.shiftKey : ((pressedKeyCode === 16) ? true : false);
        if (((pressedKeyCode >= 65 && pressedKeyCode <= 90) && !shiftKey)
            || ((pressedKeyCode >= 97 && pressedKeyCode <= 122) && shiftKey)) {
            this.isCapsLockOn = true;
        } else {
            this.isCapsLockOn = false;
        }
    }

    /*
     * this is used to show the text for Password hide/show
     */ 
    checkHideShowPassword(password:string) {
        if (password.length > 0) {
            this.isShowPasswordLinkVisibility = true;
        } else {
            this.isCapsLockOn = false;
            this.isShowPasswordLinkVisibility = false;
        }
    }
    /*
     *this function is used to login into the application 
     */
    login() {
        if (this.user.userName == Constants.USER_NAME && this.user.password == Constants.PASSWORD) {
            sessionStorage.setItem("userName", Constants.USER_NAME);   // set the username into seesion storage
            sessionStorage.setItem("isValidUser", "true");  // set a flag into session storage to authenticate a user.
            this.router.navigate(['/home']);
        } else {
            this.alertService.showAlert("Please enter valid username/password");
        }
    }
}
