import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { MatCardModule } from '@angular/material/card';
import { BattleHeroCardComponent } from './battle-page/battle-hero-card/battle-hero-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BattleResultsModalComponent } from './battle-results-modal/battle-results-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BattlePageComponent,
    BattleHeroCardComponent,
    BattleResultsModalComponent
  ],
    imports: [
        CommonModule,
        BattleRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ]
})
export class BattleModule { }
