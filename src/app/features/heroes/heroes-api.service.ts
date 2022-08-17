import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HERO_DATA_API_URL } from './helpers/hero.consts';

@Injectable({
    providedIn: 'root'
})
export class HeroesApiService {

    constructor(private http: HttpClient) {
    }

    public getHero(): Observable<any> {
        return this.http.get<any>(HERO_DATA_API_URL + '2');
    }
}
