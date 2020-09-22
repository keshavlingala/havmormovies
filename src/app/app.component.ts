import { Component, OnInit } from '@angular/core';
import { MovieDbService } from './services/movie-db.service';
import * as aos from 'aos';
import { DataService } from './services/data-service.service';
import { MatMenu } from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Humor';

  constructor(
    private _movdb: MovieDbService,
    private _dataService: DataService,
    private http: HttpClient
  ) {
    aos.init();
  }

  ngOnInit(): void {
  }

  get movdb(): MovieDbService {
    return this._movdb;
  }

  get dataService(): DataService {
    return this._dataService;
  }

  sortMovies(sort: string | MatMenu) {
    this.dataService.currSort = sort as string;
    this.movdb.load();
    console.log(sort);
  }
}
