import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { PokemoInterface } from '../interfaces/pokemons';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _BASE_URL: string = environment.URL_BASE

  constructor(
    private _httpClient: HttpClient,
  ) { }


  getPokemons(): Observable<Array<PokemoInterface>> {

    return this._httpClient.get<Array<any>>(this._BASE_URL).pipe(map((res: any) => {

      let pokemons: Array<PokemoInterface> = []

      for (let pokemon of res.pokemon) {

        let poke: PokemoInterface = {
          id: pokemon.id,
          name: pokemon.name,
          num:pokemon.num,
          img: pokemon.img,
          type: pokemon.type,
          weight: pokemon.weight,
          weaknesses: pokemon.weaknesses,
        }
        pokemons.push(poke)
      }

      return pokemons
    }))
  }
}
