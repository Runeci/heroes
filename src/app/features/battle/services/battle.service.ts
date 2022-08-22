import { Injectable } from '@angular/core';
import { Hero } from '../../heroes/helpers/hero.interface';
import { HeroesApiService } from '../../heroes/services/heroes-api.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BattleResultsModalComponent } from '../battle-results-modal/battle-results-modal.component';
import { BattleInfo } from '../helpers/battle-info.interface';

@Injectable({
    providedIn: 'root'
})
export class BattleService {
    public battleHistory: BattleInfo[] = [];

    constructor(
        private heroesApiService: HeroesApiService,
        private dialog: MatDialog,
    ) {
    }

    public get randomOpponent(): Observable<Hero> {
        const minHeroId = 0;
        const maxHeroId = 732;
        const randomId = Math.floor(Math.random() * (maxHeroId - minHeroId + 1) + minHeroId);
        return this.heroesApiService.getHeroById(randomId);
    }

    public chooseWinner(userHero: Hero, opponentHero: Hero, powerups: number = 0): void {
        const getSum = (powerStats: Hero['powerstats']) => {
            return Object.values(powerStats)
                .reduce( (prev, curr) => {
                    if (curr === 'null') {
                        curr = '0';
                    }
                    return prev + parseInt(curr, 10);
                }, 0)
        }

        const heroScore = getSum(userHero.powerstats) + powerups;
        const opponentScore = getSum(opponentHero.powerstats);
        let resultMessage: string;
        let battleResult: number;

        if (heroScore > opponentScore) {
            resultMessage = 'Your champion wins!';
            battleResult = 1;
        } else if (heroScore < opponentScore) {
            resultMessage = 'Opponent champion wins!'
            battleResult = 0;
        } else {
            resultMessage = 'Draw!'
            battleResult = 0;
        }

        const battleInfo: BattleInfo = {
            position: this.battleHistory.length + 1,
            opponentHeroName: opponentHero.name,
            userHeroName: userHero.name,
            date: new Date(),
            result: battleResult,
        }
        this.openResulDialog(resultMessage);
        this.saveToBattleHistory(battleInfo);
    }

    private saveToBattleHistory(battleInfo: BattleInfo): void {
        this.battleHistory.push(battleInfo);
        console.log(this.battleHistory);
    }

    private openResulDialog(message: string): void {
      this.dialog.open(BattleResultsModalComponent, {
          data: message,
      })
    }
}
