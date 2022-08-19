import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroPowerupsComponent } from './user-hero-powerups.component';

describe('UserHeroPowerupsComponent', () => {
  let component: UserHeroPowerupsComponent;
  let fixture: ComponentFixture<UserHeroPowerupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeroPowerupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeroPowerupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
