import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlphabeticalSelectComponent } from './hero-alphabetical-select.component';

describe('HeroAlphbeticalSelectComponent', () => {
  let component: HeroAlphabeticalSelectComponent;
  let fixture: ComponentFixture<HeroAlphabeticalSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAlphabeticalSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAlphabeticalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
