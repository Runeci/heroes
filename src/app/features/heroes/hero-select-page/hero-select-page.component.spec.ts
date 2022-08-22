import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSelectPageComponent } from './hero-select-page.component';

describe('HeroSelectComponent', () => {
  let component: HeroSelectPageComponent;
  let fixture: ComponentFixture<HeroSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSelectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
