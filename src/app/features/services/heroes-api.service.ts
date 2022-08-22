import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { HERO_DATA_API_URL } from '../heroes/helpers/hero.consts';
import { Hero, HeroSearch } from '../heroes/helpers/hero.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroesApiService {

    constructor(
        private http: HttpClient,
    ) {
    }

    public searchHeroes(search: string): Observable<Hero[]> {
        return this.http.get<HeroSearch>(HERO_DATA_API_URL + 'search/' + search).pipe(
            map(res => res.results),
        );
    }

    public getHeroById(search: number): Observable<Hero> {
        return this.http.get<Hero>(HERO_DATA_API_URL + search.toString());
    }
}
