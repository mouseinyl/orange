import { AngularMaterialModule } from './share/angular-material/angular-material.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// ngrx
import { StoreModule } from '@ngrx/store';
import { trackReducer } from './store/track.reducer';




import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NavComponent } from './share/nav/nav.component';
import { CardSongComponent } from './components/card-song/card-song.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PlayerComponent } from './components/player/player.component';
import { CommetsComponent } from './components/commets/commets.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavComponent,
    CardSongComponent,
    ListCardComponent,
    SpinnerComponent,
    PlayerComponent,
    CommetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    StoreModule.forRoot({track: trackReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
