import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Movie } from './../../model/movie.model';
import { moviesMock } from 'src/app/mock/movie.mock';
import { MovieAPI } from 'src/app/services/movie-api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent {
  movies: Movie[] = [];
  private MovieAPI: MovieAPI;

  constructor(private MoviesAPI: MovieAPI, private router: Router) {
    this.MovieAPI = MoviesAPI;
  }

  /* Funciones del Mock */

  /*
  
  ngOnInit() {
    this.movies = moviesMock;
  }

  */

  /**
   * Funcion que elimina del mock la pelicula especifica
   * @param movie pelicula a eliminar
   * @returns Si no hay peliculas a eliminar, devuelve null
   */
  deleteMockMovie(movie: Movie): void | null {
    if (this.movies.length == 0) {
      return null;
    }

    let newMovies: Movie[] = [];
    this.movies.forEach(movieMock => {
      if (movieMock.id != movie.id) {
        newMovies.push(movieMock);
      }
    });

    this.movies = newMovies;
    this.reMock(newMovies);
  }

  /**
   * Funcion que limpia todo el mock y mete todas las peliculas que se le pasen por parametros  
   * @param movies Array de todas las peliculas a actualizar en el mock
   */
  reMock(movies: Movie[]) {
    moviesMock.splice(0,moviesMock.length);
    for (let i = 0; i < movies.length; i++) {
      moviesMock.push(movies[0]);
    }
  }

  /* Funciones de la API */

  /**
   * Funcion que se ejecuta al iniciar el componente
   */
  ngOnInit() {
    let localData = localStorage.getItem("movies");
    if (localData != null && localData != "null") {
      this.movies = JSON.parse(localData);
    } else {
      this.MovieAPI.getMovies().subscribe((MovieRequest: Movie[]) => this.initMovies(MovieRequest));
    }
  }

  /**
   * Funcion que guarda en localstorage las peliculas 
   * @param movies Array de peliculas
   */
  initMovies(movies: Movie[]) {
    localStorage.setItem("movies", JSON.stringify(movies));
    this.movies = movies;
  }

  /**
   * Funcion que elimina la pelicula en concreto y actualiza el localstorage, además cuando se elimina la pelicula, recarga el componente
   * @param movie Pelicula a eliminar
   */
  deleteMovie(movie: Movie) {
    if (this.movies.length == 0) {
      localStorage.clear();
    } else {
      let newMovies: Movie[] = [];
      this.movies.forEach(movieNew => {
        if (movieNew.id != movie.id) {
          newMovies.push(movieNew)
        }
      });
      localStorage.setItem("movies", JSON.stringify(newMovies));
    }
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() => this.router.navigate(['']));
  }


}
