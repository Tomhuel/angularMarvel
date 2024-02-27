import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { UpdateMovieComponent } from './component/update-movie/update-movie.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MovieComponent,
    MovieDetailComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
