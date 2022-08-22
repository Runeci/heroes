import { Injectable } from '@angular/core';
import { Hero } from '../heroes/helpers/hero.interface';
import { Powerstat } from '../heroes/helpers/powerstat.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public ownedHeroes: Hero[] = [];
    public selectedHero: Hero = this.ownedHeroes[this.ownedHeroes.length - 1] || null;
    public userPowerstat: Powerstat[] = [
        {
            powerstat: 'durability',
            item: 'Capitan America Shield',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://m.media-amazon.com/images/I/71vntClRfjL._AC_SX679_.jpg',
        },
        {
            powerstat: 'power',
            item: 'MjoInir',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://images.fragstore.com/images/detailed/144/HSB62.jpeg',
        },
        {
            powerstat: 'combat',
            item: 'Ironman nano armor',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://ae04.alicdn.com/kf/Hb915d6b6627f4f9284f5b00ae0aabad6r/SHF-MK50-Marvel-Avengers-Infinity-War.jpg',
        },
        {
            powerstat: 'intelligence',
            item: 'Dr. Strange\'s cloak',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://cdn.shopify.com/s/files/1/1860/4593/products/Adult-Dr-Strange-Cloak-of-Levitation-Doctor-Strange-Red-Robe-Cape-Marvel-Comics-Cosplay-WickyDeez-1_grande.jpg?v=1602828389',
        },
        {
            powerstat: 'strength',
            item: 'Green lantern\'s ring',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://www.superherorings.com/image/catalog/green-lantern-ring-silver.jpg',
        },
        {
            powerstat: 'speed',
            item: 'Flash boots',
            value: 10,
            usesLeft: 5,
            imgUrl: 'https://www.takerlama.com/u_file/2104/products/22/d621db742e.jpg',
        },
    ]

    public addToOwnedHeroes(hero: Hero): void {
        this.ownedHeroes.push(hero);
        this.markHeroAsSelected();
    }

    public removeFromOwnedHeroes(index: number): void {
        this.ownedHeroes.splice(index, 1);
        this.markHeroAsSelected();
    }

    public markHeroAsSelected(): void {
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
        this.markHeroAsSelected();
    }
}
