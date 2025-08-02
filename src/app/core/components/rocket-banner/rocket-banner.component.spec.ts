import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketBannerComponent } from './rocket-banner.component';

describe('RocketBannerComponent', () => {
  let component: RocketBannerComponent;
  let fixture: ComponentFixture<RocketBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
