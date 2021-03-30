
import { LoadAction } from './../../store/track.action';
import { storeTrack } from './../../store/store.structure';
import { TracksObject } from './../../interface/tracks';
import { TracksService } from './../../services/tracks.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
export interface chillObjet {
  status:boolean,
  id: string,
  data:TracksObject

}
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})


export class ListCardComponent implements OnInit {
  public data:TracksObject[] = []
  public on:boolean = false

  constructor(
    private store : Store<{track: storeTrack}>,
    private track: TracksService) {
      this.store.select('track').subscribe((x)=>{
        console.log(x);
      })
    }

  ngOnInit(): void {
    this.getTrack()
  }
  getTrack(){
    this.track.getTrack().subscribe((x:TracksObject[])=>{ this.data = x})
  }
  action(e:chillObjet){
    this.track.getSong(e.id).subscribe(x=>{},(err)=>{
      this.store.dispatch(new LoadAction({trackData:e.data,urlSong:err.url, trackCardObject:{on:e.status, status:true}}))
    })
  }
}

