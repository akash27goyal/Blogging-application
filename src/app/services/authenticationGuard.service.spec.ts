import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './authenticationGuard.service';

describe('ErrorHandlerService', () => {
    let service: AuthGuardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuardService]
        });
        service = TestBed.inject(AuthGuardService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
