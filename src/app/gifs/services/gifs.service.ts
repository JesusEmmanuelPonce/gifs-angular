import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "up13g27x6MrhDfLTPB33PxcPzrlZ2oL6";
  private _historial: string[] = [];
  public gifs:any[] = [];

  constructor(private http: HttpClient) {

  }

  get historial () {
    return [...this._historial];
  }

  buscarGifs(query: string = "") {

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }

    this.http.get("https://api.giphy.com/v1/gifs/search?api_key=up13g27x6MrhDfLTPB33PxcPzrlZ2oL6&q=one punch&limit=10")
      .subscribe( ( res:any ) => {
        console.log(res.data)
        this.gifs = res.data
      } );
  }

}
