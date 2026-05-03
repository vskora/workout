import { TestBed } from '@angular/core/testing';

import { ProgramStore } from './program-store';

describe('ProgramStore', () => {
  let service: ProgramStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
