import { TestBed } from '@angular/core/testing';

import { CustomErrorHandler } from './custom-error-handler.service';

describe('ErrorHandlerService', () => {
    let service: CustomErrorHandler;

  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [CustomErrorHandler]
      });
      service = TestBed.inject(CustomErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
