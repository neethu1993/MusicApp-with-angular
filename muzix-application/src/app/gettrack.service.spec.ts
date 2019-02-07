import { TestBed } from '@angular/core/testing';

import { GettrackService } from './gettrack.service';

describe('GettrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettrackService = TestBed.get(GettrackService);
    expect(service).toBeTruthy();
  });
});
