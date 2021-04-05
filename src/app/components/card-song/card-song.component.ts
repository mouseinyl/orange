import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeTrack } from 'src/app/store/store.structure';
import { Router } from '@angular/router';
import { PauseAction, PlayAction } from 'src/app/store/track.action';
import { TracksObject } from 'src/app/model/interface/tracks';


@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.scss']
})
export class CardSongComponent implements OnInit {

  @Input() data: TracksObject;
  @Output() onPlay: EventEmitter<any> = new EventEmitter()
  public status: { hasData: boolean, isPause: boolean }
  public loadding =  false

  constructor
    (private store: Store<{ track: storeTrack }>,private router: Router) {}

  ngOnInit(): void { this.start() }

  start(){
    this.store.select('track').subscribe((x) => {
      this.status = { hasData: false, isPause: true }
      if (typeof x.trackData  != undefined &&
          typeof this.data !=  undefined   &&
          x.trackData != null
          ) {
        if (x.trackData.id == this.data.id) {
          this.status = { hasData: x.trackCardObject.on, isPause: !x.trackCardObject.status }
          this.loadding = false;
        }
      }
    })
  }

  play(id) {
    if (this.status.hasData) {
      !this.status.isPause ? this.pause() : this.playSong()
    } else {
      this.onPlay.emit({ status: !this.status.hasData, id: id, data: this.data })
      this.loadding = true;
    }
  }
  pause() {
    this.store.dispatch(new PauseAction())
  }

  playSong() {
    this.store.dispatch(new PlayAction())
  }

  goArtist(id) {
    this.router.navigate(['artista', id])
  }

}
