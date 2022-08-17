import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth-page/login/login.component';
import { SignupComponent } from './auth-page/signup/signup.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
    exports: [
        FormsModule,
    ]
})
export class AuthModule {
}
