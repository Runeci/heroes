import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Powerstat } from '../../../heroes/helpers/powerstat.interface';

@Component({
    selector: 'app-user-hero-powerups',
    templateUrl: './user-hero-powerups.component.html',
    styleUrls: ['./user-hero-powerups.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeroPowerupsComponent implements OnInit {
    public powerups: Powerstat[];

    constructor(private userService: UserService) {
    }

    public ngOnInit(): void {
        this.powerups = this.userService.userPowerstat;
    }
}
