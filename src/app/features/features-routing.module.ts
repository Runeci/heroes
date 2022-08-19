import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSelectComponent } from './heroes/hero-select/hero-select.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'select' },
    { path: 'select', component: HeroSelectComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
