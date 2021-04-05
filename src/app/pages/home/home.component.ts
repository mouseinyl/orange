
import { TracksObject } from '../../model/interface/tracks';
import { storeTrack } from './../../store/store.structure';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public on: boolean = false;
  public data:TracksObject;
  public url
  public find: string;

  constructor(private store: Store<{ track:storeTrack }>,){
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

  ngOnInit(): void {}



}
