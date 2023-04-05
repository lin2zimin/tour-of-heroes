import { Injectable } from '@angular/core';
import { Hero } from 'src/type/hero';
import { Observable, of } from 'rxjs';
import { HEROS } from './mock-heros';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  heros: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  getHeros(): Observable<Hero[]> {
    const heroes = of(this.heros);
    // this.messageService.add('HeroService : fetched heros');
    return heroes;
  }
  getHerosbyId(id: number): Observable<Hero> {
    const filterHeros = this.heros.filter((hero) => hero.id === id)
    const hero = of(filterHeros[0]);
    // this.messageService.add('HeroService : fetched heros');
    return hero;

  }
}
