import {Component, OnInit} from '@angular/core';
import {Movie} from '../interface/movie';
import {HttpClient} from '@angular/common/http';
import {ImdbMovie} from '../interface/imdbMovie';
import {DataService} from '../services/data-service.service';
import {MovieDbService} from '../services/movie-db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  loading = true;

  constructor(private _movieDB: MovieDbService,
              private dataService: DataService,
              private router: Router) {
  }

  async ngOnInit() {
    await this.movieDB.load(this.dataService.currSort).then(
      res => {
        this.loading = false;
      }
    );
  }

  href(trailer: string) {
    window.open(trailer);
  }

  get movieDB(): MovieDbService {
    return this._movieDB;
  }

  brief(movie: Movie) {
    this.router.navigate(['movie/' + movie.title]);
    this.dataService.selectedMovie = movie;
  }
}
