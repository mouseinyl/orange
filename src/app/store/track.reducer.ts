
import { LOAD, PAUSE, PLAY } from 'src/app/store/track.action';
import { ActionsTrack } from './track.action';
import { storeTrack } from './store.structure';

const inictialState:storeTrack = {
  trackData: null,
  trackCardObject:{on:false ,status:false},
  urlSong: ''
}

export function trackReducer(state:storeTrack = inictialState, action: ActionsTrack  ){
  console.log('10')
  switch (action.type) {

    case LOAD:
      return  {
        trackData:action.payload.trackData,
        trackCardObject:action.payload.trackCardObject,
        urlSong:action.payload.urlSong
      }
  ////////////////////
    case PAUSE:
      return {
        trackData: state.trackData,
        trackCardObject:{on: state.trackCardObject.on , status:false} ,
        urlSong: state.urlSong
      }
  // /////////////////////////
    case PLAY:
      return {
        trackData: state.trackData,
        trackCardObject:{on: state.trackCardObject.on , status:true} ,
        urlSong: state.urlSong
      }

    default:
      return state
  }

}
