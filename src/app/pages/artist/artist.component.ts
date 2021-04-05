
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksObject } from 'src/app/model/interface/tracks';
import { user } from 'src/app/model/interface/user';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public id:number
  public userData:{userData:user , userTracks:TracksObject[]}
  public loadding = false;

  constructor(private track: TracksService, private route: ActivatedRoute ) {
   this.id =  this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.getDataUser(this.id);
  }


  getDataUser(id){
    this.loadding = true;
    this.track.getDataUser(id).subscribe(
      ([userData,userTracks])=>{
        this.userData = {userData,userTracks}
        this.loadding = false;
      }
    )
  }

}
