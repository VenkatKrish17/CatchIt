import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameServiceProvider} from "../../providers/game-service/game-service";
import {LeaderBoardPage} from "../leader-board/leader-board"
import { HomePage } from '../home/home';
/**
 * Generated class for the HostLivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-host-live',
  templateUrl: 'host-live.html',
  providers:[GameServiceProvider]
})
export class HostLivePage {
  gameInfo:{};
  start_time:Date;
  current_time:Date;
  duration:Number;
  timer:any;
  playertimer:any;
  countdown=-1;
  players=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private gameService:GameServiceProvider) {
    this.gameInfo=this.navParams.get("data")
    this.start_time=new Date(this.gameInfo["game_time"])
    this.duration=parseInt(this.gameInfo["duration"])
    this.current_time=new Date()
    

    
  }
  stopGame(){
    console.log("Stopping game")
    this.gameService.stopGame(this.gameInfo['game_code']).subscribe(resp=>{
      console.log(resp)
    })
    this.navCtrl.setRoot(LeaderBoardPage
    ,{"data":this.players})



  }

  gohome(){
    this.navCtrl.setRoot(HomePage)
  }

  refreshData(){
    this.current_time=new Date()
    let difference =(this.current_time.getTime()-this.start_time.getTime())/1000
    this.countdown=parseInt(""+(parseInt(""+this.duration)*60-difference))
     document.getElementById("timer").innerHTML=""+this.countdown
    console.log(difference)
    if(this.countdown==0){
      this.stopGame()
      clearInterval(this.timer)
      this.timer=null;
    }
  }

  refreshPlayers(){
    this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(resp=>{
      this.players=resp['data']

      this.players.sort(function(a,b){
        return b.score - a.score
      })

      console.log(this.players)
    })
    if(this.countdown==0){
      console.log("refreshing players")
      clearInterval(this.playertimer)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HostLivePage');
    document.getElementById("game_code").innerHTML=""+this.gameInfo["game_code"]
    this.timer=setInterval(()=>{this.refreshData()},1000)
    this.gameService.getPlayers(this.gameInfo['game_code']).subscribe(resp=>{
      if(resp["status"]){
        console.log(resp)
        this.players=<Array<any>>resp["data"]
        console.log(resp["data"])
        this.playertimer=setInterval(()=>{this.refreshPlayers()},1000)
      }
      else{
        alert("Cannot fetch players")
      }
     
    })
   
  }

}
