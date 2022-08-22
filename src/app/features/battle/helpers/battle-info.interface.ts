import { Hero } from '../../heroes/helpers/hero.interface';

export interface BattleInfo {
    position: number,
    date: Date,
    userHeroName: Hero['name'],
    opponentHeroName: Hero['name'],
    result: number,
}
