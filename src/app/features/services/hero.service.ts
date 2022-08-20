import { Injectable } from '@angular/core';
import { Hero } from '../heroes/helpers/hero.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    public ownedHeroes: Hero[] = [
        {
            'id': '94',
            'name': 'Black Abbott',
            'powerstats': {
                'intelligence': 'null',
                'strength': 'null',
                'speed': 'null',
                'durability': 'null',
                'power': 'null',
                'combat': 'null'
            },
            'biography': {
                'full-name': '',
                'alter-egos': 'No alter egos found.',
                'aliases': [
                    'Lord Abbott'
                ],
                'place-of-birth': '-',
                'first-appearance': 'Marvel Team Up #146 (1984)',
                'publisher': 'Marvel Comics',
                'alignment': 'bad'
            },
            'appearance': {
                'gender': 'Male',
                'race': 'null',
                'height': [
                    '-',
                    '0 cm'
                ],
                'weight': [
                    '- lb',
                    '0 kg'
                ],
                'eye-color': 'Red',
                'hair-color': 'Black'
            },
            'work': {
                'occupation': 'Cult leader, former monk',
                'base': '-'
            },
            'connections': {
                'group-affiliation': '-',
                'relatives': '-'
            },
            'image': {
                'url': 'https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1049.jpg'
            }
        },
        {
            'id': '95',
            'name': 'Black Adam',
            'powerstats': {
                'intelligence': '88',
                'strength': '100',
                'speed': '92',
                'durability': '100',
                'power': '100',
                'combat': '56'
            },
            'biography': {
                'full-name': 'Teth-Adam',
                'alter-egos': 'No alter egos found.',
                'aliases': [
                    'Hassan Bari',
                    'Theo Adam',
                    'Mighty Adam',
                    'Khem-Adam'
                ],
                'place-of-birth': 'Kahndaq, Egypt',
                'first-appearance': 'Marvel Family #1 (December, 1945)',
                'publisher': 'DC Comics',
                'alignment': 'bad'
            },
            'appearance': {
                'gender': 'Male',
                'race': 'null',
                'height': [
                    '6\'3',
                    '191 cm'
                ],
                'weight': [
                    '250 lb',
                    '113 kg'
                ],
                'eye-color': 'Brown',
                'hair-color': 'Black'
            },
            'work': {
                'occupation': '-',
                'base': 'Mobile; Formerly Kahndaq; Fawcett City; New York City'
            },
            'connections': {
                'group-affiliation': 'None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America',
                'relatives': 'Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo\'s sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)'
            },
            'image': {
                'url': 'https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/643.jpg'
            }
        },

    ];

    public selectedHero: Hero = this.ownedHeroes[this.ownedHeroes.length - 1] || null;

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
