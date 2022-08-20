import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { map, Observable, of } from 'rxjs';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserPageComponent implements OnInit {
    public tabLinks = ['list', 'history', 'powerups'];
    public selectedTab$: Observable<number> = of(0);

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
        this.selectedTab$ = this.activatedRoute.queryParams.pipe(
            map(params => this.tabLinks.indexOf(params['tab'])),
        );
    }

    public navigate(address: string): void {
        this.router.navigate([], {
                queryParams: { tab: address }
            }
        );
    }

    public tabChanged(tabChangeEvent: MatTabChangeEvent) {
        this.navigate(this.tabLinks[tabChangeEvent.index]);
    }
}
