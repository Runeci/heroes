import { Injectable } from '@angular/core';
import { Hero } from '../../heroes/helpers/hero.interface';
import { Powerstat } from '../helpers/powerstat.interface';
import { USER_POWERSTATS } from '../helpers/user.powerstats.mock';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public ownedHeroes: Hero[] = [];
    public selectedHero: Hero = this.ownedHeroes[this.ownedHeroes.length - 1] || null;
    public userPowerstats: Powerstat[] = USER_POWERSTATS;
    public userResentSearches: string[] = [];

    public addToOwnedHeroes(hero: Hero): void {
        this.ownedHeroes.push(hero);
        this.markLastHeroAsSelected();
    }

    public removeFromOwnedHeroes(index: number): void {
        this.ownedHeroes.splice(index, 1);
        this.markLastHeroAsSelected();
    }

    public markLastHeroAsSelected(): void {
        this.selectedHero = this.ownedHeroes[this.ownedHeroes.length - 1];
    }

    public selectHeroAsChamp(id: Hero['id']): void {
        if (id === this.selectedHero.id) {
            return;
        }
        const heroesIDs = this.ownedHeroes.map(hero => hero.id);
        const index = heroesIDs.indexOf(id);
        const selectedHero = this.ownedHeroes.splice(index, 1);
        this.ownedHeroes.push(selectedHero[0]);
        this.markLastHeroAsSelected();
    }

    public checkIfHeroIsOwned(heroId: Hero['id']): boolean {
        const heroIDs = this.ownedHeroes.map(hero => hero.id);
        return heroIDs.includes(heroId);
    }
}
