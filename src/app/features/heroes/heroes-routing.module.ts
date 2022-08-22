import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSelectPageComponent } from './hero-select-page/hero-select-page.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'select' },
    { path: 'select', component: HeroSelectPageComponent },
    { path: ':id', component: HeroInfoPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
