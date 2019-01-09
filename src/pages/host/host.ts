import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameServiceProvider} from "../../providers/game-service/game-service";
import { AlertController } from 'ionic-angular';
import {HostLivePage} from "../host-live/host-live";

/**
 * Generated class for the HostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-host',
  templateUrl: 'host.html',
  providers:[GameServiceProvider]
})
export class HostPage {
  gameObj={'game_code':null,'duration':"5",'objects':[],'hosted_by':null}
  user=null;
  allObjects=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public gameService:GameServiceProvider,private alertCtrl: AlertController) {
    this.gameObj.hosted_by=this.navParams.get("data")["userid"]
    this.allObjects=this.gameService.getAllObjects()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HostPage');
  }

  host_game(){
    if(this.gameObj.objects.length<3){
      let alert = this.alertCtrl.create({
        title: 'Aiyoh !! ',
        subTitle: 'Too Few Objects for the game! ',
        buttons: ['Add More']
      });
      alert.present();
    }
    else{
      this.gameService.startGame(this.gameObj).subscribe(resp => {
        console.log(resp)
        if(resp["status"]){
          this.navCtrl.setRoot(HostLivePage,{
            'data':resp
          })
        }
        else{
          console.log(resp["message"])
        }
        
      })
      
    }
  }

}
