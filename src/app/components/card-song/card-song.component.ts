import { TracksObject } from './../../interface/tracks';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.scss']
})
export class CardSongComponent implements OnInit {
  @Input() data:TracksObject;
  @Output() accion: EventEmitter<any> = new EventEmitter()
  public url:string
  public audio:HTMLAudioElement
  // public audio


  constructor() {
  }

  ngOnInit(): void {
    // console.log(th is.data)
    this.audio = new Audio()
  }

  goArtist(id){

  }
  play(id){
    const obj = {
      ref: this.audio,
      id: id
    }
    this.accion.emit(obj)
  }

}
