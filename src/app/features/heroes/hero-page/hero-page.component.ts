import { Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../heroes-api.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  constructor(private heroApiService: HeroesApiService) { }

  ngOnInit(): void {
    this.heroApiService.getHero().subscribe(
      (r) => console.log(r)
    )
    console.log('erger');
  }

}
