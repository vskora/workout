import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { programPlayerLeaveGuard } from './program-player-leave-guard';

describe('programPlayerLeaveGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => programPlayerLeaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
