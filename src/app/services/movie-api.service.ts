import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieAPI {
  public movies: Movie[] = [];
  
  constructor(private http: HttpClient) {

  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://www.qando.es/docs/films.php');
  }
}
