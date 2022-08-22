import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../../services/heroes-api.service';
import {
    BehaviorSubject,
    distinctUntilChanged, filter, finalize,
    map,
    Observable,
    switchMap,
} from 'rxjs';
import { Hero } from '../helpers/hero.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hero-select-page',
    templateUrl: './hero-select-page.component.html',
    styleUrls: ['./hero-select-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSelectPageComponent implements OnInit {
    public heroes$: Observable<Hero[]>;
    public loadingData$: BehaviorSubject<boolean>;
    public loading$ = new BehaviorSubject(false);

    constructor(
        private heroApiService: HeroesApiService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.heroes$ = this.activatedRoute.queryParams.pipe(
            map(params => params['search']),
            filter(search => !!search),
            distinctUntilChanged(),
            switchMap(search => {
                this.loading$.next(true);
                return this.heroApiService.searchHeroes(search)
                    .pipe(
                        finalize(() => this.loading$.next(false)),
                    );
            }),
        );
    }
}
