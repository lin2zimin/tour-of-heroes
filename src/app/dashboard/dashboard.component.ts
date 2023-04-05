import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'src/type/hero';
HeroService
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  constructor(private HeroService: HeroService) {
  }
  heroes: Hero[] = []
  selectedHero?: Hero
  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {

    this.HeroService.getHeros().subscribe(
      heroes => this.heroes = heroes
    )
    // this.HeroService.getHeros().subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }
  ngOnInit() {
    this.getHeroes();
  }
}
