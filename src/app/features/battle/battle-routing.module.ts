import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattlePageComponent } from './battle-page/battle-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: BattlePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BattleRoutingModule {
}
