import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './pokemon/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'pokemons', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  //  '**' Pour toutes les pages possibles a part ceux d'en haut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
