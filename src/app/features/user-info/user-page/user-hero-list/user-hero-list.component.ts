import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-hero-list',
    templateUrl: './user-hero-list.component.html',
    styleUrls: ['./user-hero-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserHeroListComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
