import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { Router } from '@angular/router';
import { moviesMock } from 'src/app/mock/movie.mock';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  constructor(private router: Router) {

  }

  /**
   * Funcion que crea una pelicula nueva en base a los parametros dados 
   * @param name titulo de la pelicula
   * @param poster poster de la pelicula
   * @param date fecha de estreno de la pelicula
   * @param description descripcion de la pelicula
   * @returns la pelicula con los parametros pasados
   */
  createMovie(name: string, poster: string, date: string, description: string) : Movie {
    return new Movie(this.createID(), name, poster, date, description);
  }
  

  /* Funciones API */

  /**
   * Funcion que recorre todos los ID's para comprobar cuál es el ID correspondiente
   * @returns number ID de la pelicula
   */
  createID(): number {
    const localData = localStorage.getItem("movies");
    let newID = 0;
    if (localData != null) {
      let moviesList: Movie[] = JSON.parse(localData);
      newID = moviesList.length + 1;
      for (let i = 1; i < moviesList.length; i++) {
        if (moviesList[i-1].id != i) {
          newID = i;
          break;
        }
      }
    }
    return newID;
  }

  /**
   * Funcion para añadir una pelicula al localstorage
   */
  addMovie() {
    let title: string = (<HTMLInputElement>document.getElementById("movieTitle")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("moviePoster")).value;
    let date: string = (<HTMLInputElement>document.getElementById("movieDate")).value;
    let description: string = (<HTMLInputElement>document.getElementById("movieDescription")).value;
    let localData = localStorage.getItem("movies");
    if (localData != null) {
      let movieList: Movie[] = JSON.parse(localData);
      let newMovie: Movie = this.createMovie(title, poster, date, description);
      movieList.push(newMovie);
      localStorage.setItem('movies', JSON.stringify(movieList));
      this.router.navigate(['']);
    }
  }
}
