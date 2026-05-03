import { TestBed } from '@angular/core/testing';

import { ExerciseDetailsStore } from './exercise-details-store';

describe('ExerciseDetailsStore', () => {
  let service: ExerciseDetailsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseDetailsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
