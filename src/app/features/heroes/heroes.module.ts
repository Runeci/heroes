import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroSearchComponent } from './hero-select-page/hero-search/hero-search.component';
import { HeroSelectPageComponent } from './hero-select-page/hero-select-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeroAlphabeticalSelectComponent } from './hero-select-page/hero-alphbetical-select/hero-alphabetical-select.component';
import { HeroSelectCardComponent } from './hero-select-page/hero-select-card/hero-select-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
        HeroSearchComponent,
        HeroSelectPageComponent,
        HeroAlphabeticalSelectComponent,
        HeroSelectCardComponent,
        HeroInfoPageComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HeroesRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        ReactiveFormsModule,
        FormsModule,
        MatGridListModule,
        MatChipsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
    ]
})
export class HeroesModule {
}
