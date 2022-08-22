import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesApiService } from '../../heroes/services/heroes-api.service';
import { BattleService } from '../services/battle.service';
import { Hero } from '../../heroes/helpers/hero.interface';
import { UserService } from '../../user-info/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Powerstat } from '../../user-info/helpers/powerstat.interface';
import { BehaviorSubject, finalize, Subject, takeUntil, timer } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
    selector: 'app-battle-page',
    templateUrl: './battle-page.component.html',
    styleUrls: ['./battle-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattlePageComponent implements OnInit, OnDestroy {
    public opponentHero: Hero;
    public opponentHeroStats: [string, string][];
    public opponentHeroName: Hero['name'];
    public opponentHeroId: Hero['id'];

    public userHero: Hero;
    public userHeroStats: [string, string][];
    public userPowerups: Powerstat[];

    public powerupsForm: FormGroup;

    public fighting$ = new BehaviorSubject(false);
    public loadingOpponent$ = new BehaviorSubject(false);
    private destroy$ = new Subject<boolean>;

    constructor(
        private heroApiService: HeroesApiService,
        private battleService: BattleService,
        private userService: UserService,
    ) {
    }

    public ngOnInit(): void {
        this.chooseOpponent();
        this.userHero = this.userService.selectedHero;
        this.userHeroStats = Object.entries(this.userHero.powerstats);
        this.userPowerups = this.userService.userPowerstats;
        this.createPowerupForm();
    }

    public onCheckboxChange(event: MatCheckboxChange, checkboxId: number): void {
        if (event.source.id === checkboxId.toString()) {
            event.checked = !event.checked;
        }
    }

    public onFight(): void {
        this.fighting$.next(true);
        const battleTimer = timer(500);
        battleTimer.subscribe(() => {
            const powerupsSum = this.managePowerstats();
            this.powerupsForm.reset();
            this.fighting$.next(false);
            this.battleService.chooseWinner(this.userHero, this.opponentHero, powerupsSum);
        })
    }

    public chooseOpponent(): void{
        this.loadingOpponent$.next(true);
        this.battleService.randomOpponent.pipe(
            finalize(() => this.loadingOpponent$.next(false)),
            takeUntil(this.destroy$)
        )
            .subscribe((hero) => {
                this.opponentHero = hero;
                this.opponentHeroStats = Object.entries(hero.powerstats);
                this.opponentHeroName = hero.name;
                this.opponentHeroId = hero.id;
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    private createPowerupForm(): void {
        let group = {};
        this.userPowerups.map(powerup => {
            // @ts-ignore
            group[powerup.item] = new FormControl({ value: '', disabled: !powerup.usesLeft }, []);
        });
        this.powerupsForm = new FormGroup(group);
    }

    private managePowerstats(): number {
        const formObj = this.powerupsForm.value;
        let powerstatsSum = 0;
        for (let key in formObj) {
            if (formObj[key]) {
                this.userService.userPowerstats.forEach(powerstat => {
                    if (powerstat.item === key) {
                        if (powerstat.usesLeft > 0) {
                            powerstat.usesLeft -= 1;
                        }
                        if (powerstat.usesLeft === 0) {
                            this.powerupsForm.controls[powerstat.item].disable();
                        }

                        powerstatsSum += powerstat.value;
                    }
                });
            }
        }
        return powerstatsSum;
    }
}
