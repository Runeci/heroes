import { Injectable } from '@angular/core';
import { Hero } from '../heroes/helpers/hero.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    public ownedHeroes: Hero[] = [];

    public addToOwnedHeroes(hero: Hero): void {
        this.ownedHeroes.push(hero);
    }

    public removeFromOwnedHeroes(index: number): void {
        this.ownedHeroes.splice(index, 1);
    }
}
