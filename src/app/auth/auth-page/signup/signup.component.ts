import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailStrengthValidator } from '../validators/email-strength.validator';
import { PasswordStrengthValidator } from '../validators/password-strength.validator';
import { UsernameStrengthValidator } from '../validators/username-strength.validator';
import { AuthService } from '../../auth.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public signupForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
    ) {
    }

    public ngOnInit(): void {
        this.signupForm = this.fb.group({
            username: ['', [Validators.required, UsernameStrengthValidator]],
            email: ['', [Validators.required, EmailStrengthValidator]],
            password: ['', [Validators.required, PasswordStrengthValidator]],
        });
    }

    public onSubmit(): void {
        this.authService.signup(this.signupForm.value);
        this.signupForm.reset();
    }

}
