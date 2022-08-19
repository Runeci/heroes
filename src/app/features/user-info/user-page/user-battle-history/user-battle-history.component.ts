import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-battle-history',
    templateUrl: './user-battle-history.component.html',
    styleUrls: ['./user-battle-history.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBattleHistoryComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
