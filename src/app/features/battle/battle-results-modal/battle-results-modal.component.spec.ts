import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleResultsModalComponent } from './battle-results-modal.component';

describe('BattleResultsModalComponent', () => {
  let component: BattleResultsModalComponent;
  let fixture: ComponentFixture<BattleResultsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleResultsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleResultsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
