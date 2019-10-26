import { TestBed } from '@angular/core/testing';

import { SearchIntegrationService } from './search.integration.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchIntegrationService = TestBed.get(SearchIntegrationService);
    expect(service).toBeTruthy();
  });
});
