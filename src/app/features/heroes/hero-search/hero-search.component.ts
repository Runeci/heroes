import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map,  Subject, takeUntil } from 'rxjs';
import { HeroesApiService } from '../../services/heroes-api.service';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSearchComponent implements OnInit, OnDestroy {
    public resentSearches: string[] = [];
    public searchControl = new FormControl('', Validators.pattern('^[a-zA-Z]+$'));
    private destroy$ = new Subject<boolean>;

    constructor(
        private heroesApiService: HeroesApiService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(
            map(queries => queries['search']),
            takeUntil(this.destroy$),
        )
            .subscribe((searchVal) => this.searchControl.setValue(searchVal));
    }

    private setSearchQuery(search: string): void {
        this.router.navigate([],
            {
                relativeTo: this.activatedRoute,
                queryParams: { search: search || null },
                queryParamsHandling: 'merge'
            });
    }

    public onSearch(): void {
        if (this.searchControl.invalid) {
            return;
        }

        this.setSearchQuery(this.searchControl.value);
        this.addToResentSearches(this.searchControl.value);
    }

    public onResentSearch(index: number) {
        this.setSearchQuery(this.resentSearches[index]);
        this.addToResentSearches(this.resentSearches[index]);
    }

    public onClearSearch(): void {
        this.searchControl.reset();
        this.setSearchQuery(this.searchControl.value);
    }

    public addToResentSearches(search: string): void {
        const maxResentSearchesLength = 5;

        if (this.resentSearches.includes(search)) {
            const index = this.resentSearches.indexOf(search);
            this.resentSearches.splice(index, 1);
        }
        if (this.resentSearches.length >= maxResentSearchesLength) {
            this.resentSearches.pop();
        }
        this.resentSearches.unshift(search);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
