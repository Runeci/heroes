import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../helpers/hero.interface';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-hero-select-card',
    templateUrl: './hero-select-card.component.html',
    styleUrls: ['./hero-select-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSelectCardComponent implements OnInit {
    @Input() hero: Hero;
    public powerstats: [string, string][] = [];
    public isOwned = false;

    constructor(
        private heroService: HeroService,
    ) {
    }

    public ngOnInit(): void {
        const heroIDs = this.heroService.ownedHeroes.map(hero => hero.id);
        if (heroIDs.includes(this.hero.id)) {
            this.isOwned = true;
        }
        this.powerstats = Object.entries(this.hero.powerstats);
    }

    public onSelect(): void {
        this.heroService.addToOwnedHeroes(this.hero);
        this.isOwned = true;
    }

    public onRemove(): void {
        const heroIDs = this.heroService.ownedHeroes.map(hero => hero.id);
        this.heroService.removeFromOwnedHeroes(heroIDs.indexOf(this.hero.id));
        this.isOwned = false;
    }
}
