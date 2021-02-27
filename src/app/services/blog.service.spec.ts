import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';

describe('ErrorHandlerService', () => {
    let service: BlogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BlogService]
        });
        service = TestBed.inject(BlogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
