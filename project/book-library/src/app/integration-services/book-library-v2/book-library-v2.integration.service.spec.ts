import { TestBed } from '@angular/core/testing';

import { BookLibraryV2IntegrationService } from './book-library-v2.integration.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookLibraryV2IntegrationService = TestBed.get(BookLibraryV2IntegrationService);
    expect(service).toBeTruthy();
  });
});
