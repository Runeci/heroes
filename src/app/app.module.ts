import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './features/heroes/heroes.module';
import { CoreModule } from './core/core.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModule } from './features/user-info/user.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule,
        UserModule,
        CoreModule,
        MatFormFieldModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
