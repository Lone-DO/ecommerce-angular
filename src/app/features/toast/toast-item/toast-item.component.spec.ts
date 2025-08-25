import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ToastItemComponent } from './toast-item.component';

describe('ToastItemComponent', () => {
  let component: ToastItemComponent;
  let fixture: ComponentFixture<ToastItemComponent>;
  let store: MockStore;
  const initialState = { cart: { items: [] } };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastItemComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
