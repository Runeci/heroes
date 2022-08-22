import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../heroes/helpers/hero.interface';
import { UserService } from '../../services/user.service';

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
        private userService: UserService,
    ) {
    }

    public ngOnInit(): void {
        this.ownedHeroes = this.userService.ownedHeroes;
        this.selectedHero = this.userService.selectedHero;
    }

    public selectHero(id: Hero['id']) {
        this.userService.selectHeroAsChamp(id);
        this.selectedHero = this.userService.selectedHero;
    }

}
