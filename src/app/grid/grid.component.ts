import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api/marvel-api.service'


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
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }
  extractData(data) {
    return data.map(element => {
    const regExp = /[(.\d)]{6}/img;
    const date = element.title.match(regExp)+"";
      return {
        "date": date === "null" ? "Unknown": date,
        "title": element.title.slice(0,element.title.indexOf(date)),
        "thumbnail": element.thumbnail.path + '.' + element.thumbnail.extension
      }
    })
  }

}
