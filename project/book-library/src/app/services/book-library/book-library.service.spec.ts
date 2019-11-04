import { TestBed } from '@angular/core/testing';

import { BookLibraryService } from './book-library.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookLibraryService = TestBed.get(BookLibraryService);
    expect(service).toBeTruthy();
  });
});
