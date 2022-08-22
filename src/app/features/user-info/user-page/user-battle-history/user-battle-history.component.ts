import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BattleService } from '../../../battle/services/battle.service';
import { BattleInfo } from '../../../battle/helpers/battle-info.interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-user-battle-history',
    templateUrl: './user-battle-history.component.html',
    styleUrls: ['./user-battle-history.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBattleHistoryComponent implements OnInit, AfterViewInit {
    @ViewChild(MatSort) sort: MatSort;
    public battleHistory: BattleInfo[];
    public dataSource: MatTableDataSource<BattleInfo>;
    public displayedColumns: string[] = ['position', 'userHeroName', 'opponentHeroName', 'date', 'result'];

    constructor(private battleService: BattleService) {
    }

    public ngOnInit(): void {
        this.battleHistory = this.battleService.battleHistory;
        this.dataSource = new MatTableDataSource(this.battleHistory);
    }


    public ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    Bla(str: string) {
        console.log(str)
    }
}
