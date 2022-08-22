import { Hero } from '../../heroes/helpers/hero.interface';

export interface BattleInfo {
    position: number,
    date: Date,
    userHeroName: Hero['name'],
    userId: Hero['id'],
    opponentHeroName: Hero['name'],
    opponentId: Hero['id'],
    result: number,
}
