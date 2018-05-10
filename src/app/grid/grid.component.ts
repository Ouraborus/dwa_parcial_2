import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [MarvelApiService]

})
export class GridComponent implements OnInit {

  public comics:any;

  constructor(
    private _marvelApiService: MarvelApiService,

  ) { }

  ngOnInit() {
    this.comics = this._marvelApiService.getComics().subscribe(
      result => {
        console.log(result);
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

}
