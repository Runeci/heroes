import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../helpers/hero.interface';
import { UserService } from '../../../user-info/services/user.service';

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
        private userService: UserService,
    ) {
    }

    public ngOnInit(): void {
        const heroIDs = this.userService.ownedHeroes.map(hero => hero.id);
        if (heroIDs.includes(this.hero.id)) {
            this.isOwned = true;
        }
        this.powerstats = Object.entries(this.hero.powerstats);
    }

    public onSelect(): void {
        this.userService.addToOwnedHeroes(this.hero);
        this.isOwned = true;
    }

    public onRemove(): void {
        const heroIDs = this.userService.ownedHeroes.map(hero => hero.id);
        this.userService.removeFromOwnedHeroes(heroIDs.indexOf(this.hero.id));
        this.isOwned = false;
    }
}
