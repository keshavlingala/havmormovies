import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {FullMovieDescComponent} from './full-movie-desc/full-movie-desc.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'movie/:title', component: FullMovieDescComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
