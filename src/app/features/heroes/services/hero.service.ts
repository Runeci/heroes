import { Injectable } from '@angular/core';
import { Hero } from '../helpers/hero.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    public ownedHeroes: Hero[] = [
        {"id":"60","name":"Bane","powerstats":{"intelligence":"88","strength":"38","speed":"23","durability":"56","power":"51","combat":"95"},"biography":{"full-name":"","alter-egos":"No alter egos found.","aliases":["-"],"place-of-birth":"-","first-appearance":"Batman: Vengeance of Bane #1 (January, 1993)","publisher":"DC Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"Human","height":["6'8","203 cm"],"weight":["400 lb","180 kg"],"eye-color":"-","hair-color":"-"},"work":{"occupation":"-","base":"Santa Prisca"},"connections":{"group-affiliation":"Suicide Squad, The Secret Society of Super Villains","relatives":"King Snake (father)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/637.jpg"}}
    ];

    public addToOwnedHeroes(hero: Hero): void {
        this.ownedHeroes.push(hero);
    }

    public removeFromOwnedHeroes(index: number): void {
        this.ownedHeroes.splice(index, 1);
    }
}
