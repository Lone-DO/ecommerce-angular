import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFallbackComponent } from './cart-fallback.component';

describe('CartFallbackComponent', () => {
  let component: CartFallbackComponent;
  let fixture: ComponentFixture<CartFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
