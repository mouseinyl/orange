import { storeTrack } from './store.structure';
import { Action } from '@ngrx/store';


export const LOAD = '[track] Load';
export const PLAY = '[track] Play';
export const PAUSE = '[track] Pause';





export class LoadAction implements Action  {
  readonly type = LOAD;
  constructor(public payload:storeTrack) {}
}

export class PlayAction implements Action  {
  readonly type = PLAY;
}

export class PauseAction  implements Action{
   readonly type = PAUSE;
}


export type ActionsTrack = PlayAction | PauseAction | LoadAction;
