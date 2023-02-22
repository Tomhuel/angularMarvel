import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { UpdateMovieComponent } from './component/update-movie/update-movie.component';

const routes: Routes = [
  { path: "", component: MovieComponent },
  { path: "add", component: AddMovieComponent},
  { path: "update/:id", component: UpdateMovieComponent },
  { path: ":id", component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
