import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    standalone: false
})
export class DetailPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router:Router,
    private pokemonService: PokemonService

  ){}
  
  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    } 
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon : Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
