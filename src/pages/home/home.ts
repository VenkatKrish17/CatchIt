import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HostLoginPage} from '../host-login/host-login';
import {JoinPage} from '../join/join';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    let alert = this.alertCtrl.create({
      title: 'Hola !! ',
      subTitle: "As a Host, you can choose the duration and the objects to be hunt, and pass on the code to the participants. If you are a participant, click on Join, and enter the code to start hunting.",
      buttons: ['Gotcha !']
    });
    alert.present();
  }
  navigateToPage(page): void {
    console.log(page)
    if(page=="host"){
      this.navCtrl.push(HostLoginPage);
    }
    else{
      this.navCtrl.push(JoinPage);
    }
    
 }

}
