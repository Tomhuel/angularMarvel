import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieDetailAPIService } from 'src/app/services/movie-detail-api.service';
import { moviesMock } from 'src/app/mock/movie.mock';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  constructor(private movieDetailAPI: MovieDetailAPIService, private router: Router) {
    this.movieDetailAPI = movieDetailAPI;
  }

  id: number = Number(this.router.url.replace("/",""));
  movieDetail: any = null;
  

  /**
   * Funcion que se ejecuta al iniciar el componente de la pelicula en concreto.
   * Comprueba que si date o descripcion tienen datos. Si alguno de ellos no lo tienen, le asigna los datos de la API
   */
  ngOnInit() {
    const localData = localStorage.getItem("movies");
    if (localData != null) {
      let movies = JSON.parse(localData);
      let Movie = movies[this.findID(movies, this.id)];
      if (Movie.date == undefined || Movie.description == undefined) {
        this.movieDetailAPI.getDetails(this.id).subscribe((MovieAPI: Movie) => this.moreDetails(MovieAPI));
      } else {
        this.movieDetail = Movie;
      }
    }
  }

  /**
   * Funcion que asigna los datos de Date y description de la pelicula que se le pasa por parametros a 
   * su misma pelicula que se encuentra almacenada en el localstorage
   * @param Movie 
   */
  moreDetails(Movie: Movie) {
    const localData = localStorage.getItem("movies");
    if (localData != null) {
      let movies: Movie[] = JSON.parse(localData);
      let index: number = this.findID(movies, this.id);
      movies[index].date = Movie.date;
      movies[index].description = Movie.description;
      localStorage.setItem("movies", JSON.stringify(movies));
      this.movieDetail = movies[index];
    }
  }

  /**
   * Funcion que busca el indice de la pelicula en especifico y nos devuelve su indice dentro de un listado
   * @param movies listado de peliculas
   * @param id id de la pelicula a buscar
   * @returns indice de la pelicula que estamos buscando
   */
  findID(movies: Movie[], id: number): number {
    let index = 0;
    movies.forEach(movie => {
      if (movie.id == id) {
        index = movies.indexOf(movie);
      }
    });
    return index;
  }
}
