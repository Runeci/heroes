import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hero-alphbetical-select',
    templateUrl: './hero-alphabetical-select.component.html',
    styleUrls: ['./hero-alphabetical-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroAlphabeticalSelectComponent {
    public alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'];
    public selectedLetter = 'a';

    constructor(private router: Router) {
    }

    public onLetterSelect(letter: string) {
        this.router.navigate([], {
            queryParams: {search: letter},
            queryParamsHandling: 'merge',
        })
        this.selectedLetter = letter;
    }

}
