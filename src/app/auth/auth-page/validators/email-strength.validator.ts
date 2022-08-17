import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    let errorMessage: string = '';
    let domainIsMatched = false;
    let countOfDotsIsMatched = false;
    let countOfEndCharIsMatched = false;

    const maxDotCount = 3;
    const maxCharBeforeDomainAmount = 5;

    if (!value) {
        return null;
    }

    if (!value.includes('@')) {
        errorMessage = '-email should contain @'
    }

    if (value.includes('@')) {
        const [firstEmailPart, secondEmailPart] = [value.split('@')[0], value.split('@')[1]];
        const countOfDots = (firstEmailPart.match(/\./g) || []).length;
        // const countOfEndChar = secondEmailPart.length;
        const domainName = secondEmailPart.split('.')[1];
        const charBeforeDomainAmount = secondEmailPart.split('.')[0].length;

        if (countOfDots > maxDotCount) {
            errorMessage = '- no more 3 dots allowed before @ \n';
        } else  {
            countOfDotsIsMatched = true;
        }

        if (charBeforeDomainAmount > maxCharBeforeDomainAmount) {
            errorMessage = '- no more 5 characters allowed after @ \n';
        } else {
            countOfEndCharIsMatched = true;
        }

        if (domainName !== 'com' &&
            domainName !== 'us' &&
            domainName !== 'net' &&
            domainName !== 'co' &&
            domainName !== 'org'
        ) {
            errorMessage = '- domain should be com/us/co/org/net \n';
        } else {
            domainIsMatched = true;
        }
    }

    const emailValid = value.includes('@')
        && countOfDotsIsMatched
        && countOfEndCharIsMatched
        && domainIsMatched;

    return !emailValid ? { emailStrength: `${ errorMessage }` } : null;
}
