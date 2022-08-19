import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../auth/auth-modal/auth-modal.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private dialog: MatDialog,
    ) {
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const hourInMs = 3600000;
        const token = this.authService.currentUser?.token;

        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        const timeLeft = Date.now() - this.authService.currentUser.token.time;

        if (timeLeft <= hourInMs) {
            return true;
        }
        this.authService.logout();
        this.dialog.open(AuthModalComponent, {
            width: '300px',
            data: 'Your current session has expired. Please login again to continue using this app!'
        });
        return false;
    }

}
