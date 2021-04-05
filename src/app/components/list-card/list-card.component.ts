

import { LoadAction } from './../../store/track.action';
import { storeTrack } from './../../store/store.structure';
import { TracksObject } from '../../model/interface/tracks';
import { TracksService } from './../../services/tracks.service';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

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
  @Input() arrayTrackForUser?:TracksObject[]
  public data:TracksObject[] = []
  public on:boolean = false
  public loadding = false;
  public find
  public limit= 25;
  constructor(
    private store: Store<{ track: storeTrack }>,
    private route: ActivatedRoute,
    private track: TracksService) {
      if(this.route.snapshot.params.find){
        console.log(this.route.snapshot.params.find)
        this.find = this.route.snapshot.params.find
      }
    }

  ngOnInit(): void {
    this.getTrack()
  }
  getTrack(){

    if (this.arrayTrackForUser){
      this.data =  this.arrayTrackForUser;
    }else{
      this.loadding = true;
      if(this.find){
        this.track.getTrack(this.limit,this.find).subscribe((x:TracksObject[])=>{ this.data = x; this.loadding = false})
      }else{
        this.track.getTrack(this.limit).subscribe((x:TracksObject[])=>{
          this.data = x; this.loadding = false
        })
      }
    }
  }
  action(e:chillObjet){
    this.track.getSong(e.id).subscribe(x=>{},(err)=>{
      this.store.dispatch(new LoadAction({trackData:e.data,urlSong:err.url, trackCardObject:{on:e.status, status:true}}))
    })
  }

  onScrollDown(state: number,max:number){
    if ((max - 100) < state){
      this.limit =  this.limit + 15;
      this.getTrack()
    }
  }
}

