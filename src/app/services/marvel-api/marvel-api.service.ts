import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MarvelApiService {
  public url: string;
  private apikey: string;

  constructor(private _http:Http) {
    this.apikey = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6";
  }

  getComics() {
    return this._http.get(this.apikey)
        .map(res => res.json());
}
}
