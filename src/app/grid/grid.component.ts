import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [MarvelApiService]

})
export class GridComponent implements OnInit {

  public comics: any;

  constructor(
    private _marvelApiService: MarvelApiService,

  ) { }

  ngOnInit() {
    this.comics = this._marvelApiService.getComics().subscribe(
      result => {
        this.comics = this.extractData(result.data.results);
        console.log(this.comics);

      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }
  extractData(data) {
    return data.map(element => {
      return {
        "title": element.title, "date": element.dates.filter(
          date => date.type === 'onsaleDate')[0].date,
        "thumbnail": element.thumbnail.path + '.' + element.thumbnail.extension
      }
    })
  }

}
