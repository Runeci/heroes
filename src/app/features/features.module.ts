import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPageComponent } from './heroes/hero-page/hero-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeroPageComponent
  ],
  exports: [
    HeroPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class FeaturesModule {
}
