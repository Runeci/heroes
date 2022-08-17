import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
    ]
})
export class CoreModule {
}
