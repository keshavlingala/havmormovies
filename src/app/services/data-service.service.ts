import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../interface/movie';
import {ImdbMovie} from '../interface/imdbMovie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _currSort = 'trending';
  private _sorters = [
    'trending',
    'popularity',
    'last added',
    'year',
    'title',
    'rating'
  ];
  private _selectedMovie: Movie;


  loadfulldesc() {
    return this.http.get('https://www.omdbapi.com/?i=' + this.selectedMovie.imdb_id + '&plot=full' + '&apikey=514d9f8c');
  }

  get selectedMovie(): Movie {
    return this._selectedMovie;
  }

  set selectedMovie(value: Movie) {
    this._selectedMovie = value;
  }

  constructor(private http: HttpClient) {
  }

  get currSort(): string {
    return this._currSort;
  }

  set currSort(value: string) {
    this._currSort = value;
  }

  get sorters(): string[] {
    return this._sorters;
  }

  set sorters(value: string[]) {
    this._sorters = value;
  }

}
