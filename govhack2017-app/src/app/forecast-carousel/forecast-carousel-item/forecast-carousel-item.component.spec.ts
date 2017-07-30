import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCarouselItemComponent } from './forecast-carousel-item.component';

describe('ForecastCarouselItemComponent', () => {
  let component: ForecastCarouselItemComponent;
  let fixture: ComponentFixture<ForecastCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
