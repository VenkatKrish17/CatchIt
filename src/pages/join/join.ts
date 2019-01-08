import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GamePage} from '../game/game';
import {GameServiceProvider} from "../../providers/game-service/game-service";
/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
  providers:[GameServiceProvider]
})
export class JoinPage {
  game_code:Number;
  nick_name:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public gameService:GameServiceProvider) {
  this.game_code=null;
  this.nick_name=null;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }
  
  startGame(){
    console.log("starting game")
    this.gameService.getActiveGame({"nick_name":this.nick_name,"game_code":this.game_code}).subscribe(resp=>{
      console.log(resp)
      if(resp.status){
        let _data=resp['data']
        _data['nick_name']=this.nick_name
        this.navCtrl.setRoot(GamePage, {data:_data}, {animate: true, direction: 'forward'});
      }
      else{
        alert(resp.message)
      }
      
    })
    // if(this.gameid==12345){
    //   this.navCtrl.setRoot(GamePage, {}, {animate: true, direction: 'forward'});
    // }
  }

}
