import { TracksObject } from './../../interface/tracks';
import { TracksService } from './../../services/tracks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  public data:TracksObject[] = []

  constructor(private track: TracksService) { }

  ngOnInit(): void {
    this.getTrack()
  }

  getTrack(){
    this.track.getTrack().subscribe((x:TracksObject[])=>{ this.data = x})
  }
  action(e){
    console.log(e);
    this.track.getSong(e.id).subscribe(x=>{},(err)=>{
      console.log(err);
    })
  }
}
