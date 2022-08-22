import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../features/user-info/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class BattleGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router,
    ) {
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.userService.selectedHero) {
            this.router.navigate(['/heroes']);
            return false;
        }
        return true;
    }

}
