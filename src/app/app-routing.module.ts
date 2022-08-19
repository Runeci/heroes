import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    {
        path: 'heroes',
        loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user-info/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard],
    },
    { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), },
    { path: '**', redirectTo: 'heroes'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
