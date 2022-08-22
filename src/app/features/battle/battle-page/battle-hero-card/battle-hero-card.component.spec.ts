import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleHeroCardComponent } from './battle-hero-card.component';

describe('BettleHeroCardComponent', () => {
  let component: BattleHeroCardComponent;
  let fixture: ComponentFixture<BattleHeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleHeroCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
