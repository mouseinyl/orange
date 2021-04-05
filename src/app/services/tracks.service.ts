
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subscriber } from 'rxjs';
import { user } from '../model/interface/user';
import { TracksObject } from '../model/interface/tracks';
type NewType = user;

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  public endpoint = "https://api.soundcloud.com/";
  public clientId ="8f72068177ceff3543fb2d7b05f50b5f";
  public options= {
    params: new HttpParams,
    Headers: new HttpHeaders
  }
  constructor(private http: HttpClient ) {

    this.options.params = this.options.params.set('client_id', this.clientId)
    // this.options.params = this.options.params.set('client_id', this.clientId)
  }
  getTrack(find?:string){
    if(find){
      this.options.params = this.options.params.set('q', find);
    }else{
      this.options.params = this.options.params.set('q', '');
    }
    return this.http.get(this.endpoint+ 'tracks' ,this.options)
  }
  getSong(id){
    return this.http.get(this.endpoint+ `tracks/${id}/stream`  ,this.options)
  }
  getComment(id:number, limit?:number){
    if(limit){
      this.options.params = this.options.params.set('limit',limit +'');
    }
    return this.http.get(this.endpoint+ `tracks/${id}/comments`,this.options)
  }
  getUser(id):Observable<user>{
    return this.http.get<user>(this.endpoint+ 'users/' + id  ,this.options)
  }

  getTrackForUser(id):Observable<TracksObject[]>{
    return this.http.get<TracksObject[]>(this.endpoint+ `users/${id}/tracks` ,this.options)
  }
  getDataUser(id):Observable<[user,TracksObject[]]>{
    return combineLatest([
       this.getUser(id),
       this.getTrackForUser(id)
     ])
  }

}
