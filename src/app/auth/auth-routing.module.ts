import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { SignupComponent } from './auth-page/signup/signup.component';
import { LoginComponent } from './auth-page/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent,
        children: [
            { path: 'signup', component: SignupComponent },
            { path: 'login', component: LoginComponent },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
