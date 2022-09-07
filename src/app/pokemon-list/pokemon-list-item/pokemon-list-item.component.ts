import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemonName: string = '';
  @Input() pokemonId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
