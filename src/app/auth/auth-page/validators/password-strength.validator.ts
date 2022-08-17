import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    let errorMessage: string = '';

    if (!value) {
        return null;
    }

    const upperCaseCharacters = /[A-Z]/;
    const lowerCaseCharacters = /[a-z]/;
    const numberCharacters = /\d/;
    const specialCharacters = /[#?!@$%^&*-]/;

    if (value.length < 5) {
        errorMessage = '-password length should be at least 5 characters';
    }
    if (!lowerCaseCharacters.test(value) || !upperCaseCharacters.test(value)) {
        errorMessage = '-password should contain a mixture of both uppercase and lowercase letters';
    }
    if (!numberCharacters.test(value)) {
        errorMessage = '-password should contain  a mixture of letters and numbers';
    }
    if (!specialCharacters.test(value)) {
        errorMessage = '-password should have inclusion of at least one special character, e.g., ! @ # ?';
    }
    return value.length < 5
    || !lowerCaseCharacters.test(value)
    || !upperCaseCharacters.test(value)
    || !numberCharacters.test(value)
    || !specialCharacters.test(value)
        ? {
            passwordStrength: `${errorMessage}`,
        } : null;
}
