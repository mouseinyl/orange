import { CardSongComponent } from './../../components/card-song/card-song.component';
import { PlayAction } from './../../store/track.action';
import { chillObjet } from './../../components/list-card/list-card.component';
import { TracksObject } from './../../interface/tracks';
import { storeTrack } from './../../store/store.structure';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public on: boolean = false;
  public data:TracksObject;
  public url

  constructor(private store: Store<{ track:storeTrack }>){
    this.store.select('track').subscribe((x) =>{
      if(x.trackCardObject){
        this.on = x.trackCardObject.on
        this.data = x.trackData
        this.url = x.urlSong
      }else{
        this.on = x.trackCardObject.on
      }
     });
  }

  ngOnInit(): void {
    // this.getTrack();
  }



}
