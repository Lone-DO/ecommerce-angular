import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CartGuard } from './cart.guard';

describe('CartGuard', () => {
  let guard: CartGuard;
  let store: MockStore;
  const initialState = { cart: { items: [] } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartGuard, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(CartGuard);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
    expect(guard).toBeTruthy();
  });
});
