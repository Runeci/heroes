import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../validators/password-strength.validator';
import { EmailStrengthValidator } from '../validators/email-strength.validator';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
    ) {
    }

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, EmailStrengthValidator]],
            password: ['', [Validators.required, PasswordStrengthValidator]],
        });
    }

    public onSubmit(): void {
        this.authService.login(this.loginForm.value);
        this.loginForm.reset();
    }
}
