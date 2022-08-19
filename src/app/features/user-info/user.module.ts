import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserHeroListComponent } from './user-page/user-hero-list/user-hero-list.component';
import { UserBattleHistoryComponent } from './user-page/user-battle-history/user-battle-history.component';
import { UserHeroPowerupsComponent } from './user-page/user-hero-powerups/user-hero-powerups.component';


@NgModule({
  declarations: [
    UserPageComponent,
    UserHeroListComponent,
    UserBattleHistoryComponent,
    UserHeroPowerupsComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTabsModule
    ]
})
export class UserModule { }