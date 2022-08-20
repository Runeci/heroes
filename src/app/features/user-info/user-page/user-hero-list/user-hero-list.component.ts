import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../heroes/helpers/hero.interface';
import { HeroService } from '../../../services/hero.service';

@Component({
    selector: 'app-user-hero-list',
    templateUrl: './user-hero-list.component.html',
    styleUrls: ['./user-hero-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserHeroListComponent implements OnInit {
    public ownedHeroes: Hero[];
    public selectedHero: Hero;

    constructor(
        private heroService: HeroService,
    ) {
    }

    public ngOnInit(): void {
        this.ownedHeroes = this.heroService.ownedHeroes;
        this.selectedHero = this.heroService.selectedHero;
    }

    public selectHero(id: Hero['id']) {
        this.heroService.selectHeroAsChamp(id);
        this.selectedHero = this.heroService.selectedHero;
    }

}
