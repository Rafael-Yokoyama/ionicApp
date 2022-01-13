import { Component, OnInit } from '@angular/core';
import { PokemoInterface } from 'src/app/interfaces/pokemons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public pokemons: Array<PokemoInterface> = [];

  constructor(
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons(): void {

      this._apiService.getPokemons().subscribe((res: Array<PokemoInterface>) => {

      })

  }
}

