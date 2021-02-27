import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor() { }
    /*
     * this is used to handle errors globally
     */ 
    handleError(error) {
        console.error('An error occurred:', error.message);
        console.error(error);
    }


}
