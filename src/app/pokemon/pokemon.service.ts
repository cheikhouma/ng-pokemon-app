import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(
    private http: HttpClient) 
    { }

  private log( response: Pokemon[] | Pokemon | undefined) {
    console.log(response);
  }

  private handleError(error:Error, erroValue: any){
    console.error(error);
    return of(erroValue);
  }
  
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, [])
     )
    )
  }
    


  getPokemonById(pokemonId: number) : Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
      tap((response) => this.log(response)), 
      catchError((error) => this.handleError(error, [])
    )
    )
  }

  getPokemonTypeList():string []{
    return [
      "PLante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy"
    ]
  }
}
   