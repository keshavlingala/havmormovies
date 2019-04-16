import {Injectable} from '@angular/core';
import {Movie} from '../interface/movie';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {
  private _movies: Movie[] = [];
  private _genres = [
    'All',
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short',
    'Sport',
    'Thriller',
    'War',
    'Western'
  ];


  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  get movies(): Movie[] {
    return this._movies;
  }

  get genres(): string[] {
    return this._genres;
  }

  async  load(sort?: string) {
    if (sort) {
       await  this.http.get('https://movies-v2.api-fetch.website/movies/1?sort=' + sort).subscribe(res => {
        this._movies = res as Movie[];
      });
    } else {
      await this.http.get('https://movies-v2.api-fetch.website/movies/1?sort=' + this.dataService.currSort).subscribe(res => {
        this._movies = res as Movie[];
      });
    }

  }

}
