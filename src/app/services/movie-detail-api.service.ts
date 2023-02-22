import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { moviesMock } from '../mock/movie.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailAPIService {

  constructor(private http: HttpClient) { }

  getDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>("https://www.qando.es/docs/films.php?id="+id);
  }
}
