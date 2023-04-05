import { Component, Input, SimpleChange } from '@angular/core';
import { Hero } from 'src/type/hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
})
export class HeroDetailComponent {
  // @Input('hero') heroFormFather?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  public heroFormFather?: Hero
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHerosbyId(id)
      .subscribe(hero => this.heroFormFather = hero)
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    // console.log(this.heroFormFather)
    this.getHero();
  }
  ngOnChanges({ heroFormFather }: any): void {
    // console.log(heroFormFather.currentValue);
  }
}
