import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../validators/password-strength.validator';
import { EmailStrengthValidator } from '../validators/email-strength.validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    errors = {
        minLength: 'l'
    }
    constructor(private fb: FormBuilder) {
    }

    public ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, EmailStrengthValidator]],
            password: ['', [Validators.required, PasswordStrengthValidator]],
        });
    }
}
