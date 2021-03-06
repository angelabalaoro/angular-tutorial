import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})

export class HeroesComponent implements OnInit {
	hero: Hero = {
	    id: 1,
	    name: 'Windstorm'
	}
  heroes: Hero[];
  //selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /*onSelect(heroObj: Hero): void {
    this.selectedHero = heroObj;
  } */ 

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
