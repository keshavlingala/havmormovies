import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule, MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FullMovieDescComponent} from './full-movie-desc/full-movie-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    FullMovieDescComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
