import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: {name:string, url: string}[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
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
    this.http.get<{count: number, next: string, previous: any, results: {name:string, url: string}[]}>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151').subscribe(response => {
      this.pokemonList = response.results
    })
  }

}
