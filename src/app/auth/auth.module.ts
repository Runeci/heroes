import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth-page/login/login.component';
import { SignupComponent } from './auth-page/signup/signup.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        AuthPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule,
    ],
    exports: [
        LoginComponent,
        SignupComponent,
        AuthPageComponent]
})
export class AuthModule {
}
