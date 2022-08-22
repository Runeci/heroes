import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-battle-results-modal',
    templateUrl: './battle-results-modal.component.html',
    styleUrls: ['./battle-results-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleResultsModalComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public resultsMessage: string,
    ) {
    }

    ngOnInit(): void {
    }

}
