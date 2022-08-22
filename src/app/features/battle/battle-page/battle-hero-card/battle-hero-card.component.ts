import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '../../../heroes/helpers/hero.interface';

@Component({
    selector: 'app-battle-hero-card',
    templateUrl: './battle-hero-card.component.html',
    styleUrls: ['./battle-hero-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleHeroCardComponent {
    @Input() hero: Hero;
    @Input() heroStats: [string, string][];
}
