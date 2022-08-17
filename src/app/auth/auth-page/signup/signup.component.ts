import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailStrengthValidator } from '../validators/email-strength.validator';
import { PasswordStrengthValidator } from '../validators/password-strength.validator';
import { UsernameStrengthValidator } from '../validators/username-strength.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public signupForm!: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    public ngOnInit(): void {
        this.signupForm = this.fb.group({
            username: ['', [Validators.required, UsernameStrengthValidator]],
            email: ['', [Validators.required, EmailStrengthValidator]],
            password: ['', [Validators.required, PasswordStrengthValidator]],
        });
    }
}
