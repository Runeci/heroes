import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-hero-powerups',
    templateUrl: './user-hero-powerups.component.html',
    styleUrls: ['./user-hero-powerups.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeroPowerupsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
