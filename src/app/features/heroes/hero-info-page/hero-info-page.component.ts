import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../helpers/hero.interface';
import { HeroesApiService } from '../services/heroes-api.service';

@Component({
    selector: 'app-hero-info-page',
    templateUrl: './hero-info-page.component.html',
    styleUrls: ['./hero-info-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInfoPageComponent implements OnInit {
    public hero$: Observable<Hero>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private heroesApiService: HeroesApiService,
        ) {
    }

    public ngOnInit(): void {
        const heroId = +this.activatedRoute.snapshot.params['id'];
        this.hero$ = this.heroesApiService.getHeroById(heroId);
    }

}
