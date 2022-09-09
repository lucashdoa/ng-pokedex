import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { PokemonList } from './pokemon-list.model';
import { PokemonListItem } from './pokemon-list-item/pokemon-list-item.model';

@Injectable({providedIn: 'root'})
export class PokemonListService {
  constructor(
    private http: HttpClient
  ){}

  fetchPokemonList(){
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300');
  }
}