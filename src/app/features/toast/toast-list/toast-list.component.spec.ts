import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ToastListComponent } from './toast-list.component';

describe('ToastListComponent', () => {
  let component: ToastListComponent;
  let fixture: ComponentFixture<ToastListComponent>;

  let store: MockStore;
  const initialState = { cart: { items: [] } };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
