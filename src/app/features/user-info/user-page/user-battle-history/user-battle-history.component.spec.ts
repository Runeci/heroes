import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattleHistoryComponent } from './user-battle-history.component';

describe('UserBattleHistoryComponent', () => {
  let component: UserBattleHistoryComponent;
  let fixture: ComponentFixture<UserBattleHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBattleHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBattleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
