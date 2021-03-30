import { trackComment } from './../../interface/tracks';
import { Component, Input, OnInit } from '@angular/core';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-commets',
  templateUrl: './commets.component.html',
  styleUrls: ['./commets.component.scss']
})
export class CommetsComponent implements OnInit {
  @Input() trackiId:number;
  public arrayComment:trackComment[] = [];

  constructor(public track: TracksService) { }

  ngOnInit(): void {
    this.getCommet()
  }

  getCommet(){
    this.track.getComment(this.trackiId,15).subscribe((x:trackComment[])=>{this.arrayComment = x})
  }
}

