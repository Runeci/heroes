import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../services/heroes-api.service';
import { BehaviorSubject, map, Observable, switchMap} from 'rxjs';
import { Hero } from '../helpers/hero.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hero-select',
    templateUrl: './hero-select.component.html',
    styleUrls: ['./hero-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSelectComponent implements OnInit {
    public heroes$: Observable<Hero[]>;
    public loadingData$: BehaviorSubject<boolean>;

    constructor(
        private heroApiService: HeroesApiService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit(): void {
        this.heroes$ = this.activatedRoute.queryParams.pipe(
            map( params => params['search']),
            switchMap( search => this.heroApiService.searchHeroes(search)),
        )
    }

}
