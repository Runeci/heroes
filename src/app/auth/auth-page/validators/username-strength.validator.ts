import { AbstractControl, ValidationErrors } from '@angular/forms';

export function UsernameStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    const regex = /^[A-Za-z\- _]+$/;
    const wordsAmount = 2;
    const maxLength = 8;
    let regexIsMatched = false;
    let amountOfWordsMatched = false;
    let errorMessage: string = '';

    if (!value) {
        return null;
    }

    if (regex.test(value)) {
        regexIsMatched = true;
    } else {
        errorMessage = '-username should contain only letters';
    }

    if (value.trim().split('_').length === wordsAmount ||
        value.trim().split('-').length === wordsAmount ||
        value.trim().split(' ').length === wordsAmount ) {
        amountOfWordsMatched = true;
    } else {
        errorMessage = '-username should contain two words';
    }

    if (value.length < maxLength) {
        errorMessage = '-username should be at least 8 characters';
    }

    return  regexIsMatched && amountOfWordsMatched ? null :  { usernameStrength: `${ errorMessage }` } ;
}
