import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Http } from '@angular/http';
import { Response } from '@angular/http';


@Injectable()
export class ProductService {

  constructor(private _http: Http, private _albumUrl: ../assets/album.json) { }

  getAlbum(id:number, _albumUrl) {
    this._http.get()
  }
}
