import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailStrengthValidator } from '../validators/email-strength.validator';
import { PasswordStrengthValidator } from '../validators/password-strength.validator';
import { UsernameStrengthValidator } from '../validators/username-strength.validator';
import { AuthService } from '../../auth.service';
import { PasswordMatchValidator } from '../validators/password-match';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        },  { validators: PasswordMatchValidator });
    }

    public onSubmit(): void {
        this.authService.signup(this.signupForm.value);
        this.signupForm.reset();
    }

}
