import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSelectCardComponent } from './hero-select-card.component';

describe('HeroSelectCardComponent', () => {
  let component: HeroSelectCardComponent;
  let fixture: ComponentFixture<HeroSelectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSelectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSelectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
