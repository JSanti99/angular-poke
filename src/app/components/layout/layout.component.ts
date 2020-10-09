import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service'

export interface IPokemon {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public pokemons$;

  
  constructor(private pokeapiService: PokeapiService ) {
    
  }

  ngOnInit(): void {
    this.pokemons$ = this.pokeapiService.getPokemons()
  }

  getImages(i: number): String {
    return `https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`
  }


























}
