import { TestBed } from '@angular/core/testing';

import { AuthService } from './authentication.service';

describe('ErrorHandlerService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
