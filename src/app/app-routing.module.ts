import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    {
        path: 'heroes',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
        canActivate: [AuthGuard],
    },
    { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
