import { PokemonListItem } from './pokemon-list-item/pokemon-list-item.model'

export interface PokemonList {
  count: number,
  next: string,
  previous: string,
  results: PokemonListItem[]
}