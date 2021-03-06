import { CardSongComponent } from '../components/card-song/card-song.component';
import { TrackCardObject, TracksObject } from '../model/interface/tracks';


export interface storeTrack{
  trackData:TracksObject | null
  urlSong: string
  trackCardObject: {on: boolean , status : boolean }
}
