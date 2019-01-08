import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leader-board',
  templateUrl: 'leader-board.html',
})
export class LeaderBoardPage {
players=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.players=this.navParams.get("data")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');
  }

}
