import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

    constructor() { }

    showAlert(message: string) {
        alert(message);
    }
}
