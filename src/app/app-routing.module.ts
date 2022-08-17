import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './features/heroes/hero-page/hero-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroPageComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
