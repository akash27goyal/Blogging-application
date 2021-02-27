import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }
    public isAuthenticated(): boolean {
        const token = sessionStorage.getItem('isValidUser');
        // Check whether the token is expired and return
        // true or false

        if (token == "true")  return true;
        else return false;
    }
}