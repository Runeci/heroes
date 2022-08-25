import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email').value;
    const password = control.get('password').value;
    const username = control.get('username').value;

    return findOverlap(password, email) || findOverlap(password, username) ? { passwordMatch: true } : null;
}


function findOverlap(a: string, b: string): string {
    const maxOverlapLength = 3;
    if (b.length <= maxOverlapLength) {
        return "";
    }

    if (a.endsWith(b)) {
        return b;
    }

    if (a.indexOf(b) >= 0) {
        return b;
    }

    return findOverlap(a, b.substring(0, b.length - 1));
}
