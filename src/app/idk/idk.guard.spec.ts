import { TestBed } from '@angular/core/testing';

import { IdkGuard } from './idk.guard';

describe('IdkGuard', () => {
  let guard: IdkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
