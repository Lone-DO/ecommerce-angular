import { TestBed } from '@angular/core/testing';

import { CartGuard } from './cart.guard';

describe('AuthGuard', () => {
  let guard: CartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
