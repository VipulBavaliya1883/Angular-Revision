import { Injectable } from '@angular/core';
import { iMovie } from '../Model/movie';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "http://localhost:3000/api/movies"
  constructor(private _http:HttpClient ) { }

  getMovie():Observable<iMovie[]>{
    return this._http.get<iMovie[]>(this.url);
  }

  DeleteMovie(movie:any):Observable<iMovie>{
    return this._http.delete<iMovie>(this.url+"/"+movie.name,{headers:{'Content-Type':'application/json'}})
  }




}
