import { AbstractControl, ValidationErrors } from '@angular/forms';

export function UsernameStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    const regex = /^[A-Za-z\- _]+$/;
    const wordsAmount = 2;
    const maxLength = 8;
    let regexIsMatched = false;
    let amountOfWordsMatched = false;
    let lengthMatched = false;
    let errorMessage: string = '';

    if (!value) {
        return null;
    }

    regex.test(value) ? regexIsMatched = true : errorMessage = '-username should contain only letters';
    value.length >= maxLength ? lengthMatched = true : errorMessage = '-username should be at least 8 characters';

    if (value.trim().split('_').length === wordsAmount ||
        value.trim().split('-').length === wordsAmount ||
        value.trim().split(' ').length === wordsAmount ) {
        amountOfWordsMatched = true;
    } else {
        errorMessage = '-username should contain two words';
    }

    return  regexIsMatched && amountOfWordsMatched && lengthMatched ? null :  { usernameStrength: `${ errorMessage }` };
}
