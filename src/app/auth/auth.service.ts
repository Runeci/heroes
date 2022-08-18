import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/helpers/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { Router } from '@angular/router';
import { LocalSKey } from '../shared/helpers/ls.enum';
import { CurrentUser, User } from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public users: User[] = this.ls.getFromLocalStorage(LocalSKey.Users) || [];
    public isLoggedIn$ = new BehaviorSubject(false);
    public currUserName$ = new BehaviorSubject<User['username']>(this.currentUser?.userInfo.username);

    constructor(
        private ls: LocalStorageService,
        private dialog: MatDialog,
        private router: Router,
    ) {
        this.isLoggedIn$.next(!!this.currentUser);
    }

    public get currentUser(): CurrentUser {
        return this.ls.getFromLocalStorage(LocalSKey.CurrentUser);
    }

    public login(userInfo: User): void {
        const emailsArr = this.users.map(user => user.email);

        if (!this.users.length || !emailsArr.includes(userInfo.email)) {
            this.router.navigate(['/signup']);
            this.openDialog('You have to sign up first');
            return;
        }

        const filteredArr = this.users
            .filter(user => user.email === userInfo.email
                && user.password === userInfo.password);

        if (filteredArr.length) {
            this.router.navigate(['/heroes']);
            this.setCurrentUser(filteredArr[0]);

            this.isLoggedIn$.next(true);
            return;
        }

        this.openDialog('Wrong password or email');
    }

    public signup(user: User): void {
        let userEmails: User['email'][] = [];
        let userNames: User['username'][] = [];

        this.users.forEach(u => {
            userEmails.push(u.email);
            userNames.push(u.username);
        });

        if (userEmails.includes(user.email)) {
            this.openDialog('A user with this email already exists');
            return;
        }

        if (userNames.includes(user.username)) {
            this.openDialog('A user with this username already exists');
            return;
        }

        this.router.navigate(['/heroes']);

        this.users.push(user);
        this.ls.saveToLocalStorage(LocalSKey.Users, this.users);
        this.setCurrentUser(user);

        this.isLoggedIn$.next(true);
    }

    public logout(): void {
        this.router.navigate(['/login']);

        this.ls.removeFromLocalStorage(LocalSKey.CurrentUser);
        this.isLoggedIn$.next(false);
    }

    private setCurrentUser(user: User): void {
        const currentUser: CurrentUser = {
            token: {
                value: AuthService.generateToken(),
                time: Date.now(),
            },
            userInfo: user,
        };
        this.currUserName$.next(user.username);
        this.ls.saveToLocalStorage(LocalSKey.CurrentUser, currentUser);
    }

    private openDialog(message: string): void {
        this.dialog.open(AuthModalComponent, {
            width: '350px',
            data: message,
        });
    }

    private static generateToken(): string {
        return Math.random().toString(36).slice(2);
    }
}
