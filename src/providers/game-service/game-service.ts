import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameServiceProvider {
  allObjects=['mobile','cup','bottle','pen','cellphone','pencil','laptop','mouse','keyboard','sunglasses']
  constructor(public http: HttpClient) {
    console.log('Hello GameServiceProvider Provider');
  }


  getAllObjects():String[]{
    return  this.allObjects;
    }

  startGame(gameInfo:any):Observable<any>{
    console.log(gameInfo)
    return  this.http.post('https://catchitbackend.herokuapp.com/game/',gameInfo)
  }

  stopGame(game_code:any):Observable<any>{
    console.log(game_code)
    return this.http.post("https://catchitbackend.herokuapp.com/stop_game/",{"game_code":game_code})
  }

  getActiveGame(playerGameInfo:any):Observable<any>{
    return this.http.post("https://catchitbackend.herokuapp.com/get_game/",playerGameInfo)
  }

  getPlayers(gameCode:any):Observable<any>{
    return  this.http.get('https://catchitbackend.herokuapp.com/players/'+gameCode)
  }

  putScore(playerInfo:any):Observable<any>{
    return this.http.post("https://catchitbackend.herokuapp.com/score",playerInfo)
  }

}
