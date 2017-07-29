import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCarouselComponent } from './forecast-carousel.component';

describe('ForecastCarouselComponent', () => {
  let component: ForecastCarouselComponent;
  let fixture: ComponentFixture<ForecastCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
