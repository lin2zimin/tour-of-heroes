import { Component } from '@angular/core';
import { Hero } from 'src/type/hero';
import { HeroService } from '../hero.service';
// import { HEROS } from '../mock-heros';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less'],
})
export class HerosComponent {
  constructor(private heroService: HeroService) {}
  hero: Hero = { name: 'WindStorm', id: 1 };
  selectedHero?: Hero;

  heros: Hero[] = [];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe((heroes) => (this.heros = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
