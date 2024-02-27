import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { moviesMock } from 'src/app/mock/movie.mock';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent {

  public id: number = Number(this.router.url.split("/")[2]);
  public movie: Movie = this.getData(this.id);

  constructor(private router: Router) {

  }

  /**
   * Funcion que recoge los datos de localstorage y devuelve los datos de la pelicula especifica
   * @param id de la pelicula
   * @returns pelicula
   */
  getData(id: number) {
    let localData = localStorage.getItem("movies");
    if (localData != null) {
      let movieList: Movie[] = JSON.parse(localData);
      let index = this.findID(movieList, id);
      this.movie = movieList[index];
    }
    return this.movie;
  }

  /**
   * Funcion que busca el indice de la pelicula que estamos buscando
   * @param movies listado de peliculas
   * @param id id a buscar
   * @returns indice de la pelicula que estamos buscando
   */
  findID(movies: Movie[], id: number) {
    let index: number = 0;
    movies.forEach(movie => {
      if (id == movie.id) {
        index = movies.indexOf(movie);
      }
    });
    return index;
  }

  /**
   * Funcion que recoge los datos del formulario y genera una nueva pelicula para almacenarla y asi actualizarla
   * @param id id de la pelicula a actualizar
   */
  updateMovie(id: number) {
    let title: string = (<HTMLInputElement>document.getElementById("movieTitle")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("moviePoster")).value;
    let date: string = (<HTMLInputElement>document.getElementById("movieDate")).value;
    let description: string = (<HTMLInputElement>document.getElementById("movieDescription")).value;
    let localData = localStorage.getItem("movies");
    if (localData != null) {
      let movieList: Movie[] = JSON.parse(localData);
      let index = this.findID(movieList, id);
      movieList[index] = new Movie(movieList[index].id, title, poster, date, description);
      localStorage.setItem("movies", JSON.stringify(movieList));
      this.router.navigate(['/'+this.id]);
    }
  }
}
