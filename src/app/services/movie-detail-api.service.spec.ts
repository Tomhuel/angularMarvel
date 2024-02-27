import { TestBed } from '@angular/core/testing';

import { MovieDetailAPIService } from './movie-detail-api.service';

describe('MovieDetailAPIService', () => {
  let service: MovieDetailAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
