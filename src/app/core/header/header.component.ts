import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../auth/interfaces/user.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public isLoggedIn$: BehaviorSubject<boolean>;
    public username$: Subject<User['username']>;


    constructor(private authService: AuthService) {
    }

    public ngOnInit(): void {
        this.isLoggedIn$ = this.authService.isLoggedIn$;
        this.username$ = this.authService.currUserName$;
    }

    public logout(): void {
        this.authService.logout();
    }
}
