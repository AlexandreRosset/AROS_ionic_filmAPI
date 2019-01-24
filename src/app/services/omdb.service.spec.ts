import { TestBed } from '@angular/core/testing';

import { OMDBService } from './omdb.service';

describe('OMDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OMDBService = TestBed.get(OMDBService);
    expect(service).toBeTruthy();
  });
});
