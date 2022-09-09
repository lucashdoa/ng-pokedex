import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'

import { PokemonList } from './pokemon-list.model';
import { PokemonListItem } from './pokemon-list-item/pokemon-list-item.model';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private pokemonListService: PokemonListService
  ) {
    this.matIconRegistry.addSvgIcon(
      'bug',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bug.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'grass',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/grass.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'poison',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/poison.svg')
    );
   }

  ngOnInit(): void {
    this.pokemonListService.fetchPokemonList().subscribe(response => {
      this.pokemonList = response.results
    })
  }

}
