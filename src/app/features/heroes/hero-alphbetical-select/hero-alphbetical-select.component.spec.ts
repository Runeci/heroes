import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlphbeticalSelectComponent } from './hero-alphbetical-select.component';

describe('HeroAlphbeticalSelectComponent', () => {
  let component: HeroAlphbeticalSelectComponent;
  let fixture: ComponentFixture<HeroAlphbeticalSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAlphbeticalSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAlphbeticalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
