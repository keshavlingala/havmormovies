import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data-service.service';
import {ImdbMovie} from '../interface/imdbMovie';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Movie} from '../interface/movie';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-full-movie-desc',
  templateUrl: './full-movie-desc.component.html',
  styleUrls: ['./full-movie-desc.component.css']
})
export class FullMovieDescComponent implements OnInit {
  private _selectImdbMovie: ImdbMovie;
  panelOpenState = false;
  loading = true;
  clipboard: ClipboardEvent;

  constructor(private dataService: DataService,
              private http: HttpClient,
              private snack: MatSnackBar,
              private router: Router) {
  }

  href(trailer: string) {
    window.open(trailer);
  }

  get selectImdbMovie(): ImdbMovie {
    return this._selectImdbMovie;
  }

  get selectedMovie(): Movie {
    return this.dataService.selectedMovie;
  }

  async ngOnInit() {
    if (this.dataService.selectedMovie) {
      await this.dataService.loadfulldesc().subscribe(res => {
        this._selectImdbMovie = res as ImdbMovie;
        this.loading = false;
      });
    } else {
      this.router.navigate(['/']);
    }
  }


  auxclick(url) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.snack.open('Magnet Url Copied to Clipboard', 'Dismiss', {
      duration: 2000
    });
    return false;
  }

  stream(url: string) {
    this.snack.open('Streaming not available, to download click on magnet url', '', {
      duration: 2000
    });
  }
}
